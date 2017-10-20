import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK, AUTH_GET_PERMISSIONS, AUTH_ERROR } from 'admin-on-rest';

const config = require('./config');

export default (type, params) => {
    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        const request = new Request(config.api.baseUrl + '/Users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        })
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then((loginResponse) => {
                localStorage.setItem('access_token', loginResponse.id);
                localStorage.setItem('userId', loginResponse.userId);
            });
    }

    if (type === AUTH_LOGOUT) {
        const request = new Request(config.api.baseUrl + '/Users/logout', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('access_token')
            }),
        })
        return fetch(request)
            .then(response => {
                localStorage.removeItem('access_token');
                localStorage.removeItem('userId');
                return Promise.resolve();
            });
    }

    if (type === AUTH_CHECK) {
        return localStorage.getItem('access_token') ? Promise.resolve() : Promise.reject();
    }

    if (type === AUTH_GET_PERMISSIONS) {
        if(!localStorage.getItem('userId')) {
            return Promise.resolve();
        }

        const request = new Request(config.api.baseUrl + '/RoleMappings/findOne?filter={"where":{"principalId":"'+localStorage.getItem('userId')+'"},"include":{"relation":"role"}}', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('access_token')
            }),
        })
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then((roleResponse) => {
                return Promise.resolve(roleResponse.role.name);
            });
    }

    if (type === AUTH_ERROR) {
        const { status } = params;
        if (status === 401 || status === 403) {
            localStorage.removeItem('access_token');
            localStorage.removeItem('userId');
            return Promise.reject();
        }
        return Promise.resolve();
    }

    return Promise.reject('Unkown method');
}
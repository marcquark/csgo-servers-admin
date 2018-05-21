import React from 'react';
import { Admin, Resource, fetchUtils } from 'react-admin';
import loopbackRestClient from 'aor-loopback';

import { ServerList, ServerEdit, ServerCreate, ServerIcon } from './servers';
import { CategoryList, CategoryEdit, CategoryCreate, CategoryIcon } from './categories';
import { TagList, TagEdit, TagCreate, TagIcon } from './tags';
import { UserList, UserEdit, UserCreate, UserIcon } from './users';
import { RoleList, RoleEdit, RoleCreate, RoleIcon } from './roles';
import { RoleMappingList, RoleMappingEdit, RoleMappingCreate, RoleMappingIcon } from './rolemappings';

import authProvider from './authProvider';

const config = require('./config');

const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  const token = localStorage.getItem('access_token');
  options.headers.set('Authorization', `${token}`);
  return fetchUtils.fetchJson(url, options);
}

const App = () => (
  <Admin title="csgo-servers Admin UI" dataProvider={loopbackRestClient(config.api.baseUrl, httpClient)} authProvider={authProvider}>
    {permissions => [
      <Resource
        name="servers"
        list={ServerList}
        edit={ServerEdit}
        create={ServerCreate}
        icon={ServerIcon}
      />,
      <Resource
        name="categories"
        list={CategoryList}
        edit={CategoryEdit}
        create={CategoryCreate}
        icon={CategoryIcon}
      />,
      <Resource name="tags"
        list={TagList}
        edit={TagEdit}
        create={TagCreate}
        icon={TagIcon}
      />,
      permissions === 'admin' ?
        <Resource
          name="Users"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          icon={UserIcon}
        />
        : null,
      permissions === 'admin' ?
        <Resource
          name="Roles"
          list={RoleList}
          edit={RoleEdit}
          create={RoleCreate}
          icon={RoleIcon}
        />
        : null,
      permissions === 'admin' ?
        <Resource
          name="RoleMappings"
          options={{label: 'Role Mappings'}}
          list={RoleMappingList}
          edit={RoleMappingEdit}
          create={RoleMappingCreate}
          icon={RoleMappingIcon}
        />
        : null,
    ]}
  </Admin>
);

export default App;
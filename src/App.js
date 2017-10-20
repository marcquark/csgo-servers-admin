import React from 'react';
import { Admin, Resource, Delete, fetchUtils } from 'admin-on-rest';
import loopbackRestClient from 'aor-loopback';

import { ServerList, ServerEdit, ServerCreate, ServerIcon } from './servers';
import { CategoryList, CategoryEdit, CategoryCreate, CategoryIcon } from './categories';
import { TagList, TagEdit, TagCreate, TagIcon } from './tags';
import { UserList, UserEdit, UserCreate, UserIcon } from './users';
import { RoleList, RoleEdit, RoleCreate, RoleIcon } from './roles';
import { RoleMappingList, RoleMappingEdit, RoleMappingCreate, RoleMappingIcon } from './rolemappings';

import authClient from './authClient';

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
  <Admin title="csgo-servers Admin UI" restClient={loopbackRestClient(config.api.baseUrl, httpClient)} authClient={authClient}>
    {permissions => [
      <Resource
        name="servers"
        list={ServerList}
        edit={ServerEdit}
        create={ServerCreate}
        remove={Delete}
        icon={ServerIcon}
      />,
      <Resource
        name="categories"
        list={CategoryList}
        edit={CategoryEdit}
        create={CategoryCreate}
        remove={Delete}
        icon={CategoryIcon}
      />,
      <Resource name="tags"
        list={TagList}
        edit={TagEdit}
        create={TagCreate}
        remove={Delete}
        icon={TagIcon}
      />,
      permissions === 'admin' ?
        <Resource
          name="Users"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          remove={Delete}
          icon={UserIcon}
        />
        : null,
      permissions === 'admin' ?
        <Resource
          name="Roles"
          list={RoleList}
          edit={RoleEdit}
          create={RoleCreate}
          remove={Delete}
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
          remove={Delete}
          icon={RoleMappingIcon}
        />
        : null,
    ]}
  </Admin>
);

export default App;
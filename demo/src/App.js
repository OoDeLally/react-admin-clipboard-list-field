import React from 'react';
import { Admin, Resource } from 'react-admin';
import { UserList, UserEdit } from './users';
import { userDocs } from './user-docs';


const dataProvider = {
  getList: async () => ({
    data: userDocs,
    total: 10,
  }),
  getOne: async (resource, params) => ({
    data: userDocs.find(doc => doc.id === params.id),
  }),
};


const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={UserList} edit={UserEdit} />
  </Admin>
);

export default App;

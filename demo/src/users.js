import React from 'react';
import { List, Datagrid, TextField, EmailField, TextInput, Edit, SimpleForm, SimpleShowLayout } from 'react-admin';
import { ObjectIdField } from 'react-admin-objectid-field';

export const UserList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="nickname" />
      <EmailField source="email" />
    </Datagrid>
  </List>
);



const UserEditAside = (props) => (
  <SimpleShowLayout {...props}>
    <ObjectIdField source="id" quotes="'" iconPosition="left" />
  </SimpleShowLayout>
);

export const UserEdit = (props) => (
  <Edit aside={<UserEditAside />} {...props}>
    <SimpleForm>
      <ObjectIdField source="id"  quotes='"' iconPosition="none" />
      <TextField source="nickname" />
      <TextInput source="nickname" />
      <TextInput source="email" />
    </SimpleForm>
  </Edit>
);

# React Admin

Custom field for ObjectIds in [React Admin](https://github.com/marmelab/react-admin).


![screenshot](https://github.com/OoDeLally/react-admin-objectid-field/blob/master/demo/react-admin-objectid-field.gif)



## Setup

```bash
npm install --save react-admin-objectid-field
```


```ts
import { ObjectIdField } from 'react-admin-objectid-field';


export const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      ...
      <ObjectIdField source="id" />
      ...
    </SimpleForm>
  </Edit>
);

```

## Props


| name          | values                  |  Optional    | default | description                                                  |
| --------------|-------------------------|--------------|---------|--------------------------------------------------------------|
| `quotes`      | `'` `"`                 |  Optional    | `'`     | Type of quotes to use to display the `ObjectId('...')` row.  |
| `iconPosition`| `left` `right` `none`   |  Optional    | `right` | Where the icon should be displayed in relation to the field. |

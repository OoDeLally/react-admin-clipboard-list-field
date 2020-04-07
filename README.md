# React Admin

Copy to clipboard in one click in [React Admin](https://github.com/marmelab/react-admin).


![screenshot](https://github.com/OoDeLally/react-admin-clipboard-list-field/blob/master/demo/react-admin-clipboard-list-field.gif)



## Setup

```bash
npm install --save react-admin-clipboard-list-field
```


```ts
import { ClipboardListField } from 'react-admin-clipboard-list-field';


export const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      ...
      <ClipboardListField source="id" />
      ...
    </SimpleForm>
  </Edit>
);

```

## Props


| name          | values                  |  Optional    | default | description                                                  |
| --------------|-------------------------|--------------|---------|--------------------------------------------------------------|
| `iconPosition`| `left` `right` `none`   |  Optional    | `right` | Where the icon should be displayed in relation to the field. |

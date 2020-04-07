# React Admin Clipboard List Field

Copy various format of the same value to clipboard in one click in [React Admin](https://github.com/marmelab/react-admin).


![screenshot](https://github.com/OoDeLally/react-admin-clipboard-list-field/blob/master/demo/react-admin-clipboard-list-field.gif)



## Setup

```bash
npm install --save react-admin-clipboard-list-field
```


```ts
import { ClipboardListField } from 'react-admin-clipboard-list-field';

const createRows = (value) => {
  return [
    value,
    `ObjectId("${value})"`,
  ];
}

export const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      ...
      <ClipboardListField source="id" iconPosition="left" createRows={createRows} />
      ...
    </SimpleForm>
  </Edit>
);

```

## Props


| Name           | Type                        |  Optional  | Default | Description                                     |
| ---------------|-----------------------------|------------|---------|-------------------------------------------------|
| `createRows`   | `(value: any) => string[]`  |            |         | Create the possible forms from the given value  |
| `iconPosition` | `"left"` `"right"` `"none"` |  Optional  | `right` | Icon position in relation to the field.         |



## Run the demo

```bash

git clone https://github.com/OoDeLally/react-admin-clipboard-list-field.git
cd react-admin-clipboard-list-field
npm run demo-install
npm run demo
```

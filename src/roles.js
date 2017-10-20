import React from 'react';
import {
    List,
    Edit,
    Create,
    Datagrid,
    SimpleList,
    Responsive,
    TextField,
    EditButton,
    DeleteButton,
    SimpleForm,
    TextInput
} from 'admin-on-rest';
import Icon from 'material-ui/svg-icons/social/person-outline';

export const RoleIcon = Icon;

export const RoleList = (props) => (
    <List {...props}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.name}
                    tertiaryText={record => record.id}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="name" />
                    <TextField source="description" />
                    <EditButton />
                    <DeleteButton />
                </Datagrid>
            }
        />
    </List>
);

export const RoleEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextField source="id" />
            <TextInput source="name" />
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
);

export const RoleCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="description" />
        </SimpleForm>
    </Create>
);
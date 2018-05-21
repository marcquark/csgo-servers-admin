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
} from 'react-admin';
import Icon from '@material-ui/icons/Bookmark';

export const CategoryIcon = Icon;

export const CategoryList = (props) => (
    <List {...props}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.name}
                    secondaryText={record => record.id}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="name" />
                    <EditButton />
                    <DeleteButton />
                </Datagrid>
            }
        />
    </List>
);

const CategoryTitle = ({ record }) => {
    return <span>Edit Category {record ? `"${record.name}"` : ''}</span>;
};

export const CategoryEdit = (props) => (
    <Edit title={<CategoryTitle />} {...props}>
        <SimpleForm>
            <TextField source="id" />
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);

export const CategoryCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);
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
import Icon from 'material-ui/svg-icons/file/attachment';

export const TagIcon = Icon;

export const TagList = (props) => (
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

const TagTitle = ({ record }) => {
    return <span>Edit Tag {record ? `"${record.name}"` : ''}</span>;
};

export const TagEdit = (props) => (
    <Edit title={<TagTitle />} {...props}>
        <SimpleForm>
            <TextField source="id" />
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);

export const TagCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);
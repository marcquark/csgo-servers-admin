import React from 'react';
import {
    List,
    Edit,
    Create,
    Datagrid,
    SingleFieldList,
    SimpleList,
    Responsive,
    TextField,
    EmailField,
    ChipField,
    ReferenceField,
    ReferenceManyField,
    EditButton,
    DeleteButton,
    SimpleForm,
    TextInput
} from 'admin-on-rest';
import Icon from 'material-ui/svg-icons/social/person';

export const UserIcon = Icon;

export const UserList = (props) => (
    <List {...props}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.username}
                    secondaryText={record => record.email}
                    tertiaryText={record => record.id}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="username" />
                    <EmailField source="email" />
                    <ReferenceManyField label="Roles" reference="RoleMappings" target="principalId">
                        <SingleFieldList>
                            <ReferenceField label="Role" source="roleId" reference="Roles">
                                <ChipField source="name" />
                            </ReferenceField>
                        </SingleFieldList>
                    </ReferenceManyField>
                    <EditButton />
                    <DeleteButton />
                </Datagrid>
            }
        />
    </List>
);

const UserTitle = ({ record }) => {
    return <span>Edit User {record ? `"${record.username}"` : ''}</span>;
};

export const UserEdit = (props) => (
    <Edit title={<UserTitle />} {...props}>
        <SimpleForm>
            <TextField source="id" />
            <TextInput source="username" />
            <TextInput source="email" type="email" />
            <TextInput source="password" type="password" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="username" />
            <TextInput source="email" type="email" />
            <TextInput source="password" type="password" />
        </SimpleForm>
    </Create>
);
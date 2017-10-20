import React from 'react';
import {
    List,
    Edit,
    Create,
    Datagrid,
    SimpleList,
    Responsive,
    TextField,
    ReferenceField,
    EditButton,
    DeleteButton,
    SimpleForm,
    ReferenceInput,
    SelectInput
} from 'admin-on-rest';
import Icon from 'material-ui/svg-icons/social/group';

export const RoleMappingIcon = Icon;

export const RoleMappingList = (props) => (
    <List {...props}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.principalId}
                    secondaryText={record => record.roleId}
                    tertiaryText={record => record.id}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="id" />
                    <ReferenceField label="User" source="principalId" reference="Users">
                        <TextField source="username" />
                    </ReferenceField>
                    <ReferenceField label="Role" source="roleId" reference="Roles">
                        <TextField source="name" />
                    </ReferenceField>
                    <EditButton />
                    <DeleteButton />
                </Datagrid>
            }
        />
    </List>
);

export const RoleMappingEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextField source="id" />
            <ReferenceInput label="User" source="principalId" reference="Users" allowEmpty>
                <SelectInput optionText="username" />
            </ReferenceInput>
            <ReferenceInput label="Role" source="roleId" reference="Roles" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const RoleMappingCreate = (props) => (
    <Create {...props}>
        <SimpleForm defaultValue={{principalType: "USER"}}>
            <ReferenceInput label="User" source="principalId" reference="Users" allowEmpty>
                <SelectInput optionText="username" />
            </ReferenceInput>
            <ReferenceInput label="Role" source="roleId" reference="Roles" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
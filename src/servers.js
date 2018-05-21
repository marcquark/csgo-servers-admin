import React from 'react';
import {
    List,
    Edit,
    Create,
    Filter,
    Datagrid,
    SimpleList,
    Responsive,
    TextField,
    BooleanField,
    NumberField,
    ReferenceField,
    EditButton,
    DeleteButton,
    ReferenceInput,
    SelectInput,
    SimpleForm,
    TextInput,
    ChipField,
    ReferenceArrayField,
    SingleFieldList,
    ReferenceArrayInput,
    SelectArrayInput
} from 'react-admin';
import Icon from '@material-ui/icons/Storage';

export const ServerIcon = Icon;

const ServerFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Name" source="name" alwaysOn />
        <ReferenceInput label="Category" source="categoryId" reference="categories" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput label="Tags" source="tagIds" reference="tags" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const ServerList = (props) => (
    <List {...props} filters={<ServerFilter />}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.ipport}
                    secondaryText={record => record.name}
                    tertiaryText={record => record.id}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="id" />
                    <TextField label="IP:Port" source="ipport" />
                    <TextField source="name" />
                    <TextField source="map" />
                    <NumberField source="players" />
                    <NumberField source="bots" />
                    <NumberField label="Max. Players" source="players_max" />
                    <BooleanField label="Is up?" source="is_up" />
                    <ReferenceField label="Category" source="categoryId" reference="categories">
                        <TextField source="name" />
                    </ReferenceField>
                    <ReferenceArrayField label="Tags" reference="tags" source="tagIds">
                        <SingleFieldList>
                            <ChipField source="name" />
                        </SingleFieldList>
                    </ReferenceArrayField>
                    <EditButton />
                    <DeleteButton />
                </Datagrid>
            }
        />
    </List>
);

const validateServerCreation = (values) => {
    const errors = {};

    if (!values.categoryId) {
        errors.categoryId = ['The Category is required'];
    }

    return errors
};

const ServerTitle = ({ record }) => {
    return <span>Edit Server {record ? `${record.ipport} ("${record.name}")` : ''}</span>;
};

export const ServerEdit = (props) => (
    <Edit title={<ServerTitle />} {...props}>
        <SimpleForm validate={validateServerCreation}>
            <TextField source="id" />
            <TextInput label="IP:Port" source="ipport" />
            <ReferenceInput label="Category" source="categoryId" reference="categories">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceArrayInput label="Tags" source="tagIds" reference="tags" allowEmpty>
                <SelectArrayInput optionText="name" />
            </ReferenceArrayInput>
        </SimpleForm>
    </Edit>
);

export const ServerCreate = (props) => (
    <Create {...props}>
        <SimpleForm validate={validateServerCreation}>
            <TextInput label="IP:Port" source="ipport" />
            <ReferenceInput label="Category" source="categoryId" reference="categories" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceArrayInput label="Tags" source="tagIds" reference="tags" allowEmpty>
                <SelectArrayInput optionText="name" />
            </ReferenceArrayInput>
        </SimpleForm>
    </Create>
);
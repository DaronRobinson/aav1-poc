import {
  DateInput,
  Edit,
  ReferenceArrayInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
  WrapperField,
  TextField,
  ReferenceField,
  SelectInput,
  required,
  NumberInput,
  ArrayInput,
  AutocompleteArrayInput,
  BooleanInput,
  useGetOne,
  useDataProvider,
  useGetList,
  useGetIdentity,
  useGetManyReference,
  useRecordContext,
} from "react-admin";
import {
  certificationProgrammes,
  certificationStages,
  auditObjectives,
  auditCriteria,
  auditType,
  auditScope,
} from "@/dataProvider/lists";
import { AssuranceFormField } from "@/components/assuranceFormFields";
import { EngagementMenu } from "./engagementMenu";
import TitleBar from "../../components/titleBar";
import { Grid, Divider, Box, Typography } from "@mui/material";
import { useWatch, useFormContext } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { Field, FieldState, FieldNote } from "@/types/assuranceFieldTypes";

const ChangeProgramme = () => {
  const programme = useWatch({ name: "certificationProgramme" });
  let objectives = auditObjectives[0]["id"];
  let criteria = auditCriteria[0]["id"];
  let scope = auditScope[0]["id"];

  if (programme === "verification-only") {
    objectives = auditObjectives[1]["id"];
    criteria = auditCriteria[1]["id"];
    scope = auditScope[1]["id"];
  }
  useFormContext().setValue("auditObjectives", objectives);
  useFormContext().setValue("auditCriteria", criteria);
  useFormContext().setValue("scope", scope);
  return null;
};

export const EngagementEdit = () => {
  const { id } = useParams(); //TODO - figure out how to access useRecordContext inside this sideBarLayout
  const { data, isLoading } = useGetOne("engagements", { id });
  let demoFieldStates = undefined;
  let demoFieldNotes = undefined;
  let demoField = undefined;

  const dataProvider = useDataProvider();
  const fields = useQuery(["fields", "getFields"], () =>
    dataProvider.getFields("engagements")
  );

  const { data: field_states } = useGetManyReference(
    "field_status",
    {
      target: "engagement_id",
      id: data?.id,
    },
    { enabled: !isLoading && data && data.id !== undefined }
  );

  const { data: notes } = useGetManyReference(
    "notes",
    {
      target: "engagement_id",
      id: data?.id,
    },
    { enabled: !isLoading && data && data.id !== undefined }
  );

  if (!field_states || !data || !fields || !notes) return null;

  demoFieldStates = field_states?.filter(
    (field_state: FieldState) => field_state.field === "mandatory_activities"
  );

  demoField = fields.data.data?.find(
    (field: Field) => field.field === "mandatory_activities"
  );

  demoFieldNotes = notes?.filter(
    (note: FieldNote) => note.field === "mandatory_activities"
  );

  //console.log("demoField", demoField);
  return (
    (data && demoField !== undefined && (
      <Grid container spacing={2}>
        <Grid item xs={6} sm={2}>
          <EngagementMenu />
        </Grid>
        <Grid item xs={6} sm={9}>
          <TitleBar title="Edit Engagement" itemName={data.name} />
          <Edit>
            <SimpleForm>
              <ChangeProgramme />

              <WrapperField>
                <Box sx={{ fontSize: "15px" }}>
                  ID: <TextField source="id" label="ID" />
                </Box>
                <Box sx={{ paddingBottom: "20px", fontSize: "15px" }}>
                  Organisation:{" "}
                  <ReferenceField
                    source="organisationId"
                    reference="organisations"
                  />
                </Box>
              </WrapperField>
              <Typography variant="h5" sx={{ paddingTop: "10px" }}>
                Programme Details
              </Typography>
              <TextInput source="name" sx={{ width: "100%" }} />
              <Grid container spacing={2}>
                <Grid item xs={6} sm={4}>
                  <SelectInput
                    source="certificationProgramme"
                    choices={certificationProgrammes}
                    fullWidth
                    validate={required()}
                  />
                </Grid>
                <Grid item xs={6} sm={4}>
                  <SelectInput
                    source="stageOfCertificationInProgramme"
                    choices={certificationStages}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6} sm={4}>
                  <SelectInput
                    source="auditType"
                    choices={auditType}
                    fullWidth
                  />
                </Grid>
                {/* <Grid item xs={6} sm={3}>
                <DateInput source="auditDate" fullWidth />
              </Grid> */}
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={6}>
                  <TextInput
                    source="auditObjectives"
                    fullWidth
                    multiline
                    className="plainInput"
                  />
                </Grid>
                <Grid item xs={6} sm={6}>
                  <TextInput
                    source="scope"
                    fullWidth
                    multiline
                    className="plainInput"
                  />
                </Grid>
              </Grid>
              <TextInput
                source="auditCriteria"
                fullWidth
                multiline
                className="plainInput"
              />
              <AssuranceFormField
                field={demoField}
                fieldStates={demoFieldStates}
                fieldNotes={demoFieldNotes}
                type="textArea"
              />

              {/* <Typography variant="h5" sx={{ paddingTop: "30px" }}>
              Reporting Period
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={6} sm={3}>
                <DateInput source="reportingBaseYearStartDate" fullWidth />
              </Grid>
              <Grid item xs={6} sm={3}>
                <DateInput source="reportingBaseYearEndDate" fullWidth />
              </Grid>
              <Grid item xs={6} sm={3}>
                <DateInput source="reportingYearStartDate" fullWidth />
              </Grid>
              <Grid item xs={6} sm={3}>
                <DateInput source="reportingYearEndDate" fullWidth />
              </Grid>
            </Grid>
            <Typography variant="h5" sx={{ paddingTop: "30px" }}>
              Assurance Details
            </Typography>
            <TextInput source="geographicalBoundaries" sx={{ width: "100%" }} />
            <TextInput
              source="typeOfGHG"
              label="Type of GHG"
              sx={{ width: "100%" }}
            />
            <AutocompleteArrayInput
              source="assuranceLevels"
              sx={{ width: "100%" }}
            />

            <Grid container spacing={2}>
              <Grid item xs={6} sm={3}>
                <NumberInput
                  source="materialityMandatory"
                  label="Mandatory Materiality Threshold"
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <NumberInput
                  source="materialitySupplyOptional"
                  label="Materiality Threshold: Supply/Optional"
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={4} sm={3}>
                <TextInput
                  source="consolidationMethod"
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={4} sm={3}>
                <BooleanInput
                  source="isConsolidationMethodChangeApproved"
                  label="Consolidation Change Approved?"
                  sx={{ width: "100%" }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={4} sm={3}>
                <TextInput
                  source="systemOrSoftwareUsed"
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={4} sm={6}>
                <TextInput
                  source="systemOrSoftwareComment"
                  sx={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={4} sm={3}>
                <BooleanInput
                  source="isReportingMethodAppropriate"
                  label="Reporting Method Appropriate?"
                  sx={{ width: "100%" }}
                />
              </Grid>
            </Grid>
            <Typography variant="h5" sx={{ paddingTop: "30px" }}>
              Verification Details
            </Typography>
            <h5>Auditor details go here</h5> */}

              {/* <ReferenceArrayInput source="excludedBusinessUnitIds" reference="excludedBusinessUnits" ><TextInput source="id" sx={{ width: "100%" }} /></ReferenceArrayInput>
        <TextInput source="inventoryCompilationProcess" sx={{ width: "100%" }} />
        <TextInput source="quantificationApproach" sx={{ width: "100%" }} />
        <TextInput source="statementOfIntent" sx={{ width: "100%" }} />
        <TextInput source="intendedUse" sx={{ width: "100%" }} />
        <TextInput source="excludeEmissionSources" sx={{ width: "100%" }} />
        <TextInput source="executiveSummary" sx={{ width: "100%" }} />
        <TextInput source="status" sx={{ width: "100%" }} /> */}
            </SimpleForm>
          </Edit>
        </Grid>
        <Grid item xs={6} sm={1}></Grid>
      </Grid>
    )) || <p>fail</p>
  );
};

/********************** Company **************************/

// import * as React from 'react';

// import { ReferenceInput, TextInput, SelectInput, required } from 'react-admin';
// import { Divider, Stack, Grid } from '@mui/material';

// import { sectors } from './sectors';
// import { sizes } from './sizes';

// export const CompanyForm = () => (
//   <>
//     <TextInput source="name" validate={required()} fullWidth />
//     <Stack direction="row">
//       <SelectInput
//         source="sector"
//         choices={sectors}
//         sx={{ width: 200 }}
//       />
//       <SelectInput
//         source="size"
//         choices={sizes}
//         sx={{ ml: 2, width: 200 }}
//       />
//     </Stack>
//     <Divider sx={{ mb: 2, width: '100%' }} />

//     <TextInput source="address" fullWidth helperText={false} />
//     <Grid container spacing={2}>
//       <Grid item xs={12} sm={4}>
//         <TextInput fullWidth source="city" />
//       </Grid>
//       <Grid item xs={12} sm={4}>
//         <TextInput fullWidth source="zipcode" />
//       </Grid>
//       <Grid item xs={12} sm={4}>
//         <TextInput fullWidth source="stateAbbr" />
//       </Grid>
//     </Grid>
//     <Divider sx={{ mb: 2, width: '100%' }} />

//     <TextInput source="website" fullWidth helperText={false} />
//     <TextInput source="linkedIn" fullWidth helperText={false} />
//     <TextInput source="logo" fullWidth />
//     <Divider sx={{ mb: 2, width: '100%' }} />

//     <Stack direction="row">
//       <TextInput
//         source="phone_number"
//         helperText={false}
//         sx={{ width: 200 }}
//       />
//       <ReferenceInput source="sales_id" reference="sales">
//         <SelectInput
//           label="Account manager"
//           helperText={false}
//           optionText={(sales: any) =>
//             `${sales.first_name} ${sales.last_name}`
//           }
//           sx={{ width: 200, ml: 2 }}
//         />
//       </ReferenceInput>
//     </Stack>
//   </>
// );

// import * as React from 'react';
// import { Edit, Form, Toolbar } from 'react-admin';
// import { Box, CardContent, Stack, Avatar } from '@mui/material';

// import { CompanyForm } from './CompanyForm';

// import { CompanyAside } from './CompanyAside';
// import { LogoField } from './LogoField';

// export const CompanyEdit = () => (
//   <Edit aside={<CompanyAside link="show" />} actions={false} redirect="show">
//     <Form>
//       <CardContent>
//         <Stack direction="row">
//           <Avatar sx={{ mt: 1 }}>
//             <LogoField />
//           </Avatar>
//           <Box ml={2} flex="1" maxWidth={796}>
//             <CompanyForm />
//           </Box>
//         </Stack>
//       </CardContent>
//       <Toolbar />
//     </Form>
//   </Edit>
// );

/********************** CompanyAside **************************/

// import * as React from 'react';
// import {
//   TextField,
//   DateField,
//   FunctionField,
//   ReferenceField,
//   EditButton,
//   ShowButton,
//   useRecordContext,
// } from 'react-admin';
// import { Box, Typography, Divider, Link } from '@mui/material';

// import { Company, Sale } from '../types';

// interface CompanyAsideProps {
//   link?: string;
// }

// export const CompanyAside = ({ link = 'edit' }: CompanyAsideProps) => {
//   const record = useRecordContext<Company>();
//   if (!record) return null;
//   return (
//     <Box ml={4} width={250} minWidth={250}>
//       <Box textAlign="center" mb={2}>
//         {link === 'edit' ? (
//           <EditButton label="Edit Company" />
//         ) : (
//           <ShowButton label="Show Company" />
//         )}
//       </Box>

//       <Typography variant="subtitle2">Company info</Typography>
//       <Divider />

//       <Box mt={2}>
//         <Typography variant="body2">
//           Website: <Link href={record.website}>{record.website}</Link>
//           <br />
//           LinkedIn: <Link href={record.linkedIn}>LinkedIn</Link>
//         </Typography>
//       </Box>

//       <Box mt={1}>
//         <TextField source="phone_number" />{' '}
//         <Typography
//           variant="body2"
//           color="textSecondary"
//           component="span"
//         >
//           Main
//         </Typography>
//       </Box>

//       <Box mt={1} mb={3}>
//         <TextField source="address" />
//         <br />
//         <TextField source="city" /> <TextField source="zipcode" />{' '}
//         <TextField source="stateAbbr" />
//       </Box>

//       <Typography variant="subtitle2">Background</Typography>
//       <Divider />

//       <Box mt={1}>
//         <Typography
//           variant="body2"
//           color="textSecondary"
//           component="span"
//         >
//           Added on
//         </Typography>{' '}
//         <DateField
//           source="created_at"
//           options={{ year: 'numeric', month: 'long', day: 'numeric' }}
//           color="textSecondary"
//         />
//         <br />
//         <Typography
//           component="span"
//           variant="body2"
//           color="textSecondary"
//         >
//           Followed by
//         </Typography>{' '}
//         <ReferenceField source="sales_id" reference="sales">
//           <FunctionField<Sale>
//             source="last_name"
//             render={record =>
//               `${record.first_name} ${record.last_name}`
//             }
//           />
//         </ReferenceField>
//       </Box>
//     </Box>
//   );
// };

/********************** Contacts **************************/

// import * as React from 'react';
// import { EditBase, Form, Toolbar, useEditContext } from 'react-admin';
// import { Card, CardContent, Box } from '@mui/material';

// import { Avatar } from './Avatar';
// import { ContactInputs } from './ContactInputs';
// import { ContactAside } from './ContactAside';
// import { Contact } from '../types';

// export const ContactEdit = () => (
//   <EditBase redirect="show">
//     <ContactEditContent />
//   </EditBase>
// );

// const ContactEditContent = () => {
//   const { isLoading, record } = useEditContext<Contact>();
//   if (isLoading || !record) return null;
//   return (
//     <Box mt={2} display="flex">
//       <Box flex="1">
//         <Form>
//           <Card>
//             <CardContent>
//               <Box>
//                 <Box display="flex">
//                   <Box mr={2}>
//                     <Avatar />
//                   </Box>
//                   <ContactInputs />
//                 </Box>
//               </Box>
//             </CardContent>
//             <Toolbar />
//           </Card>
//         </Form>
//       </Box>
//       <ContactAside link="show" />
//     </Box>
//   );
// };

// import * as React from 'react';
// import {
//   TextField,
//   EmailField,
//   DateField,
//   ReferenceManyField,
//   EditButton,
//   ShowButton,
//   useListContext,
//   ReferenceField,
//   FunctionField,
//   useRecordContext,
// } from 'react-admin';
// import { Box, Typography, Divider, List, ListItem } from '@mui/material';
// import { TagsListEdit } from './TagsListEdit';

// import { Contact, Sale } from '../types';

// export const ContactAside = ({ link = 'edit' }: { link?: 'edit' | 'show' }) => {
//   const record = useRecordContext<Contact>();
//   return (
//     <Box ml={4} width={250} minWidth={250}>
//       <Box textAlign="center" mb={2}>
//         {link === 'edit' ? (
//           <EditButton label="Edit Contact" />
//         ) : (
//           <ShowButton label="Show Contact" />
//         )}
//       </Box>
//       <Typography variant="subtitle2">Personal info</Typography>
//       <Divider />
//       <EmailField
//         sx={{ mt: 2, mb: 1, display: 'block' }}
//         source="email"
//       />
//       <TextField source="phone_number1" />{' '}
//       <Typography variant="body2" color="textSecondary" component="span">
//         Work
//       </Typography>
//       <Box mb={1}>
//         <TextField source="phone_number2" />{' '}
//         <Typography
//           variant="body2"
//           color="textSecondary"
//           component="span"
//         >
//           Home
//         </Typography>
//       </Box>
//       <Typography variant="body2" mb={3}>
//         {record.gender === 'male' ? 'He/Him' : 'She/Her'}
//       </Typography>
//       <Typography variant="subtitle2">Background</Typography>
//       <Divider />
//       <Typography variant="body2" mt={2}>
//         {record && record.background}
//       </Typography>
//       <Box mt={1} mb={3}>
//         <Typography
//           component="span"
//           variant="body2"
//           color="textSecondary"
//         >
//           Added on
//         </Typography>{' '}
//         <DateField
//           source="first_seen"
//           options={{ year: 'numeric', month: 'long', day: 'numeric' }}
//           color="textSecondary"
//         />
//         <br />
//         <Typography
//           component="span"
//           variant="body2"
//           color="textSecondary"
//         >
//           Last seen on
//         </Typography>{' '}
//         <DateField
//           source="last_seen"
//           options={{ year: 'numeric', month: 'long', day: 'numeric' }}
//           color="textSecondary"
//         />
//         <br />
//         <Typography
//           component="span"
//           variant="body2"
//           color="textSecondary"
//         >
//           Followed by
//         </Typography>{' '}
//         <ReferenceField source="sales_id" reference="sales">
//           <FunctionField<Sale>
//             source="last_name"
//             render={record =>
//               `${record.first_name} ${record.last_name}`
//             }
//           />
//         </ReferenceField>
//       </Box>
//       <Box mb={3}>
//         <Typography variant="subtitle2">Tags</Typography>
//         <Divider />
//         <TagsListEdit />
//       </Box>
//       <ReferenceManyField target="contact_id" reference="tasks">
//         <TasksIterator />
//       </ReferenceManyField>
//     </Box>
//   );
// };

// const TasksIterator = () => {
//   const { data, isLoading } = useListContext();
//   if (isLoading || data.length === 0) return null;
//   return (
//     <Box>
//       <Typography variant="subtitle2">Tasks</Typography>
//       <Divider />

//       <List>
//         {data.map(task => (
//           <ListItem key={task.id} disableGutters>
//             <Box>
//               <Typography variant="body2">{task.text}</Typography>
//               <Typography variant="body2" color="textSecondary">
//                 due{' '}
//                 <DateField source="due_date" record={task} />
//               </Typography>
//             </Box>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );
// };

/********************** ContactInputs **************************/

// import * as React from 'react';
// import {
//   TextInput,
//   ReferenceInput,
//   AutocompleteInput,
//   BooleanInput,
// } from 'react-admin';
// import { Divider, Box } from '@mui/material';

// export const ContactInputs = () => (
//   <Box flex="1" mt={-1}>
//     <Box display="flex" width={430}>
//       <TextInput source="first_name" fullWidth />
//       <Spacer />
//       <TextInput source="last_name" fullWidth />
//     </Box>
//     <Box display="flex" width={430}>
//       <TextInput source="title" fullWidth />
//       <Spacer />
//       <ReferenceInput source="company_id" reference="companies">
//         <AutocompleteInput optionText="name" fullWidth />
//       </ReferenceInput>
//     </Box>
//     <Divider />
//     <Box mt={2} width={430}>
//       <TextInput source="email" fullWidth />
//     </Box>
//     <Box display="flex" width={430}>
//       <TextInput source="phone_number1" fullWidth />
//       <Spacer />
//       <TextInput source="phone_number2" fullWidth />
//     </Box>
//     <Divider />
//     <Box mt={2} width={430}>
//       <TextInput source="background" multiline fullWidth />
//       <TextInput source="avatar" fullWidth />
//       <BooleanInput source="has_newsletter" />
//     </Box>
//   </Box>
// );

// const Spacer = () => <Box width={20} component="span" />;

/********************** Taglist **************************/

// import * as React from 'react';
// import {
//   ReferenceArrayField,
//   SingleFieldList,
//   ChipField,
//   useRecordContext,
// } from 'react-admin';

// const ColoredChipField = (props: any) => {
//   const record = useRecordContext();
//   if (!record) return null;
//   return (
//     <ChipField
//       record={record}
//       {...props}
//       style={{ backgroundColor: record.color, border: 0 }}
//       component="span"
//     />
//   );
// };

// export const TagsList = () => (
//   <ReferenceArrayField
//     sx={{ display: 'inline-block' }}
//     resource="contacts"
//     source="tags"
//     reference="tags"
//   >
//     <SingleFieldList linkType={false} component="span">
//       <ColoredChipField source="name" variant="outlined" size="small" />
//     </SingleFieldList>
//   </ReferenceArrayField>
// );

// import * as React from 'react';
// import { useState, FormEvent } from 'react';
// import {
//   useGetMany,
//   useCreate,
//   useUpdate,
//   useGetList,
//   Identifier,
//   useRecordContext,
// } from 'react-admin';
// import {
//   Chip,
//   Box,
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
//   MenuItem,
//   Menu,
// } from '@mui/material';
// import ControlPointIcon from '@mui/icons-material/ControlPoint';
// import EditIcon from '@mui/icons-material/Edit';

// import { colors } from '../tags/colors';
// import { Contact, Tag } from '../types';

// export const TagsListEdit = () => {
//   const record = useRecordContext<Contact>();
//   const [open, setOpen] = useState(false);
//   const [newTagName, setNewTagName] = useState('');
//   const [newTagColor, setNewTagColor] = useState(colors[0]);
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
//   const [disabled, setDisabled] = useState(false);

//   const { data: allTags, isLoading: isLoadingAllTags } = useGetList<Tag>(
//     'tags',
//     {
//       pagination: { page: 1, perPage: 10 },
//       sort: { field: 'name', order: 'ASC' },
//     }
//   );
//   const { data: tags, isLoading: isLoadingRecordTags } = useGetMany<Tag>(
//     'tags',
//     { ids: record.tags },
//     { enabled: record && record.tags && record.tags.length > 0 }
//   );
//   const [update] = useUpdate<Contact>();
//   const [create] = useCreate<Tag>();

//   const unselectedTags =
//     allTags && allTags.filter(tag => !record.tags.includes(tag.id));

//   const handleOpen = (event: React.MouseEvent<HTMLDivElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleDeleteTag = (id: Identifier) => {
//     const tags = record.tags.filter(tagId => tagId !== id);
//     update('contacts', {
//       id: record.id,
//       data: { tags },
//       previousData: record,
//     });
//   };

//   const handleAddTag = (id: Identifier) => {
//     const tags = [...record.tags, id];
//     update('contacts', {
//       id: record.id,
//       data: { tags },
//       previousData: record,
//     });
//     setAnchorEl(null);
//   };

//   const handleOpenCreateDialog = () => {
//     setOpen(true);
//     setAnchorEl(null);
//     setDisabled(false);
//   };

//   const handleNewTagNameChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setNewTagName(event.target.value);
//   };

//   const handleCreateTag = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setDisabled(true);
//     create(
//       'tags',
//       { data: { name: newTagName, color: newTagColor } },
//       {
//         onSuccess: tag => {
//           update(
//             'contacts',
//             {
//               id: record.id,
//               data: { tags: [...record.tags, tag.id] },
//               previousData: record,
//             },
//             {
//               onSuccess: () => {
//                 setNewTagName('');
//                 setNewTagColor(colors[0]);
//                 setOpen(false);
//               },
//             }
//           );
//         },
//       }
//     );
//   };

//   if (isLoadingRecordTags || isLoadingAllTags) return null;
//   return (
//     <>
//       {tags?.map(tag => (
//         <Box mt={1} mb={1} key={tag.id}>
//           <Chip
//             size="small"
//             variant="outlined"
//             onDelete={() => handleDeleteTag(tag.id)}
//             label={tag.name}
//             style={{ backgroundColor: tag.color, border: 0 }}
//           />
//         </Box>
//       ))}
//       <Box mt={1}>
//         <Chip
//           icon={<ControlPointIcon />}
//           size="small"
//           variant="outlined"
//           onClick={handleOpen}
//           label="Add tag"
//           color="primary"
//         />
//       </Box>
//       <Menu
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//         anchorEl={anchorEl}
//       >
//         {unselectedTags?.map(tag => (
//           <MenuItem key={tag.id} onClick={() => handleAddTag(tag.id)}>
//             <Chip
//               size="small"
//               variant="outlined"
//               label={tag.name}
//               style={{
//                 backgroundColor: tag.color,
//                 border: 0,
//               }}
//               onClick={() => handleAddTag(tag.id)}
//             />
//           </MenuItem>
//         ))}
//         <MenuItem onClick={handleOpenCreateDialog}>
//           <Chip
//             icon={<EditIcon />}
//             size="small"
//             variant="outlined"
//             onClick={handleOpenCreateDialog}
//             color="primary"
//             label="Create new tag"
//           />
//         </MenuItem>
//       </Menu>
//       <Dialog
//         open={open}
//         onClose={() => setOpen(false)}
//         aria-labelledby="form-dialog-title"
//       >
//         <form onSubmit={handleCreateTag}>
//           <DialogTitle id="form-dialog-title">
//             Create a new tag
//           </DialogTitle>
//           <DialogContent>
//             <TextField
//               autoFocus
//               label="Tag name"
//               fullWidth
//               value={newTagName}
//               onChange={handleNewTagNameChange}
//               sx={{ mt: 1 }}
//             />
//             <Box display="flex" flexWrap="wrap" width={230} mt={2}>
//               {colors.map(color => (
//                 <RoundButton
//                   key={color}
//                   color={color}
//                   selected={color === newTagColor}
//                   handleClick={() => {
//                     setNewTagColor(color);
//                   }}
//                 />
//               ))}
//             </Box>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={() => setOpen(false)} color="primary">
//               Cancel
//             </Button>
//             <Button
//               type="submit"
//               color="primary"
//               disabled={disabled}
//             >
//               Add tag
//             </Button>
//           </DialogActions>
//         </form>
//       </Dialog>
//     </>
//   );
// };

// const RoundButton = ({ color, handleClick, selected }: any) => (
//   <Box
//     component="button"
//     type="button"
//     sx={{
//       bgcolor: color,
//       width: 30,
//       height: 30,
//       borderRadius: 15,
//       border: selected ? '2px solid grey' : 'none',
//       display: 'inline-block',
//       margin: 1,
//     }}
//     onClick={handleClick}
//   />
// );

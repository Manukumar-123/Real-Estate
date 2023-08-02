import React from 'react';
import { Formik, Form, Field, ErrorMessage, setFieldValue } from 'formik';
import { TextField, Container, Grid } from '@mui/material';

const EditProfileForm = () => {
    const initialValues = {
        name: '',
        email: '',
        image: null,
        password: '',
        confirmPassword: '',
    };

    const validateForm = (values) => {
        const errors = {};

        if (values.password !== values.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
        }

        if (values.password.length < 6 || values.confirmPassword.length < 6) {
            errors.password = 'Password should be at least 6 characters long';
            errors.confirmPassword = 'Password should be at least 6 characters long';
        }

        return errors;
    };

    const onSubmit = (values) => {
        console.log(values);
        // Perform your logic to update the profile here
    };

    const Headingsub = {
        color: `#501e95`,
    }

    return (
        <>
        <Container >
            <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validateForm}>
                {({ errors, setFieldValue }) => (
                    <>
                              <div className='text-2xl font-semibold text-[#323232] mb-6 mt-0' style={Headingsub}>Edit Profile</div>

                        <div className='shadow-lg p-8'>
                            <Form>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Field
                                            as={TextField}
                                            name="name"
                                            label="Name"
                                            fullWidth
                                            className="border p-2 rounded"
                                            placeholder='Enter your name'
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field
                                            as={TextField}
                                            name="email"
                                            label="Email"
                                            fullWidth
                                            className="border p-2 rounded"
                                            placeholder='Enter your email'
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        {/* <div className='file-sselect'>
                                    <div className="file-select-button" id="fileName">Choose File</div>
                                    <div className="file-select-name" id="noFile">No file chosen...</div> 
                                    </div> */}
                                        <input
                                            type="file"
                                            name="image"
                                            accept="image/*"
                                            onChange={(event) => {
                                                const file = event.currentTarget.files[0];
                                                setFieldValue("image", file);
                                            }}
                                            className="border border-gray-400 p-3 rounded w-full"
                                          
                                        />
                                        <ErrorMessage name="image" component="div" className="text-red-700 " />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field
                                            as={TextField}
                                            type="password"
                                            name="password"
                                            label="Password"
                                            fullWidth
                                            className="border p-2 rounded"
                                            placeholder='Enter your password'

                                        />
                                        <ErrorMessage name="password" component="div" className="text-red-700 " />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field
                                            as={TextField}
                                            type="password"
                                            name="confirmPassword"
                                            label="Confirm Password"
                                            fullWidth
                                            className="border p-2 rounded"
                                            placeholder='Enter your confirm password'

                                        />
                                        <ErrorMessage name="confirmPassword" component="div" className="text-red-700" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <button
                                            className='px-4 p-2 bg-gradient-to-r from-[#521E95] to-[#E84799]  text-white rounded-full text-semibold'
                                            type="submit"
                                        // disabled={Object.keys(errors).length > 0}
                                        >
                                            Save Changes
                                        </button>
                                    </Grid>
                                </Grid>
                            </Form>
                        </div>
                    </>
                )}
            </Formik>
        </Container>
        </>
    );
};

export default EditProfileForm;

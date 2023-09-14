import React from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import {
    Formik,
    Form,
    Field
} from 'formik'
import { Container } from "@mui/material";






export default function BasicTabs() {
    const [value, setValue] = React.useState(0);


    //validate register

    const validateField = (values) => {
        const errors = {};

        if (!values.username) {
            errors.username = 'Username is required';
        }

        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.password) {
            errors.password = 'Password is required';
        } else if (values.password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';
        }

        return errors;
    };

    //initial value register
    const initialValue = {
        username: '',
        email: '',
        password: ''
    }

    //register
    const Submit = (values) => {
        console.log(values)
    }


    //login
    const Login = (values) => {
        console.log(values)
    }
    return (
        <Container className="my-10">
            <Box className='lg:flex lg:flex-row flex-col items-center w-full min-h-screen space-x-0 lg:space-x-10 space-y-6 lg:space-y-0'>
                <div className='w-full border p-8 rounded-lg shadow-2xl'>
                    <h1 className="text-2xl font-bold text-gray-600  mb-4">Buyer Login</h1>

                    <Formik initialValues={{ loginEmail: '', loginPassword: '' }} onSubmit={Login}>
                        {({ }) => (
                            <Form>
                                <div className='mb-5'>
                                    <Field
                                        as={TextField}
                                        type='email'
                                        required
                                        label="Email"
                                        name='loginEmail'
                                        className='w-full'
                                    />

                                </div>
                                <div className='mb-3'>
                                    <Field
                                        as={TextField}
                                        type='password'
                                        required
                                        label="Password"
                                        name='loginPassword'
                                        className='w-full'
                                    />

                                </div>
                                <div className='flex justify-between items-center mb-3'>
                                    <div className='pr-3'>
                                        <FormControlLabel
                                            control={<Checkbox defaultChecked />}
                                            label="Remember Me"
                                        />
                                    </div>
                                    <div>
                                        <a href="/">Forgot Password?</a>
                                    </div>
                                </div>
                                <div>
                                    <button className='px-4 py-3 text-white rounded-md font-semibold bg-blue-800 text-center w-full' type="submit">Log In</button>
                                </div>
                                <div className="flex items-center justify-between mt-6">
                                    <button className="px-4 py-2  rounded-full bg-blue-800 text-white  text-xs" >Agent </button>
                                    <div className="flex items-center justify-center">
                                        <hr className="border border-blue-800 w-8" />
                                        <div className="w-8 h-6 text-white text-xs rounded-full bg-gradient-to-r from-blue-800 to-red-800  flex items-center justify-center">OR</div>
                                        <hr className="border border-red-800 w-8" />
                                    </div>
                                    <button className="px-4 py-2 rounded-full bg-red-800 text-white  text-xs" >Seller </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>


                <div className='w-full border p-8 rounded-lg shadow-2xl'>
                    <h1 className="text-2xl font-bold text-gray-600  mb-4">Buyer Register</h1>
                    <Formik initialValues={initialValue} onSubmit={Submit} validate={validateField}>
                        {({ errors, touched }) => (
                            <Form>
                                <div className='mb-5'>
                                    <Field
                                        as={TextField}
                                        type='text'
                                        required
                                        label="Username"
                                        name='username'
                                        placeholder="John Doe"
                                        defaultValue=""
                                        className='w-full'
                                    />
                                    {touched.username && errors.username && (
                                        <div className="text-red-500">{errors.username}</div>
                                    )}
                                </div>
                                <div className='mb-5'>
                                    <Field
                                        as={TextField}
                                        type='email'
                                        name='email'
                                        placeholder="Example@gmail.com"
                                        required
                                        label="Email Address"
                                        defaultValue=""
                                        className='w-full'
                                    />
                                    {touched.email && errors.email && (
                                        <div className="text-red-500">{errors.email}</div>
                                    )}
                                </div>
                                <div className='mb-3'>
                                    <Field
                                        as={TextField}
                                        type='password'
                                        required
                                        name='password'
                                        label="Password"
                                        defaultValue=""
                                        className='w-full'
                                    />
                                    {touched.password && errors.password && (
                                        <div className="text-red-500">{errors.password}</div>
                                    )}
                                </div>
                                <div className='flex items-center mb-3 text-left'>
                                    <FormControlLabel
                                        control={<Checkbox defaultChecked />}
                                    />
                                    <p className='text-sm'>I've read and accept <a href="/">terms & conditions</a></p>
                                </div>
                                <div>
                                    <div>
                                        <button
                                            className={`px-4 py-3 text-white rounded-md font-semibold bg-blue-800 ${Object.keys(errors).length !== 0 ? 'bg-gray-400' : 'bg-blue-800'
                                                } text-center w-full`}
                                            type="submit"
                                            disabled={Object.keys(errors).length !== 0}
                                        >
                                            Sign Up
                                        </button>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>

                </div>

            </Box>

        </Container>
    );
}
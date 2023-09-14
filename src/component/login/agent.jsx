import React, { useState } from "react";

import {
  Container,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useFormik } from "formik"; // Import useFormik from Formik
import "tailwindcss/tailwind.css";

const Agent = () => {
  const [loginData, setLoginData] = useState({
    loginEmail: '',
    password: ''
  })

  const login = (e) => {
    e.preventDefault();
    console.log(loginData)

  }
  const formik = useFormik({
    initialValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      streetAddress: "",
      secondAddress: "",
      city: "",
      state: "",
      zipCode: "",
      email: "",
      dateOfBirth: "",
      citizenshipInfo: "",
      issuingAuthorityAndDate: "",
      expiryDate: "",
      stateIDInfo: "",
      stateIDNumber: "",
      stateIDIssueDate: "",
      issuingAuthority: "",
      stateIDExpiryDate: "",
      taxInfoStateID: "",
      federalID: "",
      licenseInfo: "",
      licenseIssueDate: "",
      licenseIssuingAuthority: "",
      licenseExpiryDate: "",
      resumeAndReference: "",
      realtorPicture: "",
      certificate: "",
      taxInformation: "",
      bankName: "",
      routingNumber: "",
      bankAccountNumber: "",
      accountType: "",
    },
    onSubmit: (values) => {
      console.log("Form Data:", values);
    },
  });

  const loginAgent = (e) => {
    setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <Container className="my-20   ">
      <Grid container spacing={6} className="">
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className="p-4 flex flex-col space-y-6">
            <div className="text-gray-500 font-bold text-3xl text-center">
              Agent Registration
            </div>
            <form className="flex flex-col space-y-6" onSubmit={formik.handleSubmit}>
              {/* Personal Information */}
              <h1 className="text-xl font-semibold">Personal Information</h1>
              <TextField
                label="First Name"
                fullWidth
                type="text"
                size="small"
                variant="outlined"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
              />
              <TextField
                label="Middle Name"
                fullWidth
                type="text"
                size="small"
                variant="outlined"
                name="middleName"
                value={formik.values.middleName}
                onChange={formik.handleChange}
              />
              <TextField
                label="Last Name"
                fullWidth
                type="text"
                size="small"
                variant="outlined"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
              />

              <TextField
                label="Email"
                fullWidth
                type="email"
                size="small"
                variant="outlined"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />


              <TextField
                label="Date of Birth"
                fullWidth
                type="date"
                InputLabelProps={{ shrink: true }}
                size="small"
                variant="outlined"
                name="dateOfBirth"
                value={formik.values.dateOfBirth}
                onChange={formik.handleChange}
              />

              <TextField
                label="Citizenship/Green Card Info"
                fullWidth
                type="text"
                size="small"
                variant="outlined"
                name="citizenshipInfo"
                value={formik.values.citizenshipInfo}
                onChange={formik.handleChange}
              />


              {/* Address Information */}
              <h1 className="text-xl font-semibold">Address Information</h1>
              <TextField
                label="Street Address"
                fullWidth
                type="address"
                size="small"
                variant="outlined"
                name="streetAddress"
                value={formik.values.streetAddress}
                onChange={formik.handleChange}
              />
              <TextField
                label="Second Address"
                fullWidth
                type="address"
                size="small"
                variant="outlined"
                name="secondAddress"
                value={formik.values.secondAddress}
                onChange={formik.handleChange}
              />
              <TextField
                label="City"
                fullWidth
                type="text"
                size="small"
                variant="outlined"
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
              />
              <TextField
                label="State"
                fullWidth
                type="text"
                size="small"
                variant="outlined"
                name="state"
                value={formik.values.state}
                onChange={formik.handleChange}
              />
              <TextField
                label="Zip code"
                fullWidth
                type="number"
                size="small"
                variant="outlined"
                name="zipCode"
                value={formik.values.zipCode}
                onChange={formik.handleChange}
              />
              {/* Contact Information */}

              <h1 className="text-xl font-semibold">ID Information</h1>
              <TextField
                label="Number Issuing Authority and Date of Issue"
                fullWidth
                type="text"
                size="small"
                variant="outlined"
                name="issuingAuthorityAndDate"
                value={formik.values.issuingAuthorityAndDate}
                onChange={formik.handleChange}
              />
              <TextField
                label="Expiry Date (if any)"
                fullWidth
                type="date"
                InputLabelProps={{ shrink: true }}
                size="small"
                variant="outlined"
                name="expiryDate"
                value={formik.values.expiryDate}
                onChange={formik.handleChange}
              />
              <TextField
                label="State ID Info"
                fullWidth
                type="text"
                size="small"
                variant="outlined"
                name="stateIDInfo"
                value={formik.values.stateIDInfo}
                onChange={formik.handleChange}
              />
              <TextField
                label="State ID #"
                fullWidth
                type="number"
                size="small"
                variant="outlined"
                name="stateIDNumber"
                value={formik.values.stateIDNumber}
                onChange={formik.handleChange}
              />
              <TextField
                label="Date of Issue"
                fullWidth
                type="date"
                InputLabelProps={{ shrink: true }}
                size="small"
                variant="outlined"
                name="stateIDIssueDate"
                value={formik.values.stateIDIssueDate}
                onChange={formik.handleChange}
              />
              <TextField
                label="Issuing Authority"
                fullWidth
                type="text"
                size="small"
                variant="outlined"
                name="issuingAuthority"
                value={formik.values.issuingAuthority}
                onChange={formik.handleChange}
              />
              <TextField
                label="Expiry Date"
                fullWidth
                type="date"
                InputLabelProps={{ shrink: true }}
                size="small"
                variant="outlined"
                name="stateIDExpiryDate"
                value={formik.values.stateIDExpiryDate}
                onChange={formik.handleChange}
              />
              <h1 className="text-xl font-semibold">Tax Information</h1>
              <TextField
                label="Tax Information State ID #"
                fullWidth
                type="number"
                size="small"
                variant="outlined"
                name="taxInfoStateID"
                value={formik.values.taxInfoStateID}
                onChange={formik.handleChange}
              />
              <TextField
                label="Federal ID #"
                fullWidth
                type="number"
                size="small"
                variant="outlined"
                name="federalID"
                value={formik.values.federalID}
                onChange={formik.handleChange}
              />
              <h1 className="text-xl font-semibold">License Information</h1>
              <TextField
                label="License Info License #"
                fullWidth
                type="number"
                size="small"
                variant="outlined"
                name="licenseInfo"
                value={formik.values.licenseInfo}
                onChange={formik.handleChange}
              />
              <TextField
                label="Date of Issue"
                fullWidth
                type="date"
                InputLabelProps={{ shrink: true }}
                size="small"
                variant="outlined"
                name="licenseIssueDate"
                value={formik.values.licenseIssueDate}
                onChange={formik.handleChange}
              />
              <TextField
                label="Issuing Authority"
                fullWidth
                type="text"
                size="small"
                variant="outlined"
                name="licenseIssuingAuthority"
                value={formik.values.licenseIssuingAuthority}
                onChange={formik.handleChange}
              />
              <TextField
                label="Expiry Date"
                fullWidth
                type="date"
                InputLabelProps={{ shrink: true }}
                size="small"
                variant="outlined"
                name="licenseExpiryDate"
                value={formik.values.licenseExpiryDate}
                onChange={formik.handleChange}
              />
              {/* Resume and Reference */}
              <h1 className="text-xl font-semibold">Resume and Reference</h1>
              <TextField
                label="Resume and Reference"
                fullWidth
                InputLabelProps={{ shrink: true }}
                type="file"
                size="small"
                variant="outlined"
                name="resumeAndReference"
                onChange={(event) => {
                  formik.setFieldValue(
                    "resumeAndReference",
                    event.currentTarget.files[0]
                  );
                }}
              />
              {/* Realtor Picture */}
              <TextField
                label="Realtor Picture"
                fullWidth
                InputLabelProps={{ shrink: true }}
                type="file"
                size="small"
                variant="outlined"
                name="realtorPicture"
                onChange={(event) => {
                  formik.setFieldValue(
                    "realtorPicture",
                    event.currentTarget.files[0]
                  );
                }}
              />
              {/* Certificate */}
              <TextField
                label="Certificate"
                fullWidth
                InputLabelProps={{ shrink: true }}
                type="file"
                size="small"
                variant="outlined"
                name="certificate"
                onChange={(event) => {
                  formik.setFieldValue("certificate", event.currentTarget.files[0]);
                }}
              />
              {/* Tax Information */}
              <TextField
                label="Tax Information"
                fullWidth
                type="file"
                InputLabelProps={{ shrink: true }}
                size="small"
                variant="outlined"
                name="taxInformation"
                onChange={(event) => {
                  formik.setFieldValue("taxInformation", event.currentTarget.files[0]);
                }}
              />
              <h1 className="text-xl font-semibold">Banking Information</h1>
              <TextField
                label="Bank Name"
                fullWidth
                type="text"
                size="small"
                variant="outlined"
                name="bankName"
                value={formik.values.bankName}
                onChange={formik.handleChange}
              />
              <TextField
                label="Routing Number"
                fullWidth
                type="number"
                size="small"
                variant="outlined"
                name="routingNumber"
                value={formik.values.routingNumber}
                onChange={formik.handleChange}
              />
              <TextField
                label="Bank Account Number"
                fullWidth
                type="number"
                size="small"
                variant="outlined"
                name="bankAccountNumber"
                value={formik.values.bankAccountNumber}
                onChange={formik.handleChange}
              />


              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Account Types</FormLabel>
                <RadioGroup
                  row
                  name="accountType"
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  value={formik.values.accountType}
                  onChange={formik.handleChange}
                >
                  <FormControlLabel value="checking" control={<Radio />} label="Checking" />
                  <FormControlLabel value="saving" control={<Radio />} label="Saving" />

                </RadioGroup>
              </FormControl>

              <Button variant="contained" color="primary" fullWidth type="submit">
                Register
              </Button>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} className="lg:fixed relative lg:top-40 lg:right-10 w-full">
          <Paper elevation={3} className="p-4 space-y-6 w-full  border">
            <div className="text-gray-500 font-bold text-3xl">Agent Login</div>
            <form className="flex flex-col space-y-6 p-4" onSubmit={login}>
              <TextField
                label="Email"
                fullWidth
                size="small"
                name="loginEmail"
                onChange={loginAgent}
                variant="outlined"
                className="mb-4"
              />
              <TextField
                label="Password"
                type="password"
                fullWidth
                size="small"
                name="password"
                onChange={loginAgent}
                variant="outlined"
                className="mb-4"
              />
              <Button variant="contained" color="primary" type="submit" fullWidth>
                Login
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Agent;

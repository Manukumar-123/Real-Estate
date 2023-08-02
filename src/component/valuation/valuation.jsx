import React from 'react';
import { Formik, Form, Field,ErrorMessage  } from 'formik';
import { TextField, Select, MenuItem, FormControl, InputLabel, Grid, Container,Button } from '@mui/material';

const Valuation = () => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    address: '',
    state: '',
    city: '',
    zip: '',
    propertyType: '',
    bedrooms: '',
    bathrooms: '',
    agent: '',
    propertyTypeSelect: '',
    size: '',
    ageOfKitchen: '',
    ageOfBaths: '',
    additionalRoomsFeatures: '',
    comment: '',
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.address) {
      errors.address = "Address is required";
    }

    if (!values.zip) {
      errors.zip = "Zip is required";
    }

    return errors;
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <div className="py-20">
        <Container>
          <div className="p-4 space-y-3">
            <div>
              <h4 className="font-semibold text-gray-700 text-3xl mb-8">Valuation Request Form</h4>
              <p className="text-gray-500">Interested in finding out what your home is worth? Get a no-obligation property valuation report by providing your information below.</p>
            </div>
            <div className="flex flex-col space-y-2">
              <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validateForm}>
                <Form className='flex flex-col space-y-3'>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} sm={6} md={4}>
                      <Field as={TextField} fullWidth name="name" label="Name" placeholder="Joe Dohn" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Field as={TextField} fullWidth name="email" label="Email" placeholder="example@gmail.com" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Field as={TextField} fullWidth name="phone" label="Phone" placeholder="(555) 123-4567" />
                    </Grid>
                  </Grid>

                  {/* == */}

                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3}>
                      <Field as={TextField} fullWidth name="address" label="Address" placeholder="123 Main St" />
                      <ErrorMessage name="address" component="div" className="text-red-800" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <Field as={TextField} fullWidth name="state" label="State" placeholder="California" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <Field as={TextField} fullWidth name="city" label="City" placeholder="Berkeley" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <Field as={TextField} fullWidth name="zip" label="Zip" placeholder="12345" />
                      <ErrorMessage name="zip" component="div" className="text-red-800" />
                    </Grid>
                  </Grid>

                  {/* == */}

                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3}>
                      <FormControl fullWidth>
                        <InputLabel>Property Type</InputLabel>
                        <Field as={Select} label="Property Type" name="propertyType">
                          <MenuItem value="Excellent">Excellent</MenuItem>
                          <MenuItem value="Good">Good</MenuItem>
                          <MenuItem value="Fair">Fair</MenuItem>
                          <MenuItem value="Needs Work">Needs Work</MenuItem>
                          <MenuItem value="Poor">Poor</MenuItem>
                        </Field>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <FormControl fullWidth>
                        <InputLabel>Bedrooms</InputLabel>
                        <Field as={Select} label="Bedrooms" name="bedrooms">
                          <MenuItem value={1}>1</MenuItem>
                          <MenuItem value={2}>2</MenuItem>
                          <MenuItem value={3}>3</MenuItem>
                          <MenuItem value={4}>4</MenuItem>
                          <MenuItem value={5}>5</MenuItem>
                        </Field>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <FormControl fullWidth>
                        <InputLabel>Bathrooms</InputLabel>
                        <Field as={Select} label="Bathrooms" name="bathrooms">
                          <MenuItem value={1}>1</MenuItem>
                          <MenuItem value={2}>2</MenuItem>
                          <MenuItem value={3}>3</MenuItem>
                          <MenuItem value={4}>4</MenuItem>
                          <MenuItem value={5}>5</MenuItem>
                        </Field>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <FormControl fullWidth>
                        <InputLabel>Select Agent</InputLabel>
                        <Field as={Select} label="Select Agent" name="agent">
                          <MenuItem value={1}>Option 1</MenuItem>
                          <MenuItem value={2}>Option 2</MenuItem>
                          <MenuItem value={3}>Option 3</MenuItem>
                        </Field>
                      </FormControl>
                    </Grid>
                  </Grid>

                  {/* == */}

                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3}>
                      <FormControl fullWidth>
                        <InputLabel>Select Property Type</InputLabel>
                        <Field as={Select} label="Select Property Type" name="propertyTypeSelect">
                          <MenuItem value="">Select Property Type</MenuItem>
                          <MenuItem value="house">House</MenuItem>
                          <MenuItem value="apartment">Apartment</MenuItem>
                          <MenuItem value="condo">Condo</MenuItem>
                        </Field>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <Field as={TextField} fullWidth name="size" label="Approx Size" placeholder="Size in Sq Ft" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <Field as={TextField} fullWidth name="ageOfKitchen" label="Approx Age of Kitchen" placeholder="10 Years" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <Field as={TextField} fullWidth name="ageOfBaths" label="Approx Age of Baths" placeholder="10 Years" />
                    </Grid>
                  </Grid>

                  {/* == */}

                  <div className="flex flex-col space-y-3">
                    <p className="text-md text-gray-500 pt-6">Please list additional rooms and describe any special features and upgrades. For example: new roof, custom kitchen, near park, etc.</p>
                    <Field as={TextField} multiline rows={4} fullWidth name="additionalRoomsFeatures" label="Additional Rooms/Features" placeholder="Additional Rooms/Features" sx={{ height: 'calc(4 * var(--textfield-height))' }} />
                  </div>

                  {/* == */}

                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Field as={TextField} multiline rows={4} fullWidth name="comment" label="Comment" />
                    </Grid>
                  </Grid>
                  <div className="px-0 lg:px-32">
                    <p className="text-sm text-justify lg:text-center text-gray-500">Your personal information is strictly confidential and will not be shared with any outside organizations. By submitting this form with your telephone number you are consenting for Lochan Real Estate and authorized representatives to contact you even if your name is on the Federal "Do-not-call List.</p>
                  </div>

                  <div className="w-full text-center py-8">
                    <Button type="submit" variant="contained" color="primary">Send Request</Button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Valuation;

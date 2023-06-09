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
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Login" {...a11yProps(0)} />
          <Tab label="Register" {...a11yProps(1)} />
        </Tabs>
      </Box>
        <TabPanel value={value} index={0} className="p-0">
            <div className='grid md:grid-cols-2 gap-4 mt-4'>
                <div>
                    <div className='mb-5'>
                        <TextField type='email' required label="Email"  className='w-full' />
                    </div>
                    <div className='mb-3'>
                        <TextField type='password' required label="Password"  className='w-full'/>
                    </div>
                    <div className='flex justify-between items-center mb-3'>
                        <div className='pr-3'>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me"/>
                        </div>
                        <div>
                            <a href="/">Forgot Password?</a>
                        </div>
                    </div>
                    <div><button className='px-4 py-3 text-white rounded-md font-semibold bg-blue-800 text-center w-full'>Log In</button></div>
                </div>
                <div className='pt-5 text-center'>
                    <img src='./login-1.png' className='m-auto'/>
                    <p className='my-3 text-sm text-gray-600'>Welcome Back! Please Login to your Account for latest property listings.</p>
                </div>
            </div>  
            
        </TabPanel>
        <TabPanel value={value} index={1}>
        <div className='grid md:grid-cols-2 gap-4 mt-4'>
                <div>
                    <div className='mb-5'>
                        <TextField type='text' required label="Username" defaultValue="" className='w-full' />
                    </div>
                    <div className='mb-5'>
                        <TextField type='email' required label="Email Adddress" defaultValue="" className='w-full' />
                    </div>
                    <div className='mb-3'>
                        <TextField type='password' required label="Password" defaultValue="" className='w-full'/>
                    </div>
                    <div className='mb-3'>
                        <TextField type='password' required label="Confirm Password" defaultValue="" className='w-full'/>
                    </div>
                    <div className='flex items-center mb-3 text-left'>
                        <FormControlLabel control={<Checkbox defaultChecked />} />
                        <p className='text-sm'>I've read and accept <a href="/">terms & conditions</a></p>
                    </div>
                    <div><div><button className='px-4 py-3 text-white rounded-md font-semibold bg-blue-800 text-center w-full'>Sign Up</button></div></div>
                </div>
                <div className='pt-5 text-center'>
                    <img src='./login-1.png' className='m-auto'/>
                    <p className='my-3 text-sm text-gray-600'>Welcome Back! Please Login to your Account for latest property listings.</p>
                </div>
            </div>  
        </TabPanel>
    </Box>
  );
}
import { Container } from "@mui/material";
import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';
import CallIcon from '@mui/icons-material/Call';
import PersonIcon from '@mui/icons-material/Person';

const Contact = () => {
    return (
        <>
            <div className="py-20">
                <Container>
                    <div className="grid grid-cols-8 gap-4">
                        <div className="col-span-7 lg:col-span-3 ">

                            <div className="p-4 bg-gray-200 rounded-md space-y-2">
                                <h3 className="font-semibold text-2xl text-gray-800 mb-8">Contact Us</h3>
                                <div className="flex">
                                    <div className=" bg-white w-10 h-10 rounded-md me-4 flex items-center justify-center ">
                                        <BusinessIcon className="text-orange-600" />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        {/* <p className="text-gray-600 text-sm">Compnay</p> */}
                                        <p className="font-semibold">Lochan Real Estate</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex">
                                    <div className="bg-white w-10 h-10 rounded-md me-4 flex items-center justify-center ">
                                        <EmailIcon className="text-red-700" />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        {/* <p className="text-gray-600 text-sm">Address</p> */}
                                        <p className="font-semibold">xx@LRE4U.com</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex">
                                    <div className=" bg-white w-10 h-10 rounded-md me-4 flex items-center justify-center ">
                                        <CallIcon className="text-blue-800" />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        {/* <p className="text-gray-600 text-sm">Phone</p> */}
                                        <p className="font-semibold">800-510-2815</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-span-7 lg:col-span-1 border">
                            sdfasd
                        </div>

                        <div className="col-span-7 lg:col-span-3 border">
                            sdfasd
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Contact;
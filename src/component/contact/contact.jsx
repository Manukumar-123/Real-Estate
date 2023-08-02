import { Button, Container } from "@mui/material";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';
import CallIcon from '@mui/icons-material/Call';
import TextareaAutosize from '@mui/base/TextareaAutosize';

const Contact = () => {
const [data,setData] = React.useState({
    name:'',
    email:'',
    number:'',
    message:''
})
    const formData = (e) => {
        setData({...data,[e.target.name]:e.target.value})
    }
    console.log(data);
    return (
        <>
            <div className="py-20 pt-32 bg-gradient-to-r from-cyan-300 to-blue-600 ">
                <Container className="flex ">
                    <div className="grid grid-cols-8 gap-4 items-center justify-center w-full">
                        <div className="col-span-8 lg:col-span-3 ">
                            <div className="p-4 bg-white rounded-md space-y-2 shadow-2xl">
                                <h3 className="font-semibold text-2xl text-gray-800 mb-8">Contact Us</h3>
                                <div className="flex">
                                    <div className=" bg-white w-10 h-10 rounded-md me-4 flex items-center justify-center ">
                                        <BusinessIcon className="text-orange-600" />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        {/* <p className="text-gray-600 text-sm">Compnay</p> */}
                                        <p className="font-semibold">Main office is 1817 Capitol Ave, Sacramento, <br /> CA 95811</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex">
                                    <div className="bg-white w-10 h-10 rounded-md me-4 flex items-center justify-center ">
                                        <EmailIcon className="text-pink-600" />
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

                        <div className="col-span-8 lg:col-span-2 flex items-center justify-center">
                            <div className="flex items-center justify-center">
                                <div className="w-20 border border-pink-600 rounded-full"></div>
                                <div className="w-10 h-6 flex items-center justify-center rounded-full text-white bg-orange-400 text-sm">OR</div>
                                <div className="w-20 border border-pink-600 rounded-full"></div>
                            </div>
                        </div>

                        <div className="col-span-8 lg:col-span-3 p-10 shadow-2xl bg-white rounded-lg">
                            <h3 className="font-semibold text-2xl text-gray-800 mb-8">Contact Us</h3>
                            <form className="flex flex-col space-y-4">
                                <TextField id="outlined-basic" label="Your name" onChange={formData} name="name" required variant="outlined" className="font-bold" />

                                <TextField id="outlined-basic" type="email" onChange={formData} label=" Email" name="email" required variant="outlined" />

                                <TextField id="outlined-basic" name="number" type="number" onChange={formData} label=" Mobile" required variant="outlined" />

                                <TextareaAutosize
                                    aria-label="minimum height"
                                    minRows={2}
                                    onChange={formData}
                                    name="message"
                                    placeholder="Message "
                                    className="border border-gray-300 outline-none p-2 rounded-md"
                                />
                                <div>
                                    <Button variant="contained" type="sumbits">
                                        Submit
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Contact;
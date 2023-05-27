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
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";

const AgentDetails = [
    {
        "img": "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80",
        "name": "jeff kumar",
        "num": "+91 9708790400",
        "email": "example@gmail.com"
    },
    {
        "img": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        "name": "Manu kumar",
        "num": "+91 9708790400",
        "email": "example@gmail.com"
    },
    {
        "img": "/agent3.jpg",
        "name": "Sudip kumar",
        "num": "+91 9708790400",
        "email": "example@gmail.com"
    },
    {
        "img": "/agent4.jpg",
        "name": "Rohan kumar",
        "num": "+91 9708790400",
        "email": "example@gmail.com"
    },
    {
        "img": "/agent5.jpg",
        "name": "jack kumar",
        "num": "+91 9708790400",
        "email": "example@gmail.com"
    },
    {
        "img": "/agent.jpg",
        "name": "rajul kumar",
        "num": "+91 9708790400",
        "email": "example@gmail.com"
    },
]


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Agent',
    'Staf',
    'Management'
];

const Associates = () => {
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    console.log(personName);
    return (
        <>
            <Container>
                <div className="pt-24 space-y-4">
                    <h2 className="text-3xl text-semibold text-gray-600">Agent List</h2>
                    <div className="grid items-center lg:justify-between justify-center lg:flex gap-4 p-4 rounded-lg border-2 border-[#0A356E]">
                        <div className="">
                            <TextField
                                id="outlined-basic"
                                label="Search Agent"
                                variant="outlined"
                                size="small"
                                className="lg:w-[35rem] w-full"
                            />
                        </div>
                        <div className="">
                            <FormControl size="small" sx={{ width: '300px' }}>
                                <InputLabel >Any Role</InputLabel>
                                <Select
                                    multiple
                                    value={personName}
                                    onChange={handleChange}
                                    input={<OutlinedInput label="Any role" />}
                                    renderValue={(selected) => selected.join(', ')}
                                    MenuProps={MenuProps}
                                >
                                    {names.map((name) => (
                                        <MenuItem key={name} value={name}>
                                            <Checkbox checked={personName.indexOf(name) > -1} />
                                            <ListItemText primary={name} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                        <div className="">
                            <button className="bg-[#0A356E] px-8 p-2 rounded-md text-white text-semibold"
                            >Search
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3">
                        {
                            AgentDetails?.map((item, index) => (
                                <Link to='/' className="p-8 rounded-md flex flex-col items-center" key={index}>
                                    <div className="w-full h-80 text-centeroverflow-hidden flex item-center justify-center">
                                        <img src={item.img} className="w-full rounded-t-md object-cover" />
                                    </div>
                                    <div className="bg-gray-300  rounded-b-md w-full p-4 space-y-2">
                                        <div className="flex">
                                            <div className=" bg-white w-10 h-10 rounded-md me-4 flex items-center justify-center ">
                                                <PersonIcon className="text-orange-600" />
                                            </div>
                                            <div className="flex flex-col">
                                                <p className="text-gray-600 text-sm">Name</p>
                                                <p className="font-semibold">{item.name}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="flex">
                                            <div className="bg-white w-10 h-10 rounded-md me-4 flex items-center justify-center ">
                                                <EmailIcon className="text-red-700" />
                                            </div>
                                            <div className="flex flex-col">
                                                <p className="text-gray-600 text-sm">Email</p>
                                                <p className="font-semibold">{item.email}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="flex">
                                            <div className=" bg-white w-10 h-10 rounded-md me-4 flex items-center justify-center ">
                                                <PhonelinkRingIcon className="text-blue-800" />
                                            </div>
                                            <div className="flex flex-col">
                                                <p className="text-gray-600 text-sm">Phone</p>
                                                <p className="font-semibold">{item.num}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </>
    )
}
export default Associates;
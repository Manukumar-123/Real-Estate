import { Container, Grid} from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from "react";
import Slider from '@mui/material/Slider';
import { Link } from "react-router-dom";
const Header = () => {

    const [formData, setFormData] = useState({
        area: '',
        property: '',
        beds: '',
        baths: '',
        price: '10000'
      });

  //userData
  const userData = (e) => {
    const {name,value} = e.target;
    console.log({...formData,[name]:value})
    setFormData({
        ...formData,
        [name]: value
      });
  }

  //number format

  const formatCurrency = (number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(number);
  };

    
    return(
        <>
            <div className="bg-center bg-cover w-full bg-local" style={{backgroundImage: 'url("/header-bg.jpg")'}}>
                <div className="pt-20 lg:pt-0">
                    <Container>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={6} lg={6} >
                                <div className="w-full h-auto lg:min-h-screen text-white flex flex-col items-start justify-center space-y-4">
                                    <h5 
                                        className="text-xl tracking-widest font-semibold"
                                        sx={{fontFamil:'roboto, sans-serif'}}
                                    >FROM YOUR FIRST HOME</h5>
                                    <h1 
                                        className="text-5xl font-semibold"
                                        sx={{fontFamil:'roboto, sans-serif'}}
                                        >TO YOUR DREAM HOME</h1>
                                    <h6 
                                        className="font-semibold"
                                        sx={{fontFamil:'roboto, sans-serif'}}
                                        >Welcome to our website, where we can help you with everything from finding your first home, to turning it into your dream home, and all the steps in between.</h6>
                                </div>
                            </Grid>
                                
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                               <div className="w-full min-h-screen flex flex-col lg:items-end items-center justify-center">
                                    <div className=" bg-black bg-opacity-50 rounded-md p-5 flex flex-col  space-y-5">
                                        <h2 className="text-xl font-bold text-center text-white">Find Your Dream Home</h2>
                                        <div className="relative w-full">
                                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                                <SearchOutlinedIcon className="h-5 w-5 text-gray-400" />
                                            </span>
                                            <input 
                                                name="area"
                                                onChange={userData}
                                                value={formData.area}
                                                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue sm:text-sm transition duration-150 ease-in-out"
                                                placeholder="City, Area, Zip or Address"

                                            />
                                        </div>
                                        <FormControl fullWidth size="small" className="rounded-md" sx={{background:'white'}}>
                                            <InputLabel>property</InputLabel>
                                            <Select
                                            value={formData.property}
                                            name="property"
                                            inputProps={{ 'aria-label': 'Without label' }}
                                            onChange={userData}
                                            label="property"
                                            >
                                            
                                            <MenuItem value={'Single Family'}>Single Family</MenuItem>
                                            <MenuItem value={'Single Family'}>Single Family</MenuItem>
                                            <MenuItem value={'Single Family'}>Single Family</MenuItem>
                                            </Select>
                                        </FormControl>

                                        <div className="flex items-center justify-between space-x-4">
                                            <FormControl size="small"  className="rounded-md" sx={{background:'white',minWidth: 152}}>
                                                <InputLabel>Beds</InputLabel>
                                                <Select
                                                 name="beds" 
                                                value={formData.beds}
                                                label="beds"
                                                onChange={userData}
                                                >
                                                
                                                <MenuItem value={'Single Family'}>Single Family</MenuItem>
                                                <MenuItem value={'Single Family'}>Single Family</MenuItem>
                                                <MenuItem value={'Single Family'}>Single Family</MenuItem>
                                                </Select>
                                            </FormControl>

                                            <FormControl   sx={{background:'white',minWidth: 152}} className="rounded-md"  size="small">
                                                <InputLabel>Baths</InputLabel>
                                                <Select
                                                value={formData.baths}
                                                label="baths"
                                                name="baths"
                                                onChange={userData}
                                                >
                                                <MenuItem value={'Single Family'}>Single Family</MenuItem>
                                                <MenuItem value={'Single Family'}>Single Family</MenuItem>
                                                <MenuItem value={'Single Family'}>Single Family</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>

                                        <div  className="flex flex-col items-start w-full border px-4 bg-white rounded-md">
                                            <div className=" my-2 font-semibold ">
                                                Price : {formatCurrency(10000)} - {formatCurrency(formData.price )}
                                            </div>
                                            <Slider
                                            aria-label="Temperature"
                                            name='price'
                                            min={10000}
                                            max={1000000}
                                            step={1000}
                                            valueLabelDisplay="auto"
                                            onChange={userData}
                                            sx={{color:'#0A356E'}}
                                        />
                                        </div>
                                        <Link to="/listing" className="w-full">

                                        <button
                                          className="px-4 py-3  text-white rounded-md font-semibold bg-[#0A356E] text-center w-full ">Search Property</button>
                                            
                                          </Link>
                                    </div>
                                </div>    
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default Header;
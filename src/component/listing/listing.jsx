import React from "react";
import GoogleMapReact from 'google-map-react';
import ListIcon from '@mui/icons-material/List';
import { Box, Button, FormControlLabel, IconButton } from "@mui/material";
import AppsIcon from '@mui/icons-material/Apps';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from "react-router-dom";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Pagination from '@mui/material/Pagination';
import Tooltip from '@mui/material/Tooltip';
import Rating from '@mui/material/Rating';
import { Slider } from '@mui/material'
import FilterListIcon from '@mui/icons-material/FilterList';
import { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';

const LandDetails2 = [
    {
        'proImg': '/boximg3.jpg',
        'alt': 'LandImage',
        'title': 'Land',
        'listing': '180 Listings'
    },
    {
        'proImg': '/boximg4.jpg',
        'alt': 'LandImage',
        'title': 'Condos',
        'listing': '180 Listings'
    },
    {
        'proImg': '/boximg5.jpg',
        'alt': 'LandImage',
        'title': 'Commercial',
        'listing': '180 Listings'
    },
    {
        'proImg': '/boximg4.jpg',
        'alt': 'LandImage',
        'title': 'Commercial',
        'listing': '180 Listings'
    },
    {
        'proImg': '/boximg3.jpg',
        'alt': 'LandImage',
        'title': 'Land',
        'listing': '180 Listings'
    },
    {
        'proImg': '/boximg4.jpg',
        'alt': 'LandImage',
        'title': 'Condos',
        'listing': '180 Listings'
    },
    {
        'proImg': '/boximg5.jpg',
        'alt': 'LandImage',
        'title': 'Commercial',
        'listing': '180 Listings'
    },
    {
        'proImg': '/boximg4.jpg',
        'alt': 'LandImage',
        'title': 'Commercial',
        'listing': '180 Listings'
    }

]

const Listing = () => {

    //price      
    const [PriceValue, setPriceValue] = useState([3893, 5000]);

    const handlePrice = (event, newValue) => {
        setPriceValue(newValue);
    };

    //area      
    const [AreaValue, setAreaValue] = useState([4893, 7000]);

    const handleArea = (event, newValue) => {
        setAreaValue(newValue);
    };

    //sort
    const [sort, setsort] = useState('');

    const handleSort = (event) => {
        setsort(event.target.value);
    };

    //property Type
    const [propType, setPropType] = useState('');

    const handlePropType = (event) => {
        setPropType(event.target.value);
    };

    //for rent 
    const [rent, setRent] = useState('');

    const rentHandle = (event) => {
        setRent(event.target.value);
    };

    //toggle 
    const [isOpen, setIsOpen] = useState(false);
    const toggleDiv = () => {
        setIsOpen(!isOpen);
    };

    //place map
    const renderMarkers = (map, maps) => {
        let marker = new maps.Marker({
            position: { lat: defaultProps.center.lat, lng: defaultProps.center.lng },
            map
        });
        return marker;
    };


     //number format

  const formatCurrency = (number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(number);
  };


    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };

    return (
        <>
            <div className='relative pt-16'>
                <div className="grid sm:grid-cols-5 grid-cols-1 ">
                    <div className="col-span-2">
                        <div className="lg:fixed h-screen lg:w-[40%] w-full">
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "AIzaSyADl9 - PH41V32dMna7BNPNYv0bbpduVqQQ" }}
                                defaultCenter={defaultProps.center}
                                defaultZoom={defaultProps.zoom}
                                onGoogleApiLoaded={({ map, maps }) => {
                                    renderMarkers(map, maps)
                                }}
                            >

                            </GoogleMapReact>
                        </div>
                    </div>
                    <div className="col-span-3 overflow-auto">
                        <div className="px-4 py-10 space-y-4">
                            <div className="grid items-center lg:justify-between justify-center md:flex">
                                <div className="flex justify-center">
                                    <div className="w-12 h-10  me-3 border border-blue-700 rounded-sm flex items-center justify-center hover:text-blue-700">
                                        <IconButton>
                                            <AppsIcon className="hover:text-blue-700" />
                                        </IconButton>
                                    </div>

                                    <div className="w-12 h-10 border border-blue-700 rounded-sm flex items-center justify-center hover:text-blue-700">
                                        <IconButton>
                                            <ListIcon className="hover:text-blue-700" />
                                        </IconButton>
                                    </div>
                                </div>
                                <div>
                                    <FormControl sx={{ m: 1, minWidth: 222 }} size="small">
                                        <InputLabel>sort</InputLabel>
                                        <Select
                                            value={sort}
                                            label="sort"
                                            onChange={handleSort}
                                        >
                                            <MenuItem value={'oldest'}>sort by oldest</MenuItem>
                                            <MenuItem value={'newest'}>sort by newest</MenuItem>
                                            <MenuItem value={'feature'}>sort by feature</MenuItem>
                                            <MenuItem value={'low to hight'}>sort by price(low to hight)</MenuItem>
                                            <MenuItem value={'hight to low'}>sort by price(hight to low )</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div>
                                    <FormControl sx={{ m: 1, minWidth: 222 }} size="small">
                                        <InputLabel id="demo-select-small-label">Property Type</InputLabel>
                                        <Select
                                            labelId="demo-select-small-label"
                                            id="demo-select-small"
                                            value={propType}
                                            label="Property Type"
                                            onChange={handlePropType}
                                        >
                                            <MenuItem value={'Multi-Family'}>	Multi-Family</MenuItem>
                                            <MenuItem value={'Lot-Land'}>	Lot-Land</MenuItem>
                                            <MenuItem value={'Income'}>Income</MenuItem>
                                            <MenuItem value={'Business Op'}>Business Op</MenuItem>
                                            <MenuItem value={'Mobile Home'}>Mobile Home</MenuItem>
                                            <MenuItem value={'Commercial'}>Commercial</MenuItem>
                                            <MenuItem value={'Condos'}>Condos</MenuItem>
                                            <MenuItem value={'Single Family'}>Single Family</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <div className="grid items-center justify-center md:flex relative">
                                <div className="flex items-center rounded-sm bg-light-200 px-3 border border-blue-700">
                                    <SearchIcon className="text-gray-400" />
                                    <input type="text" placeholder="Search" className="bg-transparent pl-2 py-2 focus:outline-none w-[70vw] lg:w-[38vw] md:w-[30vw]" />
                                </div>

                                <div className="flex lg:flex-1 justify-center ">
                                    <FormControl sx={{ m: 1 }} size="small" className="md:w-[10vw] w-[70vw] lg:w-[10vw]">
                                        <InputLabel >rent</InputLabel>
                                        <Select
                                            value={rent}
                                            label="for rent"
                                            onChange={rentHandle}
                                        >
                                            <MenuItem value={'rent'}>for rent</MenuItem>
                                            <MenuItem value={'sale'}>for sale</MenuItem>
                                            <MenuItem value={'all'}>all</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className="flex justify-center ">
                                    <div className="w-10 h-10 border border-gray-300 rounded-sm">
                                        <IconButton onClick={toggleDiv}>
                                            <SettingsIcon />
                                        </IconButton>
                                    </div>
                                    <div>
                                        {isOpen && (
                                            <div className="border rounded-md bg-white w-[100%] lg:top-16 top-36 left-0 absolute z-50 p-4 space-y-4">
                                                <div className="flex items-center justify-between">
                                                    <FormControl sx={{ m: 1 }} size="small" className="md:w-[10vw] w-[70vw] lg:w-[20vw]">
                                                        <InputLabel >Beds</InputLabel>
                                                        <Select
                                                            // value={rent}
                                                            label="Beds"
                                                        // onChange={rentHandle}
                                                        >
                                                            <MenuItem value={'1'}>1</MenuItem>
                                                            <MenuItem value={'2'}>2</MenuItem>
                                                            <MenuItem value={'3'}>3</MenuItem>
                                                            <MenuItem value={'4'}>4</MenuItem>
                                                        </Select>
                                                    </FormControl>

                                                    <FormControl sx={{ m: 1 }} size="small" className="md:w-[10vw] w-[70vw] lg:w-[20vw]">
                                                        <InputLabel >Baths</InputLabel>
                                                        <Select
                                                            // value={rent}
                                                            label="Baths"
                                                        // onChange={rentHandle}
                                                        >
                                                            <MenuItem value={'1'}>1</MenuItem>
                                                            <MenuItem value={'2'}>2</MenuItem>
                                                            <MenuItem value={'3'}>3</MenuItem>
                                                            <MenuItem value={'4'}>4</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </div>
                                                <div className="Grid lg:flex  items-center justify-between gap-4">
                                                    <div className="flex flex-col items-start w-full border px-4 bg-white rounded-md">
                                                        <div className=" my-2 font-semibold ">
                                                            Price : {formatCurrency(PriceValue[0])} - {formatCurrency(PriceValue[1])}
                                                        </div>
                                                        <Box sx={{ width: ['100%'] }}>
                                                            <Slider
                                                                getAriaLabel={() => 'Temperature range'}
                                                                value={PriceValue}
                                                                onChange={handlePrice}
                                                                valueLabelDisplay="auto"
                                                                color='secondary'
                                                                min={2000}
                                                                max={10000}
                                                            />
                                                        </Box>
                                                    </div>

                                                    <div className="flex flex-col items-start w-full border px-4 bg-white rounded-md">
                                                        <div className=" my-2 font-semibold ">
                                                            Area : {AreaValue[0]} sq ft - {AreaValue[1]} sq ft
                                                        </div>
                                                        <Box sx={{ width: ['100%'] }}>
                                                            <Slider
                                                                getAriaLabel={() => 'Temperature range'}
                                                                value={AreaValue}
                                                                onChange={handleArea}
                                                                valueLabelDisplay="auto"
                                                                color='primary'
                                                                min={2000}
                                                                max={10000}
                                                            />
                                                        </Box>
                                                    </div>
                                                </div>
                                                <h5 className="font-bold text-lg">Sort By Features</h5>
                                                <div className="grid grid-cols-4">
                                                    <div className="col-span-4 flex flex-col lg:col-span-1">
                                                    <FormControlLabel control={<Checkbox />} label="Pool" />
                                                    <FormControlLabel control={<Checkbox />} label="Fireplace" />
                                                    <FormControlLabel control={<Checkbox />} label="Green" />
                                                    <FormControlLabel control={<Checkbox />} label="Furnished" />
                                                    <FormControlLabel control={<Checkbox />} label="New Construction" />
                                                    </div>
                                                    <div className="col-span-4 flex flex-col lg:col-span-1">
                                                    <FormControlLabel control={<Checkbox />} label="Basement" />
                                                    <FormControlLabel control={<Checkbox />} label="Golf" />
                                                    <FormControlLabel control={<Checkbox />} label="Seller Finance" />
                                                    <FormControlLabel control={<Checkbox />} label="No HOA Fees" />
                                                    <FormControlLabel control={<Checkbox />} label="Short Sale" />
                                                    </div>
                                                    <div className="col-span-4 flex flex-col lg:col-span-1">
                                                    <FormControlLabel control={<Checkbox />} label="Garage" />
                                                    <FormControlLabel control={<Checkbox />} label="Horse" />
                                                    <FormControlLabel control={<Checkbox />} label="Air Conditioning" />
                                                    <FormControlLabel control={<Checkbox />} label="Lease To Own" />
                                                    <FormControlLabel control={<Checkbox />} label="Views" />
                                                    </div>
                                                    <div className="col-span-4 flex flex-col lg:col-span-1">
                                                    <FormControlLabel control={<Checkbox />} label="Deck" />
                                                    <FormControlLabel control={<Checkbox />} label="Fixer Upper" />
                                                    <FormControlLabel control={<Checkbox />} label="Primary On Main" />
                                                    <FormControlLabel control={<Checkbox />} label="Adult 55+" />
                                                    <FormControlLabel control={<Checkbox />} label="Foreclosure" />
                                                    
                                                    </div>

                                                </div>
                                                <div>
                                                <button className="px-4 py-2 duration-500 bg-blue-900 rounded-sm  hover:bg-red-600 text-white  hover:rounded-lg hover:duration-500"> <FilterListIcon /> Aply Filter</button>

                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4 grid-cols-1 ">
                            {
                                LandDetails2.map((items, index) => (
                                    <div className="col-span-1"  key={index}>
                                        <div >
                                            <div className="hover:drop-shadow-xl delay-150 transition mb-5 " >
                                                <div className="overflow-hidden relative rounded-md rounded-t-lg propertyblock">
                                                    <Link to='/' className="">
                                                        <img src={items.proImg} alt={items.alt} width="100%" style={{ height: '250px' }} className="   duration-700 hover:scale-110 hover:duration-700 " />
                                                        <span className="absolute top-5 right-6 text-xs text-white bg-[#0A356E] rounded py-1 px-3">For Rent</span>
                                                        <div className=" absolute bottom-0 pb-5 left-0 w-full px-4 text-white items-start z-10 hidden agenthoverbox">
                                                            <div className="flex justify-between items-center">
                                                                <div className="flex items-center pr-2 z-50">
                                                                    <img src="/agency_1.jpg" className="rounded-full mr-2" style={{ height: '30px', width: '30px', objectFit: 'cover' }} />
                                                                    <h4>Carmen Agency</h4>
                                                                </div>

                                                                <div>
                                                                    <ul className="flex gap-x-1">
                                                                        <Tooltip title="View Details" placement="top" className="z-50">
                                                                            <a href="#" className="rounded-full bg-neutral-900 block h-8 w-8 flex items-center justify-center">
                                                                                <SearchOutlinedIcon />
                                                                            </a>
                                                                        </Tooltip>
                                                                        <Tooltip title="Similar Property" placement="top" className="z-50">
                                                                            <a href="#" className="rounded-full bg-neutral-900 block h-8 w-8 flex items-center justify-center "
                                                                            ><HouseOutlinedIcon />
                                                                            </a>
                                                                        </Tooltip>
                                                                        <Tooltip title="Save" placement="top" className="z-50">
                                                                            <a href="#" className="rounded-full bg-neutral-900 block h-8 w-8 flex items-center justify-center">
                                                                                <FavoriteBorderOutlinedIcon />
                                                                            </a>
                                                                        </Tooltip>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="p-3 space-y-2.5 bg-white border   rounded-b-lg">
                                                    <div className="flex items-start ">
                                                        <h2 className="text-xl font-medium text-gray-900">Villa on Hartford</h2>
                                                    </div>
                                                    <div className="flex">
                                                        <LocationOnIcon className="text-blue-700" sx={{ mr: 1 }} />
                                                        <h4 className="text-gray-500 text-sm">4210 Khale Street, Florence, USA</h4>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <h4 className="text-gray-500  text-sm"> 4 Bedrooms</h4>
                                                        <h4 className="text-gray-500 text-sm font-medium ">2142 sq ft</h4>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <h4 className="text-gray-500  text-sm"> 3 Bath</h4>
                                                        <h4 className="text-gray-500 text-sm font-medium ">2 Garage</h4>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <div className="text-gray-500  text-sm">
                                                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                                        </div>
                                                        <h4 className="text-gray-500 text-sm font-medium">{formatCurrency(2549)}/month</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            </div>
                            <div className="flex items-center justify-center">

                                <Pagination count={10} color="primary" className="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Listing;


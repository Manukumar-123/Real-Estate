import { Container } from "@mui/material";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import React from "react";
// import { Link } from "react-router-dom";
import { Link } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Tooltip from '@mui/material/Tooltip';
import Rating from '@mui/material/Rating';
import HttpOutlinedIcon from '@mui/icons-material/HttpOutlined';

const LandDetails2 = [
    {
        'proImg': '/boximg3.jpg',
        'alt': 'LandImage',
        'title': 'Land',
        'status': 'pending',
        'listing': '180 Listings'
    },
    {
        'proImg': '/boximg4.jpg',
        'alt': 'LandImage',
        'status': 'sold',
        'title': 'Condos',
        'listing': '180 Listings'
    },
]
const AgentDetails = () => {

    // formate currecy

    const formatCurrency = (number) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(number);
    };


    return (
        <>
            <div className="my-20 mt-28">
                <Container>
                    <div className="grid grid-cols-7 gap-4">
                        <div className="lg:col-span-2 col-span-7">
                            <div className="w-full border border-gray-400 rounded-md p-3 space-y-3">
                                <img src="https://images.pexels.com/photos/17085086/pexels-photo-17085086/free-photo-of-man-posing-in-sweater.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="a" className="rounded-md" />

                                <h3 className='font-semibold text-[#323232] text-2xl text-center'>Ramesh Prashad</h3>
                                <div className="flex flex-col space-y-3">
                                    <div className="flex">
                                        <div className="bg-orange-400 w-10 h-10 rounded-md me-4 flex items-center justify-center ">
                                            <EmailOutlinedIcon className="text-white" />
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-gray-600 text-sm">Email</p>
                                            <p className="font-semibold">xx@LRE4U.com</p>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="bg-blue-400 w-10 h-10 rounded-md me-4 flex items-center justify-center ">
                                            <PhoneIphoneOutlinedIcon className="text-white" />
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-gray-600 text-sm">Phone</p>
                                            <p className="font-semibold">800-510-2815</p>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="bg-red-400 w-10 h-10 rounded-md me-4 flex items-center justify-center ">
                                            <HttpOutlinedIcon className="text-white" />
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-gray-600 text-sm">Website</p>
                                            <Link href='https://www.lochanrealestate.com/' target="_blank" className="font-semibold">website.com</Link>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className=" text-md font-semibold">Office</p>
                                        <h6 className="text-sm">Main office is 1817 Capitol Ave, Sacramento,
                                            CA 95811</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-5 col-span-7">
                            <div className="flex flex-col space-y-4 px-4">
                                <h3 className="text-3xl font-semibold text-center">About Ramesh</h3>
                                <p className="text-justify text-gray-500">Rameshwar Prasad is a seasoned real estate professional with extensive experience in the industry. He is currently associated with Lochan Real Estate and Eloan4Home, where he serves as a senior executive. Rameshwar brings with him a wealth of knowledge and expertise in the field, having worked in the industry for several years.

                                    Throughout his career, Rameshwar has demonstrated a keen ability to identify lucrative real estate and business opportunities and negotiate deals that benefit all parties involved. He is known for his strategic thinking and his ability to develop innovative solutions to complex challenges.

                                    Rameshwar is passionate about real estate and is committed to providing his clients with exceptional service. He believes in building strong, long-lasting relationships with his clients based on trust, honesty, and transparency.

                                    Rameshwar holds an MBA from Pepperdine University and has completed several professional development courses to enhance his skills and knowledge. He is widely respected in the industry and is considered one of the top real estate professionals in the region.

                                    Outside of work, Ramesh is an active member of his community and is involved in several charitable organizations. He is committed to giving back to the community and is passionate about making a positive impact in the lives of others.</p>


                                <h2 className="text-2xl font-semibold text-gray-700  pt-4">Ramesh Listing</h2>
                                <div className="grid lg:grid-cols-2 grid-cols-1 gap-20">
                                    {
                                        LandDetails2.map((items, index) => (
                                            <div className="col-span-1" key={index}>
                                                <div >
                                                    <div className="hover:drop-shadow-xl delay-150 transition mb-5 " >
                                                        <div className="overflow-hidden relative rounded-md rounded-t-lg propertyblock">
                                                            <Link to='/' className="">
                                                                <img src={items.proImg} alt={items.alt} width="100%" style={{ height: '250px' }} className="   duration-700 hover:scale-110 hover:duration-700 " />
                                                                <span className="absolute top-5 right-6 text-xs text-white bg-orange-600 rounded py-1 px-3">{items.status}</span>
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
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default AgentDetails;
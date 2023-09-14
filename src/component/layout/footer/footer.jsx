import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Container, Grid, IconButton } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className='py-10 text-white bg-[#323232] w-full  left-0 z-50'>
                <Container>
                    <Grid container className=' space-y-8 md:space-y-0 lg:space-y-0'>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <div className='space-y-3'>
                                <div>
                                    <img src="/logo.png" alt="logo" width="200px" />
                                </div>
                                <p className=" text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio excepturi nam totam sequi, ipsam consequatur repudiandae libero illum.</p>
                                <div className="flex">
                                    <LocationOnIcon className="" sx={{ mr: 1 }} />
                                    <p className=" text-md ">Aek Kshatri CPA, 5130 Door Drive, Madison WI 53705</p>
                                </div>
                                <div className="flex">
                                    <EmailIcon className="" sx={{ mr: 1 }} />
                                    <p className=" text-md ">aek.kshatry@gmail.com</p>
                                </div>
                                <div className="flex">
                                    <PhoneIcon className="" sx={{ mr: 1 }} />
                                    <p className=" text-md ">6085098075</p>
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={12} md={3} lg={3}>
                            <div className='space-y-3'>
                                <h2 className=' font-bold text-xl text-start'>Popular Searches</h2>
                                <div className='flex flex-col space-y-4 text-start'>
                                    <Link>
                                        <p className="">Property for Rent</p>
                                    </Link>
                                    <Link>
                                        <p className="">Property for Sale</p>
                                    </Link>
                                    <Link>
                                        <p className="">Condominium for Sale</p>
                                    </Link>
                                    <Link>
                                        <p className="">Resale Properties</p>
                                    </Link>
                                    <Link>
                                        <p className="">Recent Properties</p>
                                    </Link>
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={12} md={2} lg={2}>
                            <div className='space-y-3'>
                                <h2 className=' font-bold text-xl text-start'>Quick Links</h2>
                                <div className='flex flex-col space-y-4 text-start'>
                                    <Link>
                                        <p className="">About us</p>
                                    </Link>
                                    <Link>
                                        <p className="">Contact us</p>
                                    </Link>
                                    <Link>
                                        <p className="">Privacy Policy</p>
                                    </Link>
                                    <Link>
                                        <p className="">FAQ</p>
                                    </Link>
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={12} md={3} lg={3}>
                            <div className='space-y-3'>
                                <h2 className=' font-bold text-xl text-start'>Subscribe</h2>
                                <div className='flex'>
                                    <input type="text" placeholder='Your mail address ..' className='p-2 outline-0 border border-[#ccc]' />
                                    <button className='bg-[#0A356E] text-white p-2 px-3 font-semibold'>Subscribe</button>
                                </div>
                                <div >
                                    <h2 className='text-start font-semibold text-white'>Follow us on</h2>
                                    <div className='flex space-x-2'>
                                        <IconButton >
                                            <FacebookIcon className='text-white hover:text-gray-300' />
                                        </IconButton>

                                        <IconButton >
                                            <TwitterIcon className='text-white hover:text-gray-300'/>
                                        </IconButton>

                                        <IconButton>
                                            <PinterestIcon className='text-white hover:text-gray-300' />
                                        </IconButton>

                                        <IconButton>
                                            <InstagramIcon  className='text-white hover:text-gray-300' />
                                        </IconButton>

                                        <IconButton>
                                            <YouTubeIcon className='text-white hover:text-gray-300' />
                                        </IconButton>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <div>
                        <p className=' text-sm tracking-widest p-4 text-center' sx={{ fontFamily: 'Roboto, sans-serif' }}>© Anju Himalayan Collection Inc. 2023. All rights reserved.</p>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Footer;
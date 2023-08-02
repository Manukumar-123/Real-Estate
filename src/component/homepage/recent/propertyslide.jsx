import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import LocationOnIcon from '@mui/icons-material/LocationOn'
import React from "react";
import Slider from "react-slick";
import { Container, Grid} from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Tooltip from '@mui/material/Tooltip';

const LandDetails = [
  {
      'proImg':'/boximg3.jpg',
      'alt':'LandImage',
      'title':'Land',
      'listing':'180 Listings'
  },
  {
      'proImg':'/boximg4.jpg',
      'alt':'LandImage',
      'title':'Condos',
      'listing':'180 Listings'
  },
  {
      'proImg':'/boximg5.jpg',
      'alt':'LandImage',
      'title':'Commercial',
      'listing':'180 Listings'
  },
  {
    'proImg':'/boximg4.jpg',
    'alt':'LandImage',
    'title':'Commercial',
    'listing':'180 Listings'
}
  
]

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

       //number format

       const formatCurrency = (number) => {
        return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD"
        }).format(number);
      };
    
  return (

    <Slider {...settings}>
      {
          LandDetails.map((items,index)=>(
              <div key={index} >
                  <div className="hover:drop-shadow-xl delay-150 transition mb-5 " >
                      <div className="overflow-hidden relative rounded-md  rounded-t-lg propertyblock">
                          <Link to='/' className="">
                              <img src={items.proImg} alt={items.alt} width="100%" style={{height:'250px'}} className="   duration-700 hover:scale-110 hover:duration-700" />
                              <span className="absolute top-5 right-6 text-xs text-white font-semibold bg-[#0A356E] rounded py-1 px-3">New</span>
                              <div className=" absolute bottom-0 pb-5 left-0 w-full px-4 text-white items-start z-10 hidden agenthoverbox">
                                  <div className="flex justify-between items-center">
                                    <div className="flex items-center pr-2 z-50">
                                        <img src="/agency_1.jpg" className="rounded-full mr-2" style={{height:'30px', width:'30px', objectFit:'cover'}}  />
                                        <h4>Carmen Agency</h4>
                                    </div>
                                    
                                    <div>
                                        <ul className="flex gap-x-1">
                                        <Tooltip title="View Details" placement="top" className="z-50"><a href="#" className="rounded-full bg-neutral-900 block h-8 w-8 flex items-center justify-center"><SearchOutlinedIcon /></a></Tooltip>
                                        <Tooltip title="Similar Property" placement="top" className="z-50"><a href="#" className="rounded-full bg-neutral-900 block h-8 w-8 flex items-center justify-center "><HouseOutlinedIcon /></a></Tooltip>
                                        <Tooltip title="Save" placement="top" className="z-50"><a href="#" className="rounded-full bg-neutral-900 block h-8 w-8 flex items-center justify-center"><FavoriteBorderOutlinedIcon/></a></Tooltip>
                                        </ul>
                                    </div>
                                  </div>
                              </div>
                          </Link>
                      </div>
                      <div className="p-3 space-y-2.5 bg-white border rounded-b-lg">
                          <div className="flex justify-between items-center ">
                              <h2 className="text-xl font-medium text-gray-900">Walnut Grove</h2>
                              <h2 className="text-xl font-bold text-blue-700">{formatCurrency(7500)}</h2>
                          </div>
                          <div className="flex">
                              <LocationOnIcon className="text-blue-700" sx={{mr:1}} />
                              <h4 className="text-gray-500 text-sm">4210 Khale Street, Florence, USA</h4>
                          </div>
                          <div className="flex justify-between items-center">
                              <h4 className="text-gray-500 text-sm ">Type</h4>
                              <h4 className="text-gray-500 text-sm font-medium ">Single Familyt</h4>
                          </div>
                          <div className="flex justify-between items-center">
                              <h4 className="text-gray-500  text-sm">Size</h4>
                              <h4 className="text-gray-500 text-sm font-medium ">Size 3,634 SqFt</h4>
                          </div>
                          <div className="flex justify-between items-center">
                              <h4 className="text-gray-500  text-sm">Rooms</h4>
                              <h4 className="text-gray-500 text-sm font-medium ">3 Beds + 2.5 Baths</h4>
                          </div>
                      </div>
                      </div>
              </div>
                  ))
      }
    </Slider>
  );
}
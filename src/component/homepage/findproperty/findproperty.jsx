import { Container,Grid } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const PropertyDetails = [
    {
        'proImg':'/boximg1.jpg',
        'alt':'propertyImage',
        'title':'Multi Family',
        'listing':'180 Listings'
    },
    {
        'proImg':'/boximg2.jpg',
        'alt':'propertyImage',
        'title':'Houses',
        'listing':'180 Listings'
    },

]

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
    }
    
]


const Findproperty = () => {
    return(
        <>
            <div className="py-16 space-y-5">
                <div className="flex flex-col text-center space-y-2 pb-6">
                    <h5 className="text-xs text-orange-600 font-bold">BROWSE POPULAR PROPERTIES</h5>
                    <h2 className="text-3xl font-bold" sx={{fontFamily:'Roboto, sans-serif'}}>Find Properties In Your City</h2>
                </div>
                <Container className="space-y-3">
                    <Grid container spacing={4}>
                        {
                            PropertyDetails.map((item,index)=>(
                            <Grid item xs={12} sm={12} md={6} lg={6} key={index}>
                                <div className="overflow-hidden relative rounded-md boxGrid">
                                    <Link to='/'>
                                        <img src={item.proImg} alt={item.alt} width="100%" style={{height:'320px'}} className="   duration-700 hover:scale-110 hover:duration-700" />
                                        <div className="absolute bottom-0 w-full left-0 h-full bg-gradient-to-t  to-transparent">
                                        </div>
                                        <div className=" absolute bottom-10 left-10 flex flex-col text-white items-start z-50">
                                            <h3 className="text-xl font-bold ">{item.title}</h3>
                                            <h4 className="text-md font-semibold mb-1 ">{item.listing}</h4>
                                            <h4 className="text-md font-semibold ">See All Listing <ArrowRightAltIcon /></h4>
                                        </div>

                                    </Link>
                                </div>
                            </Grid>
                            ))
                        }
                    </Grid>

                    <Grid container spacing={4}>
                        {
                            LandDetails.map((item,index)=>(
                                <Grid item xs={12} sm={12} md={4} lg={4} key={index}>
                                    
        
                        <div className="overflow-hidden relative rounded-md boxGrid">
                            <Link to='/' className="">
                                <img src={item.proImg} alt={item.alt} width="100%" style={{height:'320px'}} className="   duration-700 hover:scale-110 hover:duration-700" />
                                <div className="absolute bottom-0 w-full left-0 h-full bg-gradient-to-t  to-transparent">
                                </div>
                                    <div className=" absolute bottom-10 left-10 flex flex-col text-white items-start z-50">
                                        <h3 className="text-xl font-bold ">{item.title}</h3>
                                        <h4 className="text-md font-semibold mb-1 ">{item.listing}</h4>
                                        <h4 className="text-md font-semibold ">See All Listing <ArrowRightAltIcon /></h4>
                                    </div>

                            </Link>
                        </div>

                                </Grid>

                            ))
                        }
                    </Grid>
                </Container>
            </div>
        </>
    )
}

export default Findproperty;
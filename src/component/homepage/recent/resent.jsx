import { Container,Grid } from "@mui/material";
import React from 'react';
import Propertyslide from './propertyslide';



const Recent = () => {
    return(
        <>
            <div className="py-14 space-y-5 propertiesslide bg-gray-100"> 
                    <h2 className="text-3xl font-bold pb-6 text-center" sx={{fontFamily:'Roboto, sans-serif'}}>Recent Properties</h2>
                    <Container>
                      <Propertyslide />
                    </Container>
            </div>
        </>
    )
}

export default Recent;
import { Container,Grid } from "@mui/material";
import React from 'react';
import Listedproperty from "./listedproperty"



const Justlisted = () => {
    return(
        <>
            <div className="py-14 space-y-5 propertiesslide"> 
                <h2 className="text-3xl font-bold pb-6 text-center" sx={{fontFamily:'Roboto, sans-serif'}}>Just Listed</h2>
                <Container>
                    <Listedproperty />
                </Container>
            </div>
        </>
    )
}

export default Justlisted;
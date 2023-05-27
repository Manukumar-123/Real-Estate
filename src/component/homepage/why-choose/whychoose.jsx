import { Container,Grid } from "@mui/material";
import React from 'react';

const Whychooseus = () => {
    return(
        <>
            <div className="bg-gray-100 py-16">
                <h2 className="text-3xl font-bold pb-10 text-center">Why Choose Us</h2>
                <Container>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <img src='/Property-1.jpg' alt="sfd" width="100%" style={{height:'400px'}} className=" rounded-lg"/>
                        </div>
                        <div className=" md:pl-6">
                            <div className="md:flex items-center md:text-left mb-6">
                                <img src="/property_listing.png" style={{height:'55px', width:'55px', objectFit:'contain'}} className="m-auto opacity-70" alt="" />
                                <div className="md:pl-6">
                                    <h3 className="font-medium text-xl mb-2 text-center md:text-start lg:text-start">Personalized Service.</h3>
                                    <p className="text-sm li leading-6 text-gray-600 text-center md:text-start lg:text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, aspernatur.</p>
                                </div>
                            </div>
                            <div className="md:flex items-center md:text-left mb-6">
                                <img src="/home.png" style={{height:'55px', width:'55px', objectFit:'contain'}} className="m-auto opacity-70" alt="" />
                                <div className="md:pl-6">
                                    <h3 className="font-medium text-xl mb-2 text-center md:text-start lg:text-start">Financing made easy.</h3>
                                    <p className="text-sm li leading-6 text-gray-600 text-center md:text-start lg:text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, aspernatur.</p>
                                </div>
                            </div>
                            <div className="md:flex items-center md:text-left mb-6 text-center md:text-start lg:text-start">
                                <img src="/customer_support.png" style={{height:'55px', width:'55px', objectFit:'contain'}} className="m-auto opacity-70" alt="" />
                                <div className="md:pl-6">
                                    <h3 className="font-medium text-xl mb-2">24/7 support.</h3>
                                    <p className="text-sm li leading-6 text-gray-600 text-center md:text-start lg:text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, aspernatur.</p>
                                </div>
                            </div>
                            <div className="md:flex items-center md:text-left mb-6 ">
                                <img src="/deal_1.png" style={{height:'55px', width:'55px', objectFit:'contain'}} className="m-auto opacity-70" alt="" />
                                <div className="md:pl-6">
                                    <h3 className="font-medium text-xl mb-2 text-center md:text-start lg:text-start">Trusted by thousands.</h3>
                                    <p className="text-sm li leading-6 text-gray-600 text-center md:text-start lg:text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, aspernatur.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}


export default Whychooseus;
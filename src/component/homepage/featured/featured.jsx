import { Container,Grid } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


const Featured = () => {
    return(
        <>
            <div className="py-16 space-y-5">
                <div className="flex flex-col text-center space-y-2 pb-6">
                    <h2 className="text-3xl font-bold" sx={{fontFamily:'Roboto, sans-serif'}}>Featured Communities</h2>
                </div>
                <Container className="space-y-3">
                   <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                        <Link to='/listing' className="border rounded-md p-8 space-y-3 bg-[#8E8E8E] text-white">
                            <img src="/natomas.jpg" width="100%" className="rounded-md" />
                            <h3 className="font-semibold text-xl">Natomas</h3>
                            <p className="leading-10">Natomas: Thriving community in Sacramento County, CA with suburban and urban living, affordable housing, excellent schools, and convenient location with access to downtown Sacramento.</p>
                        </Link>

                        <Link to='/listing' className="border-2 rounded-md p-8 space-y-3 bg-[#fff]">
                            <img src="/el.jpg" width="100%" className="rounded-md" />
                            <h3 className="font-semibold text-xl">El Dorado Hills</h3>
                            <p className="leading-10">El Dorado Hills: Upscale community in El Dorado County, CA with scenic beauty, excellent schools, well-maintained parks, and numerous recreational opportunities including boating, fishing, and hiking.</p>
                        </Link>

                        <Link to='/listing' className="border rounded-md p-8 space-y-3 bg-[#0A356E] text-white">
                            <img src="/Granite.jpg" width="100%" className="rounded-md" />
                            <h3 className="font-semibold text-xl">Granite Bay</h3>
                            <p className="leading-10">Granite Bay: Prestigious community in Placer County, CA with luxurious homes, large lots, upscale amenities, natural beauty, excellent schools, and high-end shopping and dining.</p>
                        </Link>
                   </div>
                </Container>
            </div>
        </>
    )
}

export default Featured;
import { Container } from "@mui/material";

const Discover = () => {
    return (
        <>
            <div>
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-3 ">
                        <div className="p-4  py-12 space-y-4 text-center">
                            <h3 className="font-bold text-2xl">Find A Home</h3>
                            <p className="text-gray-500 leading-6">Let us work with you to find and purchase the home of your dreams. We know the area, the market conditions, and the opportunities for buyers in today’s market.</p>
                            <button className="bg-[#0A356E] text-white font-bold text-lg px-4 py-2 rounded-sm hover:rounded-lg duration-300 hover:duration-300">SEARCH NOW</button>
                        </div>
                        <div className="  p-4 py-12 space-y-4 text-center text-white bg-[#0A356E]">
                            <h3 className="font-bold text-2xl">Our Commitment</h3>
                            <p className="text-white leading-6">Working with us guarantees you the local knowledge and market information you need. We’re local experts with a reputation for excellence.</p>
                            <button className="bg-[#0A356E] border-2 text-white font-bold text-lg px-4 py-2 rounded-sm hover:rounded-lg duration-300 hover:duration-300">CONTACT US TODAY !</button>
                        </div>
                        <div className=" p-4  py-12 space-y-4 text-center">
                            <h3 className="font-bold text-2xl">Sell Your Home</h3>
                            <p className="text-gray-500 leading-6">Trust the sale of your home to a trusted partner. We’re here to help guide you through every step of the process with expert advice and representation.</p>
                            <button className="bg-[#0A356E] text-white font-bold text-lg px-4 py-2 rounded-sm hover:rounded-lg duration-300 hover:duration-300">YOUR HOME'S VALUE</button>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Discover;
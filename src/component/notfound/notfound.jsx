
const Notfound = () => {
    return(
        <>
         <div className="w-full min-h-screen bg-[#000000] flex items-center justify-center">
            <div className="flex items-center justify-around  gap-4">
                <h3 className="text-3xl text-white ">404</h3>
                <div className="h-12 font-sans w-[1px] bg-[#4b4b4b]"></div>
                <p className="text-md text-white">This page could not be found</p>
            </div>
         </div>
        </>
    )
}

export default Notfound;
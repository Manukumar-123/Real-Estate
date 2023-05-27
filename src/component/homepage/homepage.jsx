import Findproperty from "./findproperty/findproperty";
import Head from "./formheader/header";
import Recent from "./recent/resent";
import Whychooseus from './why-choose/whychoose';
import Justlisted from './justlisted/justlisted';
import Discover from "./discover/discover";
import Featured from "./featured/featured";

const Homepage = () => {

    return(
        <>
           <Head />
           <Discover />
           <Featured />
           {/* <Findproperty /> */}
           <Recent />
           <Justlisted />
           <Whychooseus />
        </>
    )
}

export default Homepage;
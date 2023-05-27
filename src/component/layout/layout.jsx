import Header from './navbar/navbar';
import Footer from "./footer/footer";

const Layout = ({ children, color, position }) => {
    return (
        <>
            <Header color={`${color}`} position={position} />
            {children}
            <Footer />
        </>
    )
}
export default Layout;
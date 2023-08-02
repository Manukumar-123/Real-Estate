import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const LandDetails2 = [
    {
        'proImg': '/boximg3.jpg',
        'alt': 'LandImage',
        'area': '3120',
        'price': '34000',
        'title': 'Land',
        'des': 'Buying a land is a significant investment that offers long-term benefits and stability Owning a piece of land provides a sense of security and the opportunity to build a home or establish a business.Land ownership allows for potential appreciation in value over time, '
    },
    {
        'proImg': '/boximg4.jpg',
        'alt': 'LandImage',
        'area': '3120',
        'price': '34000',
        'title': 'Condos',
        'des': 'making it a valuable asset.With land, you have the freedom to customize and develop the property according to your specific needs and vision.Investing in land provides a solid foundation for future plans and can be a wise decision for financial growth and personal fulfillment.'
    },
    {
        'proImg': '/boximg5.jpg',
        'alt': 'LandImage',
        'area': '3120',
        'price': '34000',
        'title': 'Commercial',
        'des': 'Welcome to this single story home in Rancho Cordova.making it a valuable asset.With land, you have the freedom to customize and develop the property according to your specific needs and vision.Investing in land provides a solid foundation for future thank you '
    },

]

const Inquiry = () => {

    const formatCurrency = (number) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(number);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const Headingsub = {
        color: `#501e95`,
    }

    return (
        <>
           <Container className=''>
          <div className='text-2xl font-semibold text-[#323232] mb-6 mt-0' style={Headingsub}>Inquiry</div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    LandDetails2 && LandDetails2.map((item, index) => (
                        <div className='' key={index}>
                            {/* shadow-2xl */}
                            <Card >
                                <CardHeader
                                    avatar={
                                        <Avatar alt="i" src="/favicon.png" />
                                    }
                                    action={
                                        <div>
                                        <IconButton
                                          aria-label="more"
                                          id="long-button"
                                          aria-controls={open ? 'long-menu' : undefined}
                                          aria-expanded={open ? 'true' : undefined}
                                          aria-haspopup="true"
                                          onClick={handleClick}
                                        >
                                          <MoreVertIcon />
                                        </IconButton>
                                        <Menu
                                          id="long-menu"
                                        
                                          anchorEl={anchorEl}
                                          open={open}
                                          onClose={handleClose}
                                        >
                                            <MenuItem>
                                               <div className=''> <DeleteOutlineIcon /> Delete </div>
                                            </MenuItem>
                                      
                                        </Menu>
                                      </div>
                                    }
                                    title={<p className='font-bold' >{item.title}</p>}
                                    subheader={
                                        <p variant="subtitle2">
                                            {new Date().toDateString()}
                                        </p>
                                    }
                                />
                                <Link to="/listing">
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={item.proImg}
                                        className='h-40'
                                        alt="Paella dish"
                                        
                                    />
                                </Link>
                                <CardContent>
                                    <div className='mb-2 flex item-center justify-between'>
                                        <p className='font-semibold text-[#323232]'>Price : {formatCurrency(item.price)}</p>
                                        <p className='font-semibold text-[#323232]'>Area :{item.area} sqft</p>
                                    </div>
                                    {/* <button className='text-[#fff] bg-gradient-to-r from-[#5C2094] to-[#E94799] rounded-sm px-2 p-1 mb-1 text-sm '>Your Message</button> */}
                                    <Typography variant="body2" color="text.primary">
                                      <p className='font-normal leading-6 text-[#525252]'> {item.des}</p> 
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    ))
                }
            </div>
        </Container>


        </>
    );
}

export default Inquiry;
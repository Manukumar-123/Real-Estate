import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const LandDetails2 = [
    {
        'proImg': '/boximg3.jpg',
        'alt': 'LandImage',
        'area': '3120',
        'price': '34000',
        'title': 'Land',
        'des': 'Welcome to this single story home in Rancho Cordova. Long time owner has raised their family here and has greatly enjoyed this home, but is now ready to move on'
    },
    {
        'proImg': '/boximg4.jpg',
        'alt': 'LandImage',
        'area': '3120',
        'price': '34000',
        'title': 'Condos',
        'des': 'Welcome to this single story home in Rancho Cordova. Long time owner has raised their family here and has greatly enjoyed this home, but is now ready to move on'
    },
    {
        'proImg': '/boximg5.jpg',
        'alt': 'LandImage',
        'area': '3120',
        'price': '34000',
        'title': 'Commercial',
        'des': 'Welcome to this single story home in Rancho Cordova. Long time owner has raised their family here and has greatly enjoyed this home, but is now ready to move on'
    },
    {
        'proImg': '/boximg4.jpg',
        'alt': 'LandImage',
        'area': '3120',
        'price': '34000',
        'title': 'Commercial',
        'des': 'Welcome to this single story home in Rancho Cordova. Long time owner has raised their family here and has greatly enjoyed this home, but is now ready to move on'
    },
    {
        'proImg': '/boximg3.jpg',
        'alt': 'LandImage',
        'area': '3120',
        'price': '34000',
        'title': 'Land',
        'des': 'Welcome to this single story home in Rancho Cordova. Long time owner has raised their family here and has greatly enjoyed this home, but is now ready to move on'
    },
    {
        'proImg': '/boximg4.jpg',
        'alt': 'LandImage',
        'area': '3120',
        'price': '34000',
        'title': 'Condos',
        'des': 'Welcome to this single story home in Rancho Cordova. Long time owner has raised their family here and has greatly enjoyed this home, but is now ready to move on'
    },
    {
        'proImg': '/boximg5.jpg',
        'alt': 'LandImage',
        'area': '3120',
        'price': '34000',
        'title': 'Commercial',
        'des': 'Welcome to this single story home in Rancho Cordova. Long time owner has raised their family here and has greatly enjoyed this home, but is now ready to move on'
    },
    {
        'proImg': '/boximg4.jpg',
        'alt': 'LandImage',
        'area': '3120',
        'price': '34000',
        'title': 'Commercial',
        'des': 'Welcome to this single story home in Rancho Cordova. Long time owner has raised their family here and has greatly enjoyed this home, but is now ready to move on'
    }

]

const Favorite = () => {

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
          <div className='text-2xl font-semibold text-[#323232] mb-6 mt-0' style={Headingsub}>My favorites</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    LandDetails2 && LandDetails2.map((item, index) => (
                        
                        <div className='' key={index}>
                            <Card>
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
                                               <div className='flex items-center'> <DeleteOutlineIcon  style={{ fontSize: 20, marginRight:5, marginTop:-2, }}/> Delete </div>
                                            </MenuItem>
                                      
                                        </Menu>
                                      </div>

                                    }

                                  title={<p className='font-bold'>{item.title}</p>}
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
                                    <Typography variant="body2" color="text.secondary">
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

export default Favorite;
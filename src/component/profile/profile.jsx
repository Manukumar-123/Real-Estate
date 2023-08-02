import { Container } from '@mui/material';
import * as React from 'react';
import { Avatar } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import Edit from './edit/edit';
import Favorite from './favorite/favorite'
import Inquiry from './enquiry/inquiry';

const MyList = [
    {
        'icon': <AccountCircleOutlinedIcon />,
        'label': 'Edit Profile',
        'fillIcon': <AccountCircleIcon />,
        "active":true
        // 'url': '/listing'
    },
    {
        'icon': <FavoriteBorderOutlinedIcon />,
        'fillIcon': <FavoriteIcon />,
        'label': 'My favorites',
    },
   
    {
        'icon': <QueryStatsOutlinedIcon />,
        'label': 'Inquiry',
        'fillIcon': <QueryStatsIcon />,
    },
    {
        'icon': <SettingsOutlinedIcon />,
        'label': 'Setting',
        'fillIcon': <SettingsIcon />,
    },
    {
        'icon': <LogoutOutlinedIcon />,
        'fillIcon': <LogoutIcon />,
        'label': 'Logout'
    },
]


const Profile = () => {

    const [open, setOpen] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(0); // Set the initial index to 0 for the first item
    const [clickedIndex, setClickedIndex] = React.useState(null); // New state variable for clicked item

    // collapse
    const handleClick = () => {
        setOpen(!open);
    };

    // selected
    const handleListItemClick = (event, index) => {

        setSelectedIndex(index);
        setClickedIndex(index); // Update clickedIndex when a list item is clicked
    };

    // Define your custom style for the selected item
    const listItemStyle = {
        // background: `linear-gradient(to right, #521E94 0%, #E94799 70%)`,
        color: `#501e95`,
        borderRight:'4px solid #501e95',
        background:'white',
    };

    return (
        <>
            <div style={{ marginTop: '63px' }}>
                <div className='grid grid-cols-5'>
                    <div className='lg:col-span-1 col-span-5 border-r h-[100%] py-4 lg:fixed relative bg-white lg:w-[20%] w-[100%] '>
                        <div className='flex flex-col space-y-4'>
                            <div className='flex flex-col items-center justify-center space-y-3'>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://mui.com/static/images/avatar/3.jpg"
                                    sx={{ width: 80, height: 80 }}
                                />
                                <h5 className='text-lg font-semibold text-[#323232]'>Reshma Roy</h5>
                            </div>
                            <div>

                                <List
                                    component="nav"
                                    aria-labelledby="nested-list-subheader"
                                >
                                    {MyList.map((item, index) => (
                                        <div key={index}>
                                            <ListItemButton as={Link} to={item.url}
                                                selected={selectedIndex === index}
                                                onClick={(event) => (handleListItemClick(event, index), item.subList ? handleClick() : null)}
                                                style={selectedIndex === index ? listItemStyle : null} // Apply custom styling to the selected item
                                            >
                                                <ListItemIcon style={{ color: clickedIndex === index ? '#501e95' : 'inherit' }}> 
                                                {/* {selectedIndex === index ? item.fillIcon : item.icon } */}
                                                    {clickedIndex === index || selectedIndex === index ? item.fillIcon : item.icon }
                                                </ListItemIcon>

                                                <ListItemText primary={ selectedIndex === index ? <p className='font-bold'>{item.label}</p> : item.label} />
                                                {item.subList ? (open ? <ExpandLess /> : <ExpandMore />) : null}
                                            </ListItemButton>

                                            <Collapse in={open} timeout="auto" unmountOnExit>
                                                <List component="div" disablePadding>
                                                    {item.subList?.map((item, index) => (
                                                        <div key={index + 100}>
                                                            <ListItemButton
                                                                sx={{ pl: 4 }}
                                                                selected={selectedIndex === index + 100}
                                                                onClick={(event) => handleListItemClick(event, index + 100)}
                                                                style={selectedIndex === index + 100 ? listItemStyle : null} // Apply custom styling to the selected item
                                                            >
                                                                <ListItemIcon style={{ color: clickedIndex === index + 100 ? 'white' : 'inherit' }}>
                                                                    {item.icon}
                                                                </ListItemIcon>
                                                                <ListItemText primary={item.label} />
                                                            </ListItemButton>
                                                        </div>
                                                    ))}
                                                </List>
                                            </Collapse>
                                        </div>
                                    ))}
                                </List>
                            </div>
                        </div>
                    </div>

                    <div className='lg:col-span-11 pl-0 mt-0 lg:pl-10 lg:mt-0 col-span-5 p-0 ml-0 lg:ml-60 pt-4'>
                        {
                            selectedIndex === 0 ? <Edit /> : null
                        }

                        {
                            selectedIndex === 1 ? <Favorite /> : null
                        }
                        {
                            selectedIndex === 2 ? <Inquiry /> : null
                        }
                    </div>
                </div>

            </div>
        </>
    )
}
export default Profile;
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { Container } from '@mui/material';
const Attributes = [
    {
        "AttributeFieldName": "MLS#",
        "AttributeValue": 'MLS#'
    },
    {
        "AttributeFieldName": "Country",
        "AttributeValue": 'Country'
    },
    {
        "AttributeFieldName": "City",
        "AttributeValue": 'City'
    },
    {
        "AttributeFieldName": "Area",
        "AttributeValue": 'Area'
    },

    {
        "AttributeFieldName": "Neighborhood",
        "AttributeValue": 'Neighborhood'
    },
    {
        "AttributeFieldName": "Zip",
        "AttributeValue": 'Zip'
    },
    {
        "AttributeFieldName": "Style",
        "AttributeValue": 'Style'
    },
    {
        "AttributeFieldName": "Bedrooms",
        "AttributeValue": 'Bedrooms'
    },
    {
        "AttributeFieldName": "Full Bathrooms",
        "AttributeValue": 'Full Bathrooms'
    },
    {
        "AttributeFieldName": "Half Bathrooms",
        "AttributeValue": 'Half Bathrooms'
    },
    {
        "AttributeFieldName": "Sqr Footage",
        "AttributeValue": 'Sqr Footage'
    },
    {
        "AttributeFieldName": "Lot Size",
        "AttributeValue": 'Lot Size'
    },
    {
        "AttributeFieldName": "Price",
        "AttributeValue": 'Price'
    },
]
const Category = () => {

    return (
        <>
            <Container>
                <div className="grid grid-cols-7 gap-8 ">
                    <div className="lg:col-span-5 col-span-7 space-y-4">
                        <div className="justify-between gap-5 lg:flex grid">
                            <div className="space-y-2">
                                <h6 className="text-sm font-bold text-gray-500">ADDRESS</h6>
                                <h2 className="text-2xl text-gray-900 font-semibold">85 Moonlit Cir, Sacramento, CA</h2>
                            </div>
                            <div className="space-y-2">
                                <h6 className="text-sm font-bold text-gray-500">LISTING TYPE</h6>
                                <h2 className="text-2xl text-gray-900 font-semibold">single family</h2>
                            </div>
                            <div className="space-y-2">
                                <h6 className="text-sm font-bold text-gray-500">PRICE</h6>
                                <h2 className="text-2xl text-gray-900 font-semibold">$ 29 000</h2>
                            </div>
                        </div>
                        <hr className='border border-gray-600' />
                        <div className="justify-between gap-5 lg:flex grid">
                            <div className='grid grid-cols-5 gap-8'>
                                <div className="space-y-2 col-span-5 lg:col-span-2">
                                    <h6 className="text-sm font-bold text-gray-500">PROPERTY ATTRIBUTES</h6>
                                    <div className='space-y-2'>
                                        {
                                            Attributes.map((item,index) => (
                                                <div className='flex items-center justify-between border-b py-2' key={index}>
                                                    <h6 className='text-gray-500 font-semibold'>{item.AttributeFieldName}</h6>
                                                    <h5 className='text-gray-800 font-semibold'>{item.AttributeValue}</h5>
                                                </div>
                                            ))
                                        }
                                    </div>

                                    <div className='pt-4'>
                                        <p className=' text-sm font-semibold text-gray-400'>DATA SOURCE</p>
                                        <h6 className='font-semibold text-gray-800'>Anju Himalayan Collection Inc.</h6>
                                    </div>
                                </div>

                                <div className="space-y-2 col-span-5 lg:col-span-3">
                                    <h6 className="text-sm font-bold text-gray-500">PROPERTY DESCRIPTION</h6>
                                    <p className="text-md text-gray-500  text-justify">
                                        Welcome to this single story home in Rancho Cordova. Long time owner has raised their family here and has greatly enjoyed this home, but is now ready to move on. This home features 4 bedrooms, a living room off the kitchen, and a large family room. 10 year old roof and dual pane windows throughout. Original hardwood floors under carpet. The home sits on a beautiful, large corner lot. The backyard has grass, RV/boat parking behind the fence, and a covered patio. You can pick fruit off the lemon, apple, orange, mandarin, and fig trees. Very close to the popular American River Parkway that offers water sports like swimming, rafting, kayaking, and paddle boarding. Miles of trails to walk, run, or cycle. Only a few minutes to the 50 corridor. Welcome Home!Welcome to this single story home in Rancho Cordova. Long time owner has raised their family here and has greatly enjoyed this home, but is now ready to move on. This home features 4 bedrooms, a living room off the kitchen, and a large family room. 10 year old roof and dual pane windows throughout. Original hardwood floors under carpet. The home sits on a beautiful, large corner lot. The backyard has grass, RV/boat parking behind the fence, and a covered patio. You can pick fruit off the lemon, apple, orange, mandarin, and fig trees. Very close to the popular American River Parkway that offers water sports like swimming, rafting, kayaking, and paddle boarding. Miles of trails to walk, run, or cycle. Only a few minutes to the 50 corridor. Welcome Home!
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2 col-span-7">
                        <div className="space-y-1">
                            <div className=' cursor-pointer'>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar sx={{ backgroundImage: 'linear-gradient(to bottom right, red, black)' }}>
                                            <FavoriteBorderIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Save this property"
                                    />
                                </ListItem>
                            </div>
                            <div className=' cursor-pointer'>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar sx={{ backgroundImage: 'linear-gradient(to bottom right, red, black)' }}>
                                            <ChatOutlinedIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Chat with us now"
                                    />
                                </ListItem>
                            </div>
                            <div className=' cursor-pointer'>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar sx={{ backgroundImage: 'linear-gradient(to bottom right, red, black)' }}>
                                            <HelpOutlineOutlinedIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Ask agent a question"
                                    />
                                </ListItem>
                            </div>
                            <div className=' cursor-pointer'>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar sx={{ backgroundImage: 'linear-gradient(to bottom right, red, black)' }}>
                                            <RemoveRedEyeOutlinedIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Request showing"
                                    />
                                </ListItem>
                            </div>
                            <div className=' cursor-pointer'>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar sx={{ backgroundImage: 'linear-gradient(to bottom right, red, black)' }}>
                                            <MarkEmailUnreadOutlinedIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Property email alerts"
                                    />
                                </ListItem>
                            </div>
                            <div className=' cursor-pointer'>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar sx={{ backgroundImage: 'linear-gradient(to bottom right, red, black)' }}>
                                            <PrintOutlinedIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Print flyer"
                                    />
                                </ListItem>
                            </div>
                            <div className=' cursor-pointer'>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar sx={{ backgroundImage: 'linear-gradient(to bottom right, red, black)' }}>
                                            <FacebookOutlinedIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Share on facebook"
                                    />
                                </ListItem>
                            </div>
                            <div className=' cursor-pointer'>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar sx={{ backgroundImage: 'linear-gradient(to bottom right, red, black)' }}>
                                            <TwitterIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Share on twitter"
                                    />
                                </ListItem>
                            </div>
                            <div className=' cursor-pointer'>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar sx={{ backgroundImage: 'linear-gradient(to bottom right, red, black)' }}>
                                            <PinterestIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Share on pinterest"
                                    />
                                </ListItem>
                            </div>

                        </div>
                        <div className='pt-4 p-4 w-full h-40 overflow-y-scroll my-4'>
                            <p className=' text-lg font-semibold text-gray-400'>Price History</p>
                            <div className='flex m-4 item-center justify-between'>
                                <h6 className='font-semibold text-gray-800'>24-12-2022</h6>
                                <h6 className='font-semibold text-gray-800'>$249,00</h6>
                            </div>
                            <hr className='' />

                            <div className='flex m-4 item-center justify-between'>
                                <h6 className='font-semibold text-gray-800'>24-12-2022</h6>
                                <h6 className='font-semibold text-gray-800'>$249,00</h6>
                            </div>
                            <hr className='' />

                            <div className='flex m-4 item-center justify-between'>
                                <h6 className='font-semibold text-gray-800'>24-12-2022</h6>
                                <h6 className='font-semibold text-gray-800'>$249,00</h6>
                            </div>
                            <hr className='' />

                            <div className='flex m-4 item-center justify-between'>
                                <h6 className='font-semibold text-gray-800'>24-12-2022</h6>
                                <h6 className='font-semibold text-gray-800'>$249,00</h6>
                            </div>
                            <hr className='' />

                            <div className='flex m-4 item-center justify-between'>
                                <h6 className='font-semibold text-gray-800'>24-12-2022</h6>
                                <h6 className='font-semibold text-gray-800'>$249,00</h6>
                            </div>
                            <hr className='' />
                        </div>
                    </div>
                </div>
                <hr className='mt-6 border border-gray-500' />
            </Container>
        </>
    )
}

export default Category;
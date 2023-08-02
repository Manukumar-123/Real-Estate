import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container,Button } from '@mui/material';
import { Link } from 'react-router-dom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CommentIcon from '@mui/icons-material/Comment';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
const LandDetails2 = [
    {
        'proImg': 'https://creativelayers.net/themes/findhouse-html/images/blog/1.jpg',
        'alt': 'LandImage',
        'area': '3120',
        'price': '34000',
        'title': 'Land',
        'des': 'Lorem ipsum dolor sit amet, consectetur text link libero tempus congueipsum dolor sit amet, consectetur text link libero tempus congue. '
    },
    {
        'proImg': 'https://creativelayers.net/themes/findhouse-html/images/blog/4.jpg',
        'alt': 'LandImage',
        'area': '3120',
        'price': '34000',
        'title': 'Condos',
        'des': 'Lorem ipsum dolor sit amet,ipsum dolor sit amet, consectetur text link libero tempus congue consectetur text link libero tempus congue.'
    },
    {
        'proImg': 'https://creativelayers.net/themes/findhouse-html/images/blog/2.jpg',
        'alt': 'LandImage',
        'area': '3120',
        'price': '34000',
        'title': 'Commercial',
        'des': 'Lorem ipsum dolor sit amet, ipsum dolor sit amet, consectetur text link libero tempus congue consectetur text link libero tempus congue. '
    },
    {
        'proImg': 'https://creativelayers.net/themes/findhouse-html/images/blog/5.jpg',
        'alt': 'LandImage',
        'area': '3120',
        'price': '34000',
        'title': 'Commercial',
        'des': 'Lorem ipsum dolor sit amet, ipsum dolor sit amet, consectetur text link libero tempus congue consectetur text link libero tempus congue. '
    },
    {
        'proImg': 'https://creativelayers.net/themes/findhouse-html/images/blog/6.jpg',
        'alt': 'LandImage',
        'area': '3120',
        'price': '34000',
        'title': 'Commercial',
        'des': 'Lorem ipsum dolor sit amet, ipsum dolor sit amet, consectetur text link libero tempus congue consectetur text link libero tempus congue. '
    },
    {
        'proImg': 'https://creativelayers.net/themes/findhouse-html/images/about/1.jpg',
        'alt': 'LandImage',
        'area': '3120',
        'price': '34000',
        'title': 'Commercial',
        'des': 'Lorem ipsum dolor sit amet, ipsum dolor sit amet, consectetur text link libero tempus congue consectetur text link libero tempus congue. '
    },

]


const Headingsub = {
    color: `#0A356E`,
}

const Blog = () => {
    return (
        <>
            <Container className=''>
                <div className='text-3xl font-semibold text-[#323232] mb-6 mt-10 text-center' style={Headingsub}>Our Blogs</div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        LandDetails2 && LandDetails2.map((item, index) => (
                            <div className='' key={index}>
                                {/* shadow-2xl */}
                                <Card>
                                    <Link to="/listing">
                                        <CardMedia
                                            component="img"
                                            image={item.proImg}
                                            className='h-40'
                                            alt="Paella dish"
                                        />
                                    </Link>
                                    <CardContent>
                                        <div className='mb-2 flex item-center justify-between'>
                                            <Link to='/listing' className='font-semibold text-[#323232]'>Redfin Ranks the Most Competitive Neighborhoods of 2020</Link>
                                        </div>
                                        <div className='blgf flex items-center justify-between'>
                                            <ul className="bpg_meta flex mb-2 ">
                                                <li className="list-inline-item"><a href="#"><CalendarMonthIcon className='text-[#0A356E]'   style={{ fontSize: 16, marginRight:5, marginTop:-2, }}/></a></li>
                                                <li className="list-inline-item"><a href="#" style={{ fontSize: 14 }}>January 16, 2020</a></li>
                                            </ul>
                                            <ul className="bpg_meta flex mb-2">
                                                <li className="list-inline-item"><a href="#"><CommentIcon className='text-[#0A356E]'  style={{ fontSize: 16, marginRight:5, marginTop:-2, }}/></a></li>
                                                <li className="list-inline-item"><a href="#" style={{ fontSize: 14 }}>24 Comments</a></li>
                                            </ul>
                                        </div>
                                        <Typography variant="body2" color="text.primary">
                                            <p className='font-normal leading-6 text-justify text-[#525252]'> {item.des}</p>
                                        </Typography>
                                        <div className='mt-2'>
                                            <Button style={{ fontSize: 14,borderRadius:'0', color:'#0A356E' }} variant='text' endIcon={ <ArrowRightAltOutlinedIcon />} >Read more</Button>
                                        </div>
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

export default Blog;
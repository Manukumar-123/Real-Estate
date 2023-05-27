import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: 'https://picsum.photos/id/1018/1468/600/',
        thumbnail: 'https://picsum.photos/id/1018/1468/600/',
    },
    {
        original: 'https://picsum.photos/id/1015/1468/600/',
        thumbnail: 'https://picsum.photos/id/1015/1468/600/',
    },
    {
        original: 'https://picsum.photos/id/1019/1468/600/',
        thumbnail: 'https://picsum.photos/id/1019/1468/600/',
    },
    {
        original: 'https://picsum.photos/id/1018/1468/600/',
        thumbnail: 'https://picsum.photos/id/1019/1468/600/',
    },
    {
        original: 'https://picsum.photos/id/1015/1468/600/',
        thumbnail: 'https://picsum.photos/id/1015/1468/600/',
    },
    {
        original: 'https://picsum.photos/id/1019/1468/600/',
        thumbnail: 'https://picsum.photos/id/1019/1468/600/',
    },
    {
        original: 'https://picsum.photos/id/1018/1468/600/',
        thumbnail: 'https://picsum.photos/id/1018/1468/600/',
    },
    {
        original: 'https://picsum.photos/id/1015/1468/600/',
        thumbnail: 'https://picsum.photos/id/1015/1468/600/',
    },
    {
        original: 'https://picsum.photos/id/1019/1468/600/',
        thumbnail: 'https://picsum.photos/id/1019/1468/600/',
    },
    {
        original: 'https://picsum.photos/id/1018/1468/600/',
        thumbnail: 'https://picsum.photos/id/1018/1468/600/',
    },
    {
        original: 'https://picsum.photos/id/1015/1468/600/',
        thumbnail: 'https://picsum.photos/id/1015/1468/600/',
    },
    {
        original: 'https://picsum.photos/id/1019/1468/600/',
        thumbnail: 'https://picsum.photos/id/1019/1468/600/',
    },
    {
        original: 'https://picsum.photos/id/1018/1468/600/',
        thumbnail: 'https://picsum.photos/id/1018/1468/600/',
    },
    {
        original: 'https://picsum.photos/id/1015/1468/600/',
        thumbnail: 'https://picsum.photos/id/1015/1468/600/',
    },
    {
        original: 'https://picsum.photos/id/1019/1468/600/',
        thumbnail: 'https://picsum.photos/id/1019/1468/600/',
    },
];
const Details = () => {

    return (
        <>
            <div className='mb-6'>
                <ImageGallery 
                    showNav={false} 
                    fullscreen 
                    items={images} 
                />
            </div>
        </>
    )
}

export default Details;
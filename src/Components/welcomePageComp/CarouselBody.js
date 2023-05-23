import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import bodyImg from '../../Img/bodyImg.jpg'
import '../../UI/CarouselBody.css'



const imageData = [
    {
        label: "Women's Clothes",
        alt: "image1",
        url:
            "https://ae05.alicdn.com/kf/HTB1FfOILwDqK1RjSZSyq6yxEVXaW/Vintage-clothing-store-display-rack-wall-men-s-and-women-s-clothing-rack-display-rack-european.jpg"
    },
    {
        label: "Jewelry",
        alt: "image2",
        url:
            "https://media.istockphoto.com/id/1338646661/photo/gold-jewelry-diamond-rings-show-in-luxury-retail-store-window-display-showcase.jpg?s=612x612&w=0&k=20&c=9VOOm2CteX5ViJVQ58wW8Gl_nyHnrJraegUbIp8Au9I="
    },
    {
        label: "Men's Clothing",
        alt: "image3",
        url: "https://media.istockphoto.com/id/1293366109/photo/this-one-match-perfect-with-me.jpg?b=1&s=170667a&w=0&k=20&c=H5hgZid5Aji924X_NLc4t7zt1v5Qza_e33XI2VdgrlU="
    },
    {
        label: "Electronics",
        alt: "image4",
        url:
            "https://i.pinimg.com/736x/c2/cd/c0/c2cdc0d401b618e1d884b0e5dd64a49a.jpg"
    }
];

const renderSlides = imageData.map((image) => (

    <div key={image.alt}>
        <img src={image.url} alt={image.alt} className="img-positioning" />
        <p className="legend">{image.label}</p>

    </div>
));


function CarouselBody() {
    return (
        <div className="div-container-carousel">

            <Carousel
                showArrows={true}
                autoPlay={true}
                infiniteLoop={true}
                dynamicHeight={true}
                className="carousel-container div-carousel">
                {renderSlides}
            </Carousel>
        </div >
    )


}

export default CarouselBody
import bodyImg from '../../Img/bodyImg.jpg'
import '../../UI/BodyWelcomePage.css'
import CarouselBody from './CarouselBody'


function BodyWelcomePage() {
    return (
        <>
            <div>
                <img className='background-img' src={bodyImg} alt={bodyImg} />
            </div>
            <div className='carousel-wrapper'>
                <CarouselBody />
            </div>

        </>
    )

}

export default BodyWelcomePage
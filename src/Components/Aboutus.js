import Header from "./welcomePageComp/Header"
import Footer from "./Footer"
import '../UI/AboutUs.css'
import AboutUsLeftPic from '../Img/AboutUsLeftPic.jpg.jpg'
import AboutUsRightPic from '../Img/AboutUsRightPic.jpg.jpg'
import HowItStartedPic from '../Img/howItStarted.jpg.png'



function AboutUs() {
    return (
        <>


            <Header />


            <div className="about-us-section  ">
                <div className="about-us-header-container ">
                    <div className="about-us-header-title">
                        <h1 className="about-us-title">About Us</h1>
                    </div>
                    <div className="about-us-header-description">
                        <p className="about-us-description">Tempus amet, sit erat malesuada lorem purus dictum pretium, posuere sagittis ultricies enim massa nisi neque augue in condimentum diam commodo ornare.</p>
                    </div>
                </div>
            </div>

            <div className="about-imgs-text-section container-default">


                <div className="aboutUs-left-img">
                    <img className="left-pic-about-us" src={AboutUsLeftPic} alt="lazy"></img>
                </div>
                <div className="about-us-right-section">
                    <div className="right-section-wrapper">
                        <div className="about-us-right-img">
                            <img src={AboutUsRightPic}></img>

                        </div>
                        <div className="about-us-right-text">
                            <p className="founder-description">Eu egestas felis et viverra amet dictum ornare turpis gravida orci bibendum odio sit volutpat proin at enim ultrices dolor nullam tortor ornare cursus nibh sit adipiscing adipiscing enim erat nunc donec tellus, egestas commodo netus adipiscing ultrices at phasellus ut vitae nunc malesuada id nec suspen disse sit turpis mauris biben dum amet dignissim in sit duis pharetra vehicula eget suspen disse at vitae integer gravida sagittis.</p>
                            <a>HARVEY D. GEORGE</a>
                            <a>Founder of KAYUU</a>
                        </div>
                    </div>
                </div>


            </div>
            <div className="how-it-started-section container-default">
                <div className="how-it-started-wrapper">

                    <div className="how-it-started-title">
                        <h1>How it Started</h1>
                    </div>
                    <div className="how-it-started-description">
                        <p>
                            Faucibus etiam lacus sollicitudin sed amet, sit vitae lorem ornare egestas nisi, diam cursus non mattis etiam sodales vestibulum arcu a, aliquam at leo condimentum etiam dui eget arcu nunc, vivamus vel facilisi auctor aliquet eu mollis accumsan fermentum ipsum ornare viverra proin eleifend ultricies est, aliquet felis vivamus praesent.</p>
                    </div>
                </div>
            </div>

            <div className="started-section container-default">
                <div className="started-wrapper">
                    <div className="started-text">
                        <div className="started-text-title">
                            <h3>Vel mauris molestie dignissim</h3>
                        </div>
                        <div className="started-text-description">
                            <p>Praesent vel faucibus ligula. Sed sit amet ipsum eget velit aliquet faucibus. Maecenas et odio id turpis sollicitudin pulvinar sit amet vitae augue. Phasellus nec ultricies arcu. Quisque efficitur tellus sit amet bibendum molestie. Duis id egestas odio. Phasellus lacinia ex quis faucibus tempor. Sed feugia</p>
                        </div>
                    </div>
                    <div className="started-img-wrapper">
                        <img className="img-started" src={HowItStartedPic} alt="lazy"></img>
                    </div>

                </div>

            </div>



            <Footer />

        </>
    )
}

export default AboutUs
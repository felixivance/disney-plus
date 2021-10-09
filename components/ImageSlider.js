import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        className:'carousel'
      };

    return (
        <div className="pt-5">
            <Slider {...settings} className="overflow-visible" >
                {/* wrap */}
                <div className="cursor-pointer">
                    <img src="/images/slider-badging.jpg" className="w-[100%] h-[100%] rounded-md shadow-md border-4 border-solid border-transparent
                    hover:border-white hover:border transition duration-300" />
                </div>
                <div className="cursor-pointer">
                    <img src="/images/slider-badag.jpg" className="w-[100%] h-[100%] rounded-md shadow-md border-4 border-solid border-transparent
                    hover:border-white hover:border transition duration-300" />
                </div>
                
               
        </Slider>
        </div>
    )
}

export default ImageSlider

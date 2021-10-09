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
        autoplay:true
      };

    return (
        <div className="pt-5">
            <Slider {...settings}>
                {/* wrap */}
                <div>
                    <img src="/images/slider-badging.jpg" className="w-[100%] h-[100%] rounded-md shadow-md " />
                </div>
                <div>
                    <img src="/images/slider-badag.jpg" className="w-[100%] h-[100%] rounded-md" />
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
        </Slider>
        </div>
    )
}

export default ImageSlider

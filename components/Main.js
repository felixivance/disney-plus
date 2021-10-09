import ImageSlider from "./ImageSlider"
import Viewers from "./Viewers"

function Main() {
    return (
        <main className="homeContainer bg-home-img bg-center bg-cover bg-no-repeat bg-fixed inset-0 -z-1 ">
            <ImageSlider />

            <Viewers/>
        </main>
    )
}

export default Main

function Viewers() {
    return (
        // container
        <div className="mt-[30px] grid grid-cols-5 gap-3 pt-3 pb-3">
            <div className="border border-gray-500 hover:border-gray-300 rounded-md hover:scale-110 cursor-pointer transition duration-150">
                <img src="/images/viewers-disney.png" className="w-full h-full object-cover"/>
            </div>
            <div className="border border-gray-500 hover:border-gray-300 rounded-md hover:scale-110 cursor-pointer transition duration-150">
                <img src="/images/viewers-marvel.png" className="w-full h-full object-cover"/>
            </div>
            <div className="border border-gray-500 hover:border-gray-300 rounded-md hover:scale-110 cursor-pointer transition duration-150">
                <img src="/images/viewers-national.png" className="w-full h-full object-cover"/>
            </div>
            <div className="border border-gray-500 hover:border-gray-300 rounded-md hover:scale-110 cursor-pointer transition duration-150">
                <img src="/images/viewers-pixar.png" className="w-full h-full object-cover"/>
            </div>
            <div className="border border-gray-500 hover:border-gray-300 rounded-md hover:scale-110 cursor-pointer transition duration-150">
                <img src="/images/viewers-starwars.png" className="w-full h-full object-cover"/>
            </div>

        </div>
    )
}

export default Viewers

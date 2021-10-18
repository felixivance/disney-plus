function Movies() {
    return (
        // container
        <div className="space-y-2 pt-2">
            <h4>Recommended for you</h4>
            {/* content */}
            <div className="grid grid-cols-4 gap-3 pb-2 pl-1 pr-2">
                <div className="shadow-md hover:scale-105 transition-all duration-150 cursor-pointer">
                    <img  src="https://whatsondisneyplus.com/wp-content/uploads/2019/10/EG1tpkVVUAEU30q.jpg" className="rounded-sm" />
                </div>
                <div className="hover:scale-105 transition-all duration-150 cursor-pointer">
                    <img src="https://whatsondisneyplus.com/wp-content/uploads/2019/10/EG1tpkVVUAEU30q.jpg" className="rounded-sm" />
                </div>
                <div className="hover:scale-105 transition-all duration-150 cursor-pointer">
                    <img src="https://whatsondisneyplus.com/wp-content/uploads/2019/10/EG1tpkVVUAEU30q.jpg" className="rounded-sm " />
                </div>
                <div className="hover:scale-105 transition-all duration-150 cursor-pointer">
                    <img src="https://whatsondisneyplus.com/wp-content/uploads/2019/10/EG1tpkVVUAEU30q.jpg"  className="rounded-sm"/>
                </div>
               
            </div>
        </div>
    )
}

export default Movies

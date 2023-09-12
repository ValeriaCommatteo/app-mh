function CardCity ({ cityImage, cityName, cityDescription }) {

    return (
        <div className="card">
            <div className="card-image"src={cityImage} ></div>
            <div className="category"> Illustration </div>
            <div className="heading">{cityName}
                <div className="author"><span className="name">{cityDescription}</span></div>
            </div>
        </div>

    )
}

export default CardCity;
const Slider = ({array})=>{

    return(<>{array.map(item => {
            if(item.src){
                return(
                    <div className="slide-interior-container" key={item.id} >
                    <div className="inner-slide">
                        <div className="slide-text">
                    <h2>{item.altText}</h2>
                    <p>{item.caption}</p>
                        </div>
                    </div>
                    </div>
                )
            }else{
                return null
                }
            })}
        </>)
}

export default Slider
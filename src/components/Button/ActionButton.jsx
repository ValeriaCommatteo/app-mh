import Button from "./Button"

const ActionButton= ({toTop})=>{
    return(

        <section className="calltoaction-section">
            <div className="callToAction-modal">
                <div className="callToAction-button">   
                    <Button toTop={toTop} />
                </div>
            </div>
        </section>
    )
}

export default ActionButton
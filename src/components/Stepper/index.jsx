import React, { useState } from 'react'
import './style.css'

function Stepper() {

    let [step, setStep] = useState(1)

    let handlerBack = () => {
        if(step != 1){
            setStep(step - 1)
        }
    }

    let handlerNext = () => {
        if(step !=3){
            setStep(step +1)
        }
    }

    return (
        <>
            <div className='container-stepper'>
                {(step == 1 || step == 2 || step == 3) ? <>
                    {step == 1 && <p>Paso 1</p>}
                    {step == 2 && <p>Paso 2</p>}
                    {step == 3 && <p>Paso 3</p>}

                </>
                    : <>
                        <p>No existe</p>
                    </>

                }


            </div>
            <button onClick={()=> handlerBack()}>Back</button>
            <button onClick={()=> handlerNext()}>Next</button>
        </>
    )
}

export default Stepper
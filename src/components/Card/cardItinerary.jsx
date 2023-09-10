import React, { useState } from 'react'

function index(data) {

  const [view, setView] = useState(false)

  function viewMore() {
    setView(view => !view)
  }

  const billetes = []
  const precio = data?.precio
  for (let index = 0; index < precio; index++) {
    billetes.push(<span key={index}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"/>
        <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"/>
        <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"/>
        <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"/>
      </svg>
    </span>)    
  }
  return (
    <>
      <div className='containerDetailsItineraries'>
        <h3 className="itinerary__title">{data?.titulo}</h3>

        
        <div className="info__container">
          <div className="usr__container">
            <img className="userPhoto" src={data?.foto} alt="" />
            <p>{data?.nombre}</p>
          </div>

          <div className="sub__info__container">
          
            <div className="price__container">
              <p><strong>Price:</strong></p>
              <div className="billsContainer">
                {billetes}
              </div>
            </div>

            <div className="duration__container">
              <p><strong>Duration:</strong></p>
              <p> {data?.duracion} hours</p>
            </div>
            
            <div className="likes__container">
              <p><strong>Likes:</strong></p>
              <p className="likes__text">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                </svg>
                {data?.likes.length}
              </p>
            </div>
          
          </div>

        </div>

        <p className="hashtags___title"><strong>Tags:</strong></p>
        <div className="hashtags__container">
          {data?.hashtags.map((hashtag, index)=><p key={index} className="hashtag__item">{hashtag}</p>)}
        </div>
        
        <button className="viewMore-btn" onClick={viewMore}>
            {!view ? "View more" : "Close"}
            {!view ?
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
              </svg> 
             :
              <svg className='close__icon' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
             }          
        </button>

        <div className={`inConstruction__container ${view ? "viewMore" : ""}`}>

          <svg className='inConstruction__icon' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
              <path d="m9.97 4.88.953 3.811C10.159 8.878 9.14 9 8 9c-1.14 0-2.158-.122-2.923-.309L6.03 4.88C6.635 4.957 7.3 5 8 5s1.365-.043 1.97-.12zm-.245-.978L8.97.88C8.718-.13 7.282-.13 7.03.88L6.275 3.9C6.8 3.965 7.382 4 8 4c.618 0 1.2-.036 1.725-.098zm4.396 8.613a.5.5 0 0 1 .037.96l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1 .037-.96l2.391-.598.565-2.257c.862.212 1.964.339 3.165.339s2.303-.127 3.165-.339l.565 2.257 2.391.598z"/>
          </svg>
          <small className='inConstruction__text'>Site under construction</small>
        
        </div>
      
      </div>

    </> 
  )
}

export default index;
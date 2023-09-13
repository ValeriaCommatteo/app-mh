import { HiOutlineClock, HiOutlineThumbUp, HiOutlineUserCircle, HiOutlineHashtag, HiOutlineCurrencyDollar, HiCurrencyDollar } from "react-icons/hi";
import { Card } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import './cardStyle.css'

const CardItinerary = ({ itinerary }) => {
    return (
        <>
         <Container fluid>
            <div className="container plan" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="inner" style={{ height: '680px', width:'450px' }}>
                    <span className="pricing">
                        <span>{[...new Array(5)].map((money, index) => {
                            const isAffordable = index < itinerary.price;

                            const icon = isAffordable ? (
                                <span >
                                    <HiCurrencyDollar />
                                </span>
                            ) : (
                                <span >
                                    <HiOutlineCurrencyDollar />
                                </span>
                            );
                            return icon;
                        })} </span>
                    </span>
                    <div className="d-flex justify-content-center">
                    <Card.Img variant="top" className="img-fluid" src={itinerary.userImg} style={{ maxWidth: '350px', maxHeight:'350px', objectFit: 'cover' }}/>
                    </div>
                    <p className="title">{itinerary.name}</p>
                    <p className="info">{itinerary.activities}</p>

                    <ul className="features">
                        <li>
                            <span className="icon">
                                <HiOutlineUserCircle />
                            </span>
                            <span><strong>{itinerary.userName}</strong></span>
                        </li>
                        <li>
                            <span className="icon">
                                <HiOutlineThumbUp />
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>

                            </span>
                            <span><strong>{itinerary.likes}</strong></span>
                        </li>
                        <li>
                            <span className="icon">
                                <HiOutlineClock />
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>

                            </span>
                            <span><strong>{itinerary.duration + " hs"}</strong></span>
                        </li>
                        <li>
                            <span className="icon">
                            <HiOutlineHashtag />
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>

                            </span>
                             <span><strong>{itinerary.hashtags}</strong></span>
                        </li>
                    </ul>
                    <div className="action text-center mt-auto" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end'}}>
                        <li style={{ textAlign: 'center', marginTop:'15px' }}><a href="/cities" className="button">View More</a></li>
                    </div>
                    </div>
            </div>
            </Container>
        </>
    );
};

export default CardItinerary;
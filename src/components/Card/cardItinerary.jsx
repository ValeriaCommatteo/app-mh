import { HiOutlineClock, HiOutlineThumbUp, HiOutlineUserCircle, HiOutlineHashtag, HiOutlineCurrencyDollar, HiCurrencyDollar } from "react-icons/hi";
import { Card } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import './cardStyle.css'

const CardItinerary = ({ itinerary }) => {
    return (
        <>
         <Container fluid style={{ marginLeft:'100px', marginRight:'100px' }}>
            <div className="container container-fluid plan">
                <div className="inner">
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
                    <Card.Img variant="top"  src={itinerary.userImg} style={{ height: '350px', width: '350px', objectFit: 'cover' }} />
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
                    <div className="action">
                        <li><a href="/cities" className="button">Back to cities</a></li>
                    </div>
                    </div>
            </div>
            </Container>
        </>
    );
};

export default CardItinerary;
import ReactiveButton from 'reactive-button';
import Nav from 'react-bootstrap/Nav';
import ToggleButton from 'react-bootstrap/ToggleButton';

function ActionButton({ toTop }) {

    return (
        <>
            <Nav.Link to="/cities" className="call-to-action">
                <div className="col-auto">
                    <button className="btn btn-outline-light login" style={{ backgroundColor: '#210062' }}>View More</button>
                </div>
                <div className="click-here" onClick={toTop} />
            </Nav.Link>
        </>
    );
}

export default ActionButton;
import ReactiveButton from 'reactive-button';
import Nav from 'react-bootstrap/Nav';

function ActionButton({ toTop }) {

    return (
        <>
            <Nav.Link to="/cities" className="call-to-action">

                <div className="adventure-btn-ctn">
                    <ReactiveButton
                        color={"violet"}
                        type={'button'}
                        style={{ borderRadius: '5px' }}
                        outline={true}
                        shadow={true}
                        rounded={true}
                        size={'large'}
                        block={false}
                        buttonRef={null}
                        width={"10vw"}
                        height={"5vh"}
                        onClick={toTop}
                    />
                </div>

                <div className="click-here" onClick={toTop} />
            </Nav.Link>

        </>
    );
}

export default ActionButton;
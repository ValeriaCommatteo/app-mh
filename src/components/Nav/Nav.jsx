import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from '../../redux/actions/userActions';
import './style.css'

const NavbarMain = () => {
  const user = useSelector((store) => store.user.user);
  const dispatch = useDispatch();

  return (
    <header className="header" role="banner">
      <div>
        <div className="ajuste row align-items-center">
          <div className="col titulo">
            MyItinerary
          </div>
          <div className="col-auto ms-auto">
            <ul className="list-unstyled d-flex mb-0">
              <li className="me-3"><a href="/" className="home-link">Home</a></li>
              <li><a href="/cities">Cities</a></li>
            </ul>
          </div>
          {user ? (
            <div className="col-auto">
              <button className="btn btn-outline-light login" style={{ backgroundColor: '#210062' }} onClick={() => dispatch(logout())}>{" "}Login {" "}</button>
            </div>
          ) : (
            <><div className="col-auto">
              <Link to="/register" className="btn btn-outline-light" style={{ backgroundColor: '#210062' }}>Register</Link>
              <Link to="/signin" className="btn btn-outline-light" style={{ backgroundColor: '#210062' }}>Sign In</Link>
            </div>
            </>
          )}
          {/*  */}
        </div>
      </div>
    </header>
  );
}

export default NavbarMain;

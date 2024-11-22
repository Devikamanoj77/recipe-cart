import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchProduct } from '../redux/slices/productSlice';

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation(); 

  // Check if the current path starts with '/view' (for dynamic routes like '/view/1')
  const shouldShowSearch = !location.pathname.endsWith('/view');

  return (
    <>
      <Navbar style={{ zIndex: 1 }} className="bg-success w-100" fixed="top">
        <Container>
          <Link to={'/'} style={{ textDecoration: 'none' }}>
            <Navbar.Brand style={{ color: 'white' }} className="fs-5 fw-bolder">
              <i className="fa-solid fa-kitchen-set me-2"></i>
              Recipe Cart
            </Navbar.Brand>
          </Link>

          {/* Conditionally render the search input */}
          {shouldShowSearch && (
            <input
              style={{ width: '300px', marginLeft: '500px' }}
              className="rounded p-1 text-black"
              onChange={(e) => dispatch(searchProduct(e.target.value.toLowerCase()))}
              type="text"
              placeholder="Search Products here!"
            />
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

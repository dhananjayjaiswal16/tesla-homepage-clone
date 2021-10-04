import React, { useState } from 'react'
import styled from 'styled-components';

const Navbar = () => {
    const [hamNav, setHamNav] = useState(false);
    return (
        <Container>

            <a href='/'>
                <img src="/images/logo.svg" alt="" />
            </a>
            <Elements>
                <a href="#">Model S</a>
                <a href="#">Model Y</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Solar Roof</a>
                <a href="#">Solar Panel</a>
            </Elements>
            <RightElements>
                <a href="#">Shop</a>
                <a href="#">Account</a>
                <a href="#"><i onClick={() => setHamNav(true)} className="fas fa-bars"></i></a>
            </RightElements>
            <Hamburger show={hamNav}>
                <i onClick={() => setHamNav(false)} className="fas fa-times"></i>
                <li><a href="#">Model S</a></li>
                <li><a href="#">Model Y</a></li>
                <li><a href="#">Model 3</a></li>
                <li><a href="#">Model X</a></li>
                <li><a href="#">Solar Roof</a></li>
                <li><a href="#">Solar Panel</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade In</a></li>
                <li><a href="#">Test Drive</a></li>
                <li><a href="#">Powerwall</a></li>
                <li><a href="#">Commercial Energy</a></li>
                <li><a href="#">Charging</a></li>
                <li><a href="#">Support</a></li>
            </Hamburger>
        </Container>
    )
}

const Container = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    display: flex;
    top:0; right:0; left:0;
    align-items:center;
    padding: 10px 20px;
    z-index: 0;
`
const Elements = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    a{
        font-weight: bold;
        text-transform: uppercase;
        padding: 0 10px;
    }
    @media(max-width:1120px){
        display: none;
    }
`
const RightElements = styled.div`
    a{
        font-weight: bold;
        text-transform: uppercase;
        padding: 0 10px;
    }
`
const Hamburger = styled.div`
    position: fixed;
    top:0; bottom:0; right: 0;
    z-index: 100;
    background: #fff;
    width: 300px;
    list-style: none;
    text-align: start;
    padding: 25px;
    padding-top: 50px;
    transform: ${({ show }) => show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    i{
        float: right;
        margin-top: -34px;
        margin-right:6px;
        font-size: 18px;
        cursor: pointer;
    }
    li{
        font-weight: 500;
        margin-top: 35px;
    }
`

export default Navbar;

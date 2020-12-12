import React from 'react'
import { Redirect } from 'react-router-dom'
import Navigation from '../../components/navigation/navigation'
import Demo from '../../components/demonstration/demonstration'
import { Container } from 'react-bootstrap';
import logo from '../../img/logo.png';
import './_front.scss';

const Front = () => {

    return (
        <div>
            <Navigation />
            <Container>
                <img src={logo} className="logo"></img>
                <p className="description">The <span className="importantcolor">fastest</span> and <span className="importantcolor">easiest</span> way to read the news.</p>
                <br></br>
                <h1 className="signup" ><a href="/SignUp">Sign Up</a> | <a href="/login">Log In</a> </h1>
                <Demo />
            </Container>
        </div>
    )
}
export default Front;

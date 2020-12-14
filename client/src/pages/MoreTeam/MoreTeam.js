import React from "react";
import NavigationTeam from "../../components/navigationteam/navigationteam";
import { Container } from "react-bootstrap";
import logo from "../../img/logo.png";
import "./_moreteam.scss";
import oscar from "../../img/oscar.png";
import prev from "../../img/prevpage.png";

const OurTeam = () => {
    return (
        <div>
            <NavigationTeam />
            <Container>
                <img src={logo} className="logo" alt="NewsCycle"></img>
                <p className="description">The <span className="importantcolor">fastest</span> and <span className="importantcolor">easiest</span> way to read the news.</p>
                <br></br>
                <div>
                    <Container>
                        <h1>Our Team:</h1>
                        <img
                            src={oscar}
                            alt="Oscar"
                            className="teamleft"
                        />
                        <h3>Oscar Ledezma</h3>
                        <p className="teamlefttext">
                        Oscar is a Full Stack Web Developer with Bachelor of Science in Physics from Cal Poly Pomona, a Master of Science in Electrical Engineering from Cal State LA and a certificate in Full Stack Web Development from UCLA Extension. He currently has 5 years of Project Management & Controls Engineering experience. In addition he has strong project management, leadership and technical skills. Team player and collaborative. Adept at identifying problems within ladder logic and modifying to develop, maintain and optimize.
            </p>
                    </Container>
                    <a href="/team"><img src={prev} className="nextpage" alt="nextpage"></img></a>
                </div>
            </Container>
        </div>
    )
}
export default OurTeam;

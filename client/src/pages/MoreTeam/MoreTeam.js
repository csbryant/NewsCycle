import React from "react";
import NavigationTeam from "../../components/navigationteam/navigationteam";
import { Container } from "react-bootstrap";
import logo from "../../img/logo.png";
import "./_moreteam.scss";
import oscar from "../../img/oscar.png";
import pierre from "../../img/pierre.png"
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
                        Oscar is a Full Stack Web Developer with Bachelor of Science in Physics from Cal Poly Pomona, a Master of Science in Electrical Engineering from Cal State LA and a certificate in Full Stack Web Development from UCLA Extension. He currently has 5 years of Project Management & Controls Engineering experience.
            </p>
                    </Container>
                    <Container>
                        <img
                            src={pierre}
                            alt="Pierre"
                            className="teamright"
                        />
                        <h3 className="rightnames">Pierre Pariente</h3>
                        <p className="teamrighttext">Pierre is a Full Stack Developer, UX/UI Designer and Entrepreneur. Pierre is also the co-founder and lead designer of Tempso, an original classical music streaming App. He has a Master degree in Management from HEC Paris - a world-class business school - and a Bachelor degree in Philosophy from Paris IV La Sorbonne University.</p>
                    </Container>
                    <a href="/team"><img src={prev} className="nextpage" alt="nextpage"></img></a>
                </div>
            </Container>
        </div>
    )
}
export default OurTeam;

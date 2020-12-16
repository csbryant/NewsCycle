import React from "react";
import NavigationTeam from "../../components/navigationteam/navigationteam";
import { Container } from "react-bootstrap";
import logo from "../../img/logo.png";
import "./_ourteam.scss";
import stuart from "../../img/stuart.png";
import chris from "../../img/chris.png";
import pierre from "../../img/pierre.png";
import oscar from "../../img/oscar.png";

const OurTeam = () => {
    return (
        <div>
            <NavigationTeam />
            <Container>
                <img src={logo} className="logo" alt="NewsCycle"></img>
                <p className="description">The <span className="importantcolor">fastest</span> and <span className="importantcolor">easiest</span> way to read the news.</p>
                <div>
                    <Container>
                        <h1>Our Team:</h1>
                        <img
                            src={stuart}
                            alt="Stuart"
                            className="teamleft"
                        />
                        <h3>Stuart Wong</h3>
                        <p className="teamlefttext">
                            Stuart is a Full Stack Developer with a Bachelor’s degree in psychology,
                            educated at UCLA. Known as an extremely
                            hard worker fascinated by solving new problems, his aim is to
                            develop apps that are intuitive and user-friendly. Passionate about learning new skills,
                            his goal is to create innovative apps that push the boundaries of
                            the web development world.
            </p>
                    </Container>
                    <Container>
                        <img
                            src={chris}
                            alt="Chris"
                            className="teamright"
                        />
                        <h3 className="rightnames">Chris Bryant</h3>
                        <p className="teamrighttext">Chris is a front-end developer with a passion for creating interfaces that are innovative, yet familiar and simple to use. They believe in the importance of capturing a client’s voice and projecting it in every piece of code. They are currently serving on the board of directors for LAGaymers which is a non-profit organization that helps with LGBTQ+ diversity in the video game industry.</p>
                    </Container>
                    <Container>
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
                </div>
            </Container>
        </div>
    )
}
export default OurTeam;

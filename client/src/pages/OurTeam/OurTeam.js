import React from "react";
import NavigationTeam from "../../components/navigationteam/navigationteam";
import { Container } from "react-bootstrap";
import logo from "../../img/logo.png";
import "./_ourteam.scss";
import stuart from "../../img/stuart.png";
import chris from "../../img/chris.png";
import next from "../../img/nextpage.png"

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
                   <a href="/moreteam"><img src={next} className="nextpage" alt="nextpage"></img></a>
                </div>
            </Container>
        </div>
    )
}
export default OurTeam;

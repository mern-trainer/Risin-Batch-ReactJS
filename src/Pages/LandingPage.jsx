import { Fragment } from "react"
import NavBar from "../Components/NavBar"
import LearnMore from "../Components/LearnMore"
import "./LandingPage.css"

const LandingPage = () => {
    return <Fragment>
        <NavBar />
        <LearnMore />
        <div className="hero-container">
            <video width={"100%"} src="https://www.volvocars.com/files/cs/v3/assets/blt618dcb179a89242d/blt67d06c56ca6d4f5b/6572f9b3cc2f77000dc17180/homepage-hero-video-desktop-21x9.mp4?branch=prod_alias" muted autoPlay loop/>
            <div className="hero-text">
                <h4>New era for safety</h4>
                <h1 style={{marginTop: "13px"}}>Does How you feel<br/>affect how you drive?</h1>
                <button style={{marginTop: "30px"}}>Learn More</button>
            </div>
        </div>
    </Fragment>
}

export default LandingPage


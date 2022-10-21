import ShadabImg from "../assets/ShadabRaza.jpg";
import { Link } from "react-router-dom";

function About() {
    return (
        <div>
            <h1>About Us</h1>
            <img className="pic" src={ShadabImg} alt="Loading Animation" />
            <p className="para1" >Hi ! My Name is Shadab Raza, I am a Software Engineer (React Js Developer). I have Good Knowledge of Html, Css, JavaScript, React, Redux and have good knowledge of git and jeera Sofware. Working in Chetu India Pvt.Ltd (Noida.UP).</p>
        </div>
    )
}

export default About

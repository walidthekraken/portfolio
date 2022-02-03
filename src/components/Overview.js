import React from "react";
import { Project } from "./Project";
import WinRahiLogo from "../images/WinRahi/LogoWhite.png"

export const Overview = (props) => {

    return (
        <div ref={props.refPass} className="overview" id="overview">
            <h2>Overview</h2>
            <br></br>
            <div className="projectlist">
            <Project name="WinRahi" logo={WinRahiLogo} description="It's a car tracking and security system that consits of three mobile apps and a web app."></Project>
            <Project name="WinRahi" logo={WinRahiLogo} description="It's a car tracking and security system that consits of three mobile apps and a web app."></Project>
            <Project name="WinRahi" logo={WinRahiLogo} description="It's a car tracking and security system that consits of three mobile apps and a web app."></Project>
            <Project name="WinRahi" logo={WinRahiLogo} description="It's a car tracking and security system that consits of three mobile apps and a web app."></Project>
            <Project name="WinRahi" logo={WinRahiLogo} description="It's a car tracking and security system that consits of three mobile apps and a web app."></Project>
            
            </div>
        </div>
    );
}
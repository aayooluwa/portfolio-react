import React from "react"
import ReactDOM from "react-dom"


function Info() {
    return (
        <div className = "info">
            <img className = "image"  src="/Icon/Ayo.png"/>
        </div>
    )
}

function About() {
    return (
        <div className = "container">
            <div className = "description">
                <p className = "name">Akinola Ayooluwa</p>
                <p className = "position">Frontend Developer</p>
                <p className = "website">laurasmith.website</p>
            </div>
            <div className="buttons">
                <button className= "btn-one"><img src="./Icon/Icon.png"/>Email</button>
                <button className= "btn-two"><img src="./Icon/Vector.png"/>LinkedIn</button>
            </div>
            <div className = "header1">About</div>
            <div className = "content1">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</div>
            <div className = "header2">Interests</div>
            <div className = "content2" >Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</div>
        </div>
    )
}


function Socials() {
    return (
        <div className = "socials">
            <div className = "img1"><img src = "./Icon/Twitter.png"/></div>  
            <div className = "img2"><img src = "./Icon/Facebook.png"/></div>  
            <div className = "img3"><img src = "./Icon/Instagram.png"/></div>  
            <div className = "img4"><img src = "./Icon/GitHub.png"/></div>  
        </div>   
    )   
}


function Render() {
    return (
        <div>
            <Info/>
            <About/>
            <Socials/>
        </div>    
    )
}

ReactDOM.render(<Render/>, document.getElementById("root"))
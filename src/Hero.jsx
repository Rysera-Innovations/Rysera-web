import "./Hero.css"
import hero_pic from "./assets/hero_pic.png"

const Hero = () => {
    return ( 
        <div className="hero">
            <div className="hero_section">
                <div className="column1">
                    <img src={hero_pic} alt="Futuristic plant design" className="hero_pic"/>
                </div>
                <div className="column2">
                    <div className="col2_head">Empowering your Business</div>
                    <div className="col2_body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    <button className="talk">Let's Talk</button>
                </div>
            </div>
        </div>
     );
}
 
export default Hero;
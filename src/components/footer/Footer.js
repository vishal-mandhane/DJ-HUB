import "../footer/FooterStyles.css";
import navLogo from "../../assests/djhub.png";

const Footer = () => {
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>DJHUB</h1>
                    <p>Foodies Paradise</p>
                </div>
                
                {/* <div>
                    <a href="https://github.com/mahaveer82">
                        <i className="fa-brands fa-github-square"></i>
                    </a>
                    <a href="https://instagram.com/mahaveer.jn">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/developer-mahaveer-jain/">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div> */}
            </div>

            <div className="bottom">
                {/* <div>
                    <h4>Community</h4>
                    <a href="/">Github</a>
                    <a href="/">Issues</a>
                    <a href="/">Project</a>
                    <a href="/">Twitter</a>
                </div> */}
                <div>
                    <h4>Address</h4>
                    <p>4R4P+VW4, Dwarkadas J Sanghvi College of Engineering, Juhu, Mumbai, Maharashtra 400047</p>
                   
                    <h4>Contact Us</h4>
                    <p>Come to the Canteen 😉</p>
                </div>
                
                {/* <div>
                    <h4>Others</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                </div> */}
                                <div className='logo-img'>
          <img src={navLogo} alt=''/>

        </div>

            </div>
        </div>
    )
}

export default Footer;
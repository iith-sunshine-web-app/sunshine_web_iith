import './Footer.css';
import sunshineLogo from '../assets/logo.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="footerTop">
                {/* Left Column */}
                <div className="footerLeft">
                    <img src={sunshineLogo} alt="Sunshine Logo" className="logo"/>
                    <p className='logoName'>SUNSHINE</p>
                    <p>The counselling cell of IITH</p>
                    <div className="socialIconsPlaceholder">
                        {/* For Icons */}
                    </div>
                </div>

                {/* Right Column */}
                <div className="footerRight">
                    <p className="contact">Contact us anytime</p>
                    <p>Appointment</p>
                    <p>Team</p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footerBottom">
                <p>Copyright © 2023 Sunshine, IIT Hyderbad</p>
                <a href='#'>Developers Team</a>
            </div>
            
        </footer>
    );
}

export default Footer;

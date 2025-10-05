import sunshineLogo from '../assets/logo.png';

function Footer() {
    return (
        <footer className="bg-sunshine-deep-orange text-white py-8 px-16">
            <div className="flex justify-between pb-8 mb-4 ml-[15rem] mr-20">
                {/* Left Column */}
                <div className="text-center">
                    <img src={sunshineLogo} alt="Sunshine Logo" className="ml-8 h-20 mb-0" />
                    <p className='mt-0 text-sunshine-bright-orange font-bold'>SUNSHINE</p>
                    <p>The counselling cell of IITH</p>
                    <div className="">
                        {/* For Icons */}
                    </div>
                </div>

                {/* Right Column */}
                <div className="text-left">
                    <p className="text-2xl font-bold mb-4 mr-[14rem]">Contact us anytime</p>
                    <p className="text-[1.2rem] mb-2">Appointment</p>
                    <p className="text-[1.2rem] mb-2">Team</p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex justify-between ml-[12rem] text-[0.9rem]">
                <p>Copyright © 2023 Sunshine, IIT Hyderbad</p>
                <a href='#' className="text-white no-underline mr-[26rem]">Developers Team</a>
            </div>

        </footer>
    );
}

export default Footer;

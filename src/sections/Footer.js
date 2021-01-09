import React from 'react'
import Icon1 from '../assets/images/tick.PNG'
import Icon2 from '../assets/images/setting.PNG'
import Icon3 from '../assets/images/lock.PNG'
function Footer() {
    return (
        <div className="footer_container">
            <div className="top_footer">
                <div className="features">
                    <img src ={Icon1} alt=""/>&nbsp;&nbsp;
                    <p>Hands-on Projects</p>
                </div>
                <div className="features">
                <img src ={Icon2} alt=""/>&nbsp;&nbsp;
                <p>Support teams across the world</p>
                </div>
                <div className="features">
                <img src ={Icon3} alt=""/>&nbsp;&nbsp;
                <p>Safe & secure online payment</p>
                </div>
            </div><br/><br/><br/>
            <div className="mid_footer">
                <h1>elearning</h1>
            </div>
            <div className="bottom_footer">
                <div className="list_container">
                <div><b>WHO WE ARE</b></div><br/>
                <div>About</div>
                <div>Team</div>
                <div>Work with us</div>
                </div>
                <div className="list_container">
                <div><b>ELEARNING</b></div><br/>
                <div>About</div>
                <div>Leadership</div>
                <div>Careers</div>
                <div>Catalog</div>
                <div>Certificates</div>
                <div>MasterTrack™</div>
                <div>Certificates</div>
                <div>Degrees</div>
                <div>For Enterprise</div>
                <div>For Government</div>
                <div>For Campus</div>
                <div>Coronavirus</div>
                <div>Response</div>
                </div>
                <div className="list_container">
                <div><b>COMMUNITY</b></div><br/>
                <div>Learners</div>
                <div>Partners</div>
                <div>Developers</div>
                <div>Beta Testers</div>
                <div>Translators</div>
                <div>Blog</div>
                <div>Tech Blog</div>
                <div>Teaching Center</div>
                </div>
                <div className="list_container">
                <div><b>SUPPORT</b></div><br/>
                <div>Customizations</div>
                <div>Support Policy</div>
                <div>Contact</div>
                <div>COVID-19 Resources</div>
                <div>Privacy Notice for</div>
                </div>
                <div className="list_container">
                <div><b>MORE</b></div><br/>
                <div>Terms</div>
                <div>Privacy</div>
                <div>Help</div>
                <div>Accessibility</div>
                <div>Press</div>
                <div>Contact</div>
                <div>Directory</div>
                <div>Affiliates</div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer

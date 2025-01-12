import React from "react"
import './Footer.css'

const Footer = () => {
    return(
        <div className="footer">
            <div className="sb__footer section_padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <h4>For Business</h4>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                            <a href="healthplan">
                            <p>Healthplan</p>
                        </a>
                        <a href="/individual">
                            <p>Individual</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Resources</h4>
                        <a href="/resource">
                            <p>Resource Center</p>
                        </a> 
                            <a href="/resource">
                            <p>Testimonials</p>
                        </a> 
                            <a href="/resource">
                            <p>STV</p>
                        </a>
                        </div>
                    <div className="sb__footer-links_div">
                        <h4>Company</h4>   
                            <a href="/about">
                            <p>About</p>
                        </a>
                                <a href="/press">
                            <p>Press</p>
                        </a>
                            <a href="/contact">
                            <p>Contact</p>
                        </a>
                    </div>
                    <hr></hr>
                    <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            @{new Date().getFullYear()} Rekkr Industries. All rights reserved.
                        </p>
                    </div>
                    <div className="belowLinks">
                        <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                        <a href="/privacy"><div><p>Privacy</p></div></a>
                        <a href="/security"><div><p>Security</p></div></a>
                        <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
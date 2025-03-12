import React from 'react'
import { FooterWrapper, SocialMediaIconsWrapper } from '../wrappers/componentWrappers/footer'
import logo from '../assets/navbar/logo.png'
import { SiLinkedin, SiFacebook, SiThreads } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <div className="footer-row-1">
          <div className="first-column column">
            <img src={logo} alt="logo" />
            <p>Experience the power of efficient time tracking with TMSuit. Streamline your workflow, boost productivity, and achieve your goals effortlessly
            </p>
            <ul>
              <li>sales@tmsuit.com</li>
              <li>+1(844) 533-9911</li>
            </ul>
          </div>
          <div className="second-column column">
            <h2>Products</h2>
            <ul>
              <li>
                Remote Team
              </li>
              <li>
                Time Tracking
              </li>
              <li>
                Project Mgmt.
              </li>
              <li>
                Payroll
              </li>
              <li>
                HR Mgmt.
              </li>
              <li>
                Lead Mgmt.
              </li>
              <li>
                Task Mgmt.
              </li>
            </ul>
          </div>
          <div className="third-column column">
            <h2>
              By Industry
            </h2>

            <li>
              Attorneys
            </li>
            <li>
              Developers
            </li>
            <li>
              Freelancers
            </li>
            <li>
              Employees
            </li>
            <li>
              Remote Team
            </li>
            <li>
              Accountants
            </li>
            <li>
              CPA
            </li>
          </div>
          <div className="fourth-column column">
            <h2>
              Quick Links
            </h2>

            <li>
              Home
            </li>
            <li>
              About Us
            </li>
            <li>
              FAQ
            </li>
            <li>
              Blog
            </li>

            <li>
              Pricing
            </li>
            <li>
              Contact Us
            </li>
            <li>
              Sitemap
            </li>
          </div>
        </div>
        <div className="line-bar"></div>
        <div className="footer-row-2">
          <div className="copyrights">© Copyright 2025 Tmsuit | All Rights Reserved</div>
          <SocialMediaIcons/>         
        </div>
      </FooterWrapper>
    </>
  )
}

export default Footer

export const SocialMediaIcons = () => {
  return (
    <SocialMediaIconsWrapper>

      <div className='facebook icon-container'>
        <SiFacebook />
      </div>
      <div className='threads icon-container'>
        <SiThreads />
      </div>
      <div className='linkedin icon-container'>
        <SiLinkedin />
      </div>
    </SocialMediaIconsWrapper>
  )
}
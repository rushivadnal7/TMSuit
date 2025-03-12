import React from "react";
import StandardLayout from "../layout/StandardLayout";
import HeaderSection from "../components/HeaderSection";
import Clients from "../sections/Clients";
import styled from "styled-components";
import { SocialMediaIcons } from "../components/Footer";
import { IoCallOutline } from "react-icons/io5";
import Button from "../components/Button";
import ContactActionBanner from "../components/ContactActionBanner";

const Contact = () => {
    return (
        <>
            <StandardLayout>
                <HeaderSection title={"Contact us"} />
                <ContactWrapper>
                    <div className="left-container">
                        <div className="contact-details">
                            <div className="call-icon">
                                <IoCallOutline color="white" />
                            </div>
                            <div className="details">
                                <span>Contact</span>
                                <p>
                                    +1(844) 533-9911 <br /> sales@tmsuit.com
                                </p>
                            </div>
                        </div>
                        <span className="follow-us-text">Follow Us:</span>
                        <SocialMediaIcons />
                    </div>
                    <RightContainer>
                        <h1>Get in Touch</h1>
                        <h3>Ready to Get Started</h3>
                        <span>
                            Feel free to reach out to us by simply completing the form below.
                        </span>
                        <form action="">
                            <input type="text" placeholder="name" />
                            <input type="email" placeholder="email" />
                            <input type="text" placeholder="phone" />
                            <input type="text" placeholder="subject" />
                            <textarea placeholder="type comment"></textarea>
                            <Button text={"send message"} />
                        </form>
                    </RightContainer>
                </ContactWrapper>
                <Clients />
                <ContactActionBanner/>
            </StandardLayout>
        </>
    );
};

export default Contact;

const ContactWrapper = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: start;

  .left-container {
    width: 40%;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .follow-us-text {
      margin: 3rem 0;
      font-size: 2rem;
      font-weight: 700;
    }

    .contact-details {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 60%;
      height: 150px;
      margin: 2rem 0;
      border-radius: 10px;
      border: 0.5px solid gainsboro;

      .call-icon {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(
          to left,
          #180b5c 0%,
          #03258f 50.39%,
          #180b5c 100%
        );

        &:hover {
          box-shadow: 1px 2px 30px lightblue;
        }
      }

      .details {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #03258f;

        span {
          font-size: 1.7rem;
          font-weight: 600;
        }
        p {
          font-size: small;
        }
      }

      &:hover {
        box-shadow: 1px 2px 30px rgba(0, 0, 0, 0.04);
      }
    }
  }
`;

const RightContainer = styled.div`
  width: 40%;
  height: max-content;
  margin: 2rem;
  border-radius: 10px;
  border: 0.5px solid gainsboro;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  text-align: center;

  h1 {
    color: #3763eb;
  }
  h3 {
    color: black;
  }
  span {
    color: gray;
    font-size: small;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 2rem;
    padding: 20px 0;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    input {
      width: 40%;
      outline: none;
      border: 1px solid rgba(0, 0, 0, 0.1);
      padding: 1rem;
      border-radius: 30px;
      &:focus {
        border: 1px solid #3763eb;
      }
    }
    textArea {
      width: 100%;
      height: 150px;
      outline: none;
      border: 1px solid rgba(0, 0, 0, 0.1);
      padding: 1rem;
      border-radius: 10px;

      &:focus {
        border: 1px solid #3763eb;
      }
    }
    input::placeholder {
      color: gray;
      font-size: larger;
      text-transform: capitalize;
    }
    textArea::placeholder {
      color: gray;
      font-size: larger;
      text-transform: capitalize;
    }
  }
`;

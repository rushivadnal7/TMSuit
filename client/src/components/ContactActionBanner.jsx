import React from "react";
import styled from "styled-components";

const ContactActionBanner = () => {
  return (
    <ActionBanner>
      <div className="text">
        <h1>Subscribe</h1>
        <span>Subscribe Our Newsletter</span>
      </div>
      <div className="input">
        <input type="text" placeholder="your email" />
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
        </span>
      </div>
    </ActionBanner>
  );
};

export default ContactActionBanner;

const ActionBanner = styled.div`
  width: 100vw;
  padding: 4rem 6rem;
  background-image: url("https://www.tmsuit.com/assets/img/bg/common-bg.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: start;
  gap: 6rem;
  align-items: center;
  overflow: hidden;

  .text {
    color: white;
    span {
      font-size: 2.5rem;
    }
  }

  .input {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
    width: 400px;
    border-radius: 40px;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.1);

    input {
      outline: none;
      padding: 1rem;
      border: none;
      background-color: transparent;
    }
    input::placeholder {
      color: gray;
      font-size: larger;
      text-transform: capitalize;
    }

    span {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      padding: 1px;
      align-items: center;
      background-color: #3763eb;
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: white;
    }
  }
`;

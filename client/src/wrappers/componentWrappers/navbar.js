import styled from "styled-components";
//  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {

export const HamburgerMenu = styled.div`
  display: none;
  height: max-content;
  width: max-content;
  svg {
    width: 30px;
  }
  @media ${({ theme }) => theme.md} {
    display: block;
  }
`;

export const NavWrapper = styled.nav`
  width: 100vw;
  height: 5.5rem;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  z-index: 999;
  justify-content: space-around;
  align-items: center;
  background-color: white;

  .logo-container {
    width: auto;
    height: 70%;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .links-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    color:rgba(0, 0, 0, 0.6);

    .active{
      color: #3763eb;
    }

    .product-link {
      position: relative;

      svg {
        font-size: xx-small;
        width: 20px;
      }

      .dropdown-list {
        display: flex;
        flex-direction: column;
        /* gap: 10px; */
        opacity: 0;
        visibility: hidden;
        position: absolute;
        background-color: white;
        color: black;
        min-width: max-content;
        box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.2);
        /* padding: 10px; */
        left: 50%;
        top: 150%;
        transform: translateX(-50%);
        border-radius: 5px;
        transition: all 0.9s ease;
        cursor: pointer;

        .dropdown-link {
          padding: 10px;
          text-transform: capitalize;
        }

        .dropdown-link:hover {
          background-color: rgba(0, 0, 0, 0.1);
          color: #3763eb;
        }

        .dropdown-tittle {
          font-size: 0.9rem;
          font-weight: bold;
          color: black;
        }
      }

      .dropdown-list::before {
        content: "";
        position: absolute;
        top: -10px;
        left: 50%;
        transform: translateX(-50%);
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid white;
      }
    }

    .product-link:hover .dropdown-list {
      opacity: 1;
      visibility: visible;
    }

    .nav-link {
      list-style: none;
      margin: 0 1rem;
      font-size: medium;
      font-weight: 500;
    }

    li:hover {
      color: #3763eb;
      cursor: pointer;
    }
    .dropdown {
      display: flex;
      align-items: center;
    }
  }

  @media ${({ theme }) => theme.md} {
    position: relative;

    .links-container {
      width: 100%;
      /* max-height: 0px; */
      padding: 10px;
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 80%;
      left: 0%;
      gap: 10px;
      background-color: whitesmoke;
      max-height: 0px;
      visibility: hidden;
      overflow: hidden;
      transition: all 0.2s ease-in-out;

      .dropdown-list{
        position: static;
      }
    }
    
    .links-container.open{
      visibility: visible;
      max-height: 500px;
      overflow-y: scroll;
    }
    .links-container .close{
      visibility: hidden;
      max-height: 0px;
    }

    .logo-container {
      height: 50%;
    }
  }
`;

import styled from "styled-components";

const Wrapper = styled.nav`
  /* min-height: 120px; */
  display: flex;
  justify-content: center;
  align-items: center;
//   padding: 15px 60px 15px 40px;
  color: #312B2B;
  width: 100%;
  top: 0;
  z-index: 587;


  .nav-logo {
    display: flex;
    justify-content: start;
    margin-right:10px;

    @media (max-width: 991.98px) {
      top: 0;
    }
    img {
      width: 200px;
    }
  }
  .nav-link-container {
    display: flex;
    align-items: center;
    margin-top:20px;
    @media (max-width: 992px) {
      position: fixed;
      left: 0%;
       top: 0%;
      width: 100%;
      height: 0;
      overflow: hidden;
      background: #EAEAEA;
      transition: 0.5s ease-out;
      overflow-y: scroll;
    }
    .menu {
      list-style: none;
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 1.2rem;
      @media (max-width: 1192px) {
        column-gap: 0.3rem;
      }
      @media (max-width: 992px) {
        flex-direction: column;
        width: 100%;
            padding-right: 30px;
      }
      li {
        margin: 0 5px;
        position: relative;
        @media (max-width: 1199.98px) {
          margin: 0 8px;
        }
        @media (max-width: 991.98px) {
          margin: 0 0px;
          padding: 10px 0px;
        }
      }
      @media (max-width: 992px) {
        width: 100%;
      }
      a {
        font-family: Lato;
        font-size: 19px;
        font-weight: 600;
        line-height: 23px;
        letter-spacing: 0em;
        text-align: left;
        color: #312B2B;
        text-decoration: none;
        @media (max-width: 1192px) {
          font-size: 13px;
        }
        @media (max-width: 992px) {
          text-align: center;
          font-size: 15px;
        }
      }
    }

    .nav-button {
      left: 1.2rem;
       @media (max-width: 992px) {
        text-align: center;
        margin: 0 auto;
        left: 0;
      }
      a {
        transition: 0.5s ease-in-out;
        display: flex;
        color: white;
        align-items: center;
        @media (max-width: 991.98px) {
          width: 100%;
          justify-content: center;
          margin: 0 auto;
          position: relative;
          top: 40px;
          margin-bottom: 40px;
        }
        @media (max-width: 575.98px) {
          width: 50%;
          justify-content: center;
          margin: 0 auto;
        }
      }
    }
  }
  .mobile-menu {
    display: none;
    @media (max-width: 992px) {
      display: flex;
      button {
        border: none;
        color: var(--primary-color);
        font-size: 30px;
        background: transparent;
        z-index: 592;
      }
    }
  }
  .navLink a {
    transition: 0.5s ease-out;
  }
  .navLink a:hover {
    color: #00BBDC;
    transition: 0.5s ease-out;
  }
  .nav-button {
    margin: 0px !important;
  }

  .col-md-12 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
    text-transform: capitalize;
    font-size: 30px;
  }

}
  `;
export default Wrapper;

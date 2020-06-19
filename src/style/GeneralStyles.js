import styled from 'styled-components';

export const NavStyle = styled.div`
  .navbar {
    border-bottom-style: solid;
    border-bottom-width: thin;
    padding-bottom: 20px;
    align-items: flex-start;
    padding-left: 0;
    padding-right: 0;
    padding-top: 15px;
    
  }

  .navbar-rightside {
    text-align: right;
    width: 100%;
  }

  .navbar-nav .nav-link {
    color: black;
    font-size: 17px;
    padding-left: 0px;
    padding-right: 0px;
    margin-left: 12px;
    margin-right: 12px;

    &:hover {
      color: #9F9C9C;
    }
  }

  .navbar-nav .active.nav-link {
    color: black;
    border-bottom: 2px solid black;
  }

  .navbar-brand {
    color: black;
    font-weight: 700;
    font-size: 22px;
    display:table-caption;
    margin: 0;
  }

`;

export const AllStyles = styled.div`

  .text-center {
    text-align: center;
  }
  .italic-text {
    font-style: italic;
  }

  .bold-text {
    font-weight: bold;
  }

  .grey-text {
    color: #949191;
  }

  .underline-text-link {
    text-decoration: underline; 
    color: black;
    &:hover {
      text-decoration: none;
    }
  }

  .semi-bold-text {
    font-weight: 600;
  }

  .section-notes {
    font-size: 15px;
    margin-top: 2%;
  }

  .section-description {
    font-size: 18px;
  }

  .section-container {
    margin-top: 3%;
    margin-bottom: 5%;
  }

  .white-text {
    color: #FFFFFF;
  }

  .clear {
    clear:both;
  }

  .terminology-section {
    background-color: #EBEBEB;
    padding: 40px;
    border-radius: 15px;
    margin-bottom: 5%;
  }

  .terms-list {
    padding-top: 10px;
    padding-bottom: 25px;
  }

  .page-header {
    background-color: #FAF5C0;
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    margin-top: 0;
    
  }

  .header-title {
    padding-top: 13%;
    padding-bottom: 13%;
    font-size: 39px;
  }

  .header-title-sub {
    padding-top: 12%;
    padding-bottom: 1.5%;
    font-size: 39px;
  }

  .header-subtitle {
    padding-bottom: 12%;
    font-size: 18px;
  }
`;

export const FooterStyles = styled.div`
  .icon {
    height: 27px;
    width: 27px;
    float: left;
    margin-right: 10px;
  }

  .email-icon {
    height: 44px;
    width: 35px;
    margin-top: 10px;
  }

  .footer-container {
    background-color: #434343;
    padding-top: 5%;
    padding-bottom: 5%;
    padding-left: 12%;  
    padding-right: 13%; 
    display: flex; 
  }

  .footer-right {
    float: right:
    width: 50%;
    color: white;
    margin-left: 26%;
  }

  .footer-left {
    float: left:
    width: 50%;
    color: white;
  }

  .footer-slogan {
    margin-top: 6%;
  }

  .link-container {
    width: 100%;
    margin-top: 10%;
  }

  .link-text {
    color: #FFFFFF;
    text-decoration: none;
    float: right;
  }

`;


export const FilterStyles = styled.div`
  .react-datepicker__input-container {
    font-size: 14px;
  }
  
  .date-filter {
    width: 155px;
    float: right;
    margin-left: 50px;
  }

  .filter-title {
    font-size: 13px;
    color: grey;
    margin-bottom: 5px;
  }

  .filter-note {
    font-size: 13px;
    color: grey;
    margin-top: 10px;
  }

  .end-date {
    margin-bottom: 5px;
  }

  .date-filters-section {
    margin-top: 30px;
  }

  .date-filters-section .date-filter .react-datepicker-wrapper {
    border-radius: 500;
    box-shadow: 4px 5px 2px #9E9E9E;
    margin: 0;
  }


`
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
      color: #FBA130;
    }
  }

  .navbar-nav .active.nav-link {
    color: black;
    border-bottom: 2px solid black;

    &:hover {
      color: #FBA130;
      border-bottom: 2px solid #FBA130;
    }
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

  .text-left {
    text-align: left;
  }

  .float-left {
    float: left;
  }

  .float-right {
    float: right;
  }

  .item-center {
    display: inline-block;
  }

  .italic-text {
    font-style: italic;
  }

  .bold-text {
    font-weight: 700;
  }

  .grey-text {
    color: #949191;
  }

  .no-dec-link {
    text-decoration: none;
    color: black;
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

  .light-text {
    font-weight: 300;
  }

  .ultra-light-text {
    font-weight: 200;
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

  .term {
    float: left;
    border: #676767 1px solid;
    border-radius: 7px;
    padding-left: 9px;
    padding-right: 9px;
    padding-top: 2px;
    padding-bottom: 2px;
    margin-right: 20px;

    &:hover {
      background-color: #FBBC6C;
    }
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

  .header-container {
    padding-top: 13%;
    padding-bottom: 13%;
    font-size: 39px;
  }

  .triangle-down {
    width: 0; 
    height: 0; 
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-top: 40px solid #FAF5C0;
    margin-left: 46%;
    
  }

  .header-title {

    padding-top: 1%;
    padding-bottom: 1%;
    border-radius: 6px;
  }

  .header-title-sub {
    padding-top: 12%;
    padding-bottom: 1.5%;
    font-size: 39px;
  }

  .header-subtitle {
    // padding-bottom: 12%;
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

  .footer-middle {
    float: right;
    width: 50%;
    color: white;
    margin-left: 10%;
  }

  .footer-right {
    float: right;
    width: 30%;
  }

  .footer-left {
    float: left:
    width: 50%;
    color: white;
  }

  .footer-subtitle {
    border-left: #F9AA46 4px solid;
    padding-left: 3%;
  }

  .footer-slogan {
    margin-top: 4%;
  }

  .link-container {
    width: 100%;
    margin-top: 6%;
    
  }

  .link-text {
    color: #FFFFFF;
    text-decoration: none;
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

export const FeedbackStyles = styled.div`
  .feedback-container {
    margin-bottom: 8%;

  }

  .feedback-description {
    margin-top: 2%;
    font-size: 18px;
  }

  .tweet-container {
    border: #979797 solid 1px;
    width: 45%;
    padding-top: 1.2%;
    padding-bottom: 1.2%;
    padding-left: 2%;
    padding-right: 2%;
    border-radius: 9px;
    margin-right: 0;
    float: left;
  }

  .tweets-container {
    margin-top: 4%;
    margin-left: 10%;
    
  }

  .footer-notes {
    margin-left: 10%;
    margin-top: 4%;
    margin-right: 13%;
  }

  .icon {
    height: 22px;
    width: 22px;
    float: left;
    color: #979797;
    margin-right: 3px;
  }

  .tweet-region {
    float: left;
  }

  .tweet-date {
    float: left;
    padding-left: 10px;
  }

  .tweet {
    float: left;
    font-size: 15px;
  }

  .tweet-and-scoring-container {
    margin-bottom: 5.6%;
    overflow: hidden;
  }

  .scoring-container {
    margin-left: 9%;
    float: left;
    width: 40%;
    
  }

  .tweet-rating {
    float: left;
  }

  .tweet-score {
    float: left;
    margin-left: 4px;
  }

  .positive {
    color: #3D9A49;
  }

  .negative {
    color: #AC4747;
  }

  .neutral {
    color: #6C6C6C;
  }
  .rating-button {
    border-radius: 11px;
    margin-right: 4%;
  }

`
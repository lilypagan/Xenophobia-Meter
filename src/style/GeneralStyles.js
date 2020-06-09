import styled from 'styled-components';

export const NavStyle = styled.div`
  .navbar {
    border-bottom-style: solid;
    border-bottom-width: thin;
    padding-bottom: 20px;
    align-items: flex-start;
    padding-left: 0;
    padding-right: 0;
    margin-top: 15px;
    
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
  .italic-text {
    font-style: italic;
  }

  .bold-text {
    font-weight: bold;
  }

  .grey-text {
    color: #949191;
  }

  .underline-text {
    text-decoration: underline; 
  }

  .semi-bold-text {
    font-weight: 600;
  }

`;

export const FooterStyles = styled.div`
  .icon {
    height: 27px;
    width: 27px;
    margin: 10px;
    margin-bottom: 0px;
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
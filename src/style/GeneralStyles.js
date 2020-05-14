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
    flex-direction: column;
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
    font-size: 28px;
    display:table-caption;
    margin: 0;
  }

  .icon {
    height: 27px;
    width: 27px;
    margin: 10px;
    margin-bottom: 0px;
  }
`;



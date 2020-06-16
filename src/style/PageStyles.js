import styled from 'styled-components';

export const HomePageStyles = styled.div`

  .intro-section {
    padding-top: 6%;
    text-align: center;
    width: 60%;
    margin: auto;
    padding-bottom: 2%;
  }

  .intro-desc {
    font-size: 18px;
    font-weight: 600;
  }

  .context-ex {
    width: 50%;
    float:left;
    margin-top: 1.5%;
  }

  .example-tweet {
    border: 1px black solid;
    border-radius: 15px;
    padding: 20px;
    width: 90%; 
    height: 10%;
  }

  .twitter-handle {
    margin-bottom: 1px;
    font-weight: bold;
  }

`;

export const CountryPageStyle = styled.div`
  .country-intro {
    margin-top: 4%;
    margin-bottom: 6%;
  }
  
  .country-desc {
    font-size: 20px;
    margin-top: 2%;
  }

  .country-stat-container {
    width: 50%;
    display: inline-block;
    text-align: center;
    margin-top: 5%;
  }

  .section-container .country-stat-container .stats-num {
    font-family:'Cabin' !important;
    color: #C70202;
    font-size: 60px;
    margin-bottom:0;

  }
`;
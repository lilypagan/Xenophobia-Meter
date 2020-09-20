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

  .map-explainer-container {
    background-color: #FAF5C0;
    padding-top: 5%;
    padding-bottom: 5%;
    padding-left: 14%;  
    padding-right: 13%;  
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    margin-bottom: 8%;
    display: inline-block;
  }

  .map-explainer-title {
    padding-bottom: 10%;
    border-bottom: black 4px solid;
  }

  .map-explainer-main {
    width: 100%;
    height: 100%;
    display: inline-block;
  }

  .map-explainer-left {
    width: 30%;
    float:left;
    display: flex;
  }

  .map-explainer-right {
    width: 65%;
    float:right;
    margin-left: 5%;
    display:flex;
    font-weight: light;
  }

  .to-resources-container {
    padding-top: 3%;
    border-top: #F9AA46 6px solid;
    margin-bottom: 8%;
   
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
    color: #C70202;
    font-size: 60px;
    margin-bottom:0;

  }
`;

export const BackgroundPageStyle = styled.div`

  .background-section-center {
    text-align: center;
    padding: 4%;
    margin-bottom: 1%;
  }

  .section-left {
    display:flex;
    float:left;
    width: 15%;
  }
  .section-right {
    display: flex;
    margin-left: 25%;
    width: 76.5%;

  }

  .section-title {
    padding-bottom: 10%;
    border-bottom: #F9AA46 5px solid;
  }

  .section-text {
    font-size: 18px;
    color: #434343;
  }

  .background-section {
    margin-bottom: 7%;
    
  }

  .twitter-link {
    color: black;
    text-decoration: underline;
  }

`;

export const ResourcesPageStyle = styled.div `
  .resource-section {
    margin-top: 3%;
    margin-bottom: 3%;
    display: block;
  }

  .rep-button {
    &:hover {
      color: black;
    }
    box-shadow: 4px 4px grey;
  }

  .action-item {
    margin-bottom: 5%;
    // border-bottom: #FBA130 solid 2px;
    padding-bottom: 2%;
  }


  .org-container {
    background-color: #FAC888;
    border-radius: 10px;
    padding: 3%;
    margin-bottom: 7%;
    float: left;
    margin-right: 3%;
    margin-left: 3%;
    box-shadow: 4px 4px grey;
    align-items: center;

    &:hover {
      background-color: #FBA130;
    }
  }

  .org-grid {
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: stretch;
  }

  .article-container {
    border: solid 1px #434343;
    border-radius: 12px;
    padding: 2%;
    margin-top: 3%;
    box-shadow: 4px 4px grey;

    &:hover {
      background-color: #eeeeee;
    }
  }

  .article-title {
    color: #DD7C01;
    margin-bottom: 0.5%;
    font-size: 20px;
  }

  .article-teaser {
    margin-top: 3%;
    color: #434343
  }

  .article-link {
    text-decoration: none; 
    color: black;
    
  }

  .full-article-title {
    color: #434343;

  }

  .full-article-header {
    padding-top: 12%;
    padding-bottom: 5%;
  }

  .full-article-date {
    color: #706E6E;
  }

  .article-body-container {
    margin-top: 7%;
    margin-bottom: 5%;
  }
`

export const MethodologyPageStyles = styled.div `
  .section-left {
    display:flex;
    float:left;
    width: 15%;
  }
  .section-right {
    display: flex;
    margin-left: 25%;
    width: 68%;

  }

  .section-title {
    padding-bottom: 10%;
    border-bottom: #F9AA46 5px solid;
  }

  .section-text {
    font-size: 18px;
    color: #434343;
  }

  .methodology-section {
    margin-bottom: 7%;
    margin-top: 5%;
  }
`
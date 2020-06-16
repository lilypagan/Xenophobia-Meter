import styled from 'styled-components';

export const WorldMapStyle = styled.div`
  .countries {
    &:hover {
      fill: grey;
    }
  }

  .legend-text {
    font-size: 10px;
    font-weight: 500;
  }

  .world-map-container {
    margin-top: 4.5%;
  }

  .tooltip-container {
    height: 44px;
    border-left: grey 3px solid;
    padding-left: 8px;
  }

  .country-name {
    margin-bottom: 0px;
    font-weight: 700;
  }
`

export const CountryLineGraphStyle = styled.div`
  .line-graph-countainer {
    width: 100%;
    height: 100%;
  }

`
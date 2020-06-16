import React, { Component } from 'react';
import worlddata from '../data/worldMap';
import { geoEquirectangular, geoPath } from 'd3-geo';
import { WorldMapStyle } from '../style/VisStyles';
import testerdata from '../data/testerWorldMap.js';
import MonthlyFilter from '../components/MonthlyFilter';
import ToolTip from '../components/ToolTip';

class WorldMap extends Component {

   constructor(props) {
      super(props);
      this.state = {
         ShowTooltip: false,
         CurrentCountry: "",
         CurrentPercentage: ""
      }
   }

   findColor(country_name) {
      const info_dict = testerdata["regions"][country_name]
      if (info_dict===undefined) {
         return "#CECECE"
      } else {
         const percentColors = [
            { pct: 0.0, color: { r: 252, g: 235, b: 109 } },
            { pct: 0.5, color: { r: 226, g: 129, b: 5 } },
            { pct: 1.0, color: { r: 170, g: 0, b: 0 } } ];
         const pct = info_dict["xeno tweet count"]/info_dict["total tweet count"]
         for (var i = 1; i < percentColors.length - 1; i++) {
            if (pct < percentColors[i].pct) {
                break;
            }
         }
         var lower = percentColors[i - 1];
         var upper = percentColors[i];
         var range = upper.pct - lower.pct;
         var rangePct = (pct - lower.pct) / range;
         var pctLower = 1 - rangePct;
         var pctUpper = rangePct;
         var color = {
               r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
               g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
               b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
         };
         return 'rgb(' + [color.r, color.g, color.b].join(',') + ')';
         }
   }

   addToolTip(country_name, proportion_neg) {
      this.setState({
         ShowTooltip: true,
         CurrentCountry: country_name,
         CurrentPercentage: proportion_neg
      })
   }

   removeToolTip() {
      this.setState({
            ShowTooltip: false,
            CurrentCountry: "",
            CurrentPercentage: ""
         })
   }

   render() {
      var toolTipDiv = "";
      if (this.state.ShowTooltip == false) {
         toolTipDiv = ""
      } else {

         toolTipDiv = <ToolTip countryName={this.state.CurrentCountry} percentage={this.state.CurrentPercentage*100}></ToolTip>
      }
      const projection = geoEquirectangular()
      const pathGenerator = geoPath().projection(projection)
      const countries = worlddata.features
         .map((d,i) => {
            return testerdata["regions"][d.properties.name] === undefined ?
               <path
               fill={this.findColor(d.properties.name)}
               key={'path' + i}
               stroke="#CECECE"
               d={pathGenerator(d)}
               className='countries'
               onMouseOver = {() => testerdata["regions"][d.properties.name] === undefined ? this.addToolTip(d.properties.name, 0): this.addToolTip(d.properties.name, testerdata["regions"][d.properties.name]["xeno tweet count"]/testerdata["regions"][d.properties.name]["total tweet count"])}
               onMouseOut={() => this.removeToolTip()}
               />
            :
               <a href={"country/"+d.properties.name}><path
               fill={this.findColor(d.properties.name)}
               key={'path' + i}
               stroke="#CECECE"
               d={pathGenerator(d)}
               className='countries'
               onMouseOver = {() => testerdata["regions"][d.properties.name] === undefined ? this.addToolTip(d.properties.name, 0): this.addToolTip(d.properties.name, testerdata["regions"][d.properties.name]["xeno tweet count"]/testerdata["regions"][d.properties.name]["total tweet count"])}
               onMouseOut={() => this.removeToolTip()}
               /></a>
            }
         )
      return (
         <WorldMapStyle>
            <MonthlyFilter />
            <div className="world-map-container">
               <div>{toolTipDiv}</div>
               <svg className="world-map" height="100%" width="100%" viewBox={"30 0 930 450"}>
               {countries}

                  <svg width="1000" height="500">
                     <defs>
                        <linearGradient x1="100%" y1="50%" x2="0%" y2="50%" id="mapLegend1">
                           <stop stopColor="#000000" offset="0%"></stop>
                           <stop stopColor="#FFF977" offset="83.5884713%"></stop>
                           <stop stopColor="#FFFFFF" offset="100%"></stop>
                        </linearGradient>
                        <linearGradient id="mapLegend2" x1="100%" y1="50%" x2="0%" y2="50%">
                           <stop stopColor="#AA0000" offset="0%"></stop>
                           <stop stopColor="#E28105" offset="50%"></stop>
                           <stop stopColor="#FCEB6D" offset="100%"></stop>
                        </linearGradient>
                     </defs>
                     <g id="legend" >
                        <text className="legend-text">
                           <tspan x="105" y="225">100%</tspan>
                           <tspan x="105" y="300">50%</tspan>
                           <tspan x="105" y="370">0%</tspan>
                        </text>
                        <g id="rectangle" transform="rotate(-90.000000) translate(-300,0) scale(.75 .9)">
                           <use fill="#mapLegend1"/>
                           <path stroke="#979797" strokeWidth="1" d="M108,96.5 L-92,96.5 C-92.6903559,96.5 -93.3153559,96.779822 -93.767767,97.232233 C-94.220178,97.6846441 -94.5,98.3096441 -94.5,99 L-94.5,108 C-94.5,108.690356 -94.220178,109.315356 -93.767767,109.767767 C-93.3153559,110.220178 -92.6903559,110.5 -92,110.5 L108,110.5 C108.690356,110.5 109.315356,110.220178 109.767767,109.767767 C110.220178,109.315356 110.5,108.690356 110.5,108 L110.5,99 C110.5,98.3096441 110.220178,97.6846441 109.767767,97.232233 C109.315356,96.779822 108.690356,96.5 108,96.5 Z" strokeLinejoin="square" fill="url(#mapLegend2)"></path>
                        </g>
                     </g>
                  </svg>
               </svg>
            
            </div>
         </WorldMapStyle>
         
      )};
   }
   
export default WorldMap;

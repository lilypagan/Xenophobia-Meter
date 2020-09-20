import React from 'react';
import { AllStyles, FilterStyles } from '../style/GeneralStyles';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import testerdata2 from '../data/testerWorldMapAPI.json';
 

class MonthlyFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date("2020/01/01"),
      endDate: new Date("2020/07/01"),
    }
  }
  
  setStartDate(date) {
    this.setState({startDate: date})
    const startDate = moment(this.state.startDate).format('YYYYMMDD')
    const endDate = moment(this.state.endDate).format('YYYYMMDD')
    this.props.onSelectMonth(testerdata2); //TODO: delete once data flowing
    fetch(`/api/retrieve/world/${startDate}/${endDate}`).then(response =>
      response.json().then(data => {
        this.props.onSelectMonth(testerdata2); //TODO: change to data once data flowing
        console.log(testerdata2)

      })
    );
  }

  setEndDate(date) {
    this.setState({endDate: date})
    const startDate = moment(this.state.startDate).format('YYYYMMDD')
    const endDate = moment(this.state.endDate).format('YYYYMMDD')
    this.props.onSelectMonth(testerdata2); //TODO: delete once data flowing
    fetch(`/api/retrieve/world/${startDate}/${endDate}`).then(response =>
      response.json().then(data => {
        this.props.onSelectMonth(testerdata2); //TODO: change to data once data flowing
        console.log(testerdata2)
      })
    );
  }

  render() {
    return(

      <AllStyles>
        <FilterStyles>
          <div className="date-filters-section">
            <div className="date-filter">
              <p className="filter-title">End Month</p>
              <DatePicker
                selected={this.state.endDate}
                onChange={date => this.setEndDate(date)}
                selectsEnd
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                minDate={this.state.startDate}
                // showMonthYearPicker
                dateFormat="MMMM dd, yyyy"
                showDisabledMonthNavigation
                showPopperArrow={false}
                // disabled
              />
              
            </div>
            <div className="date-filter">
              <p className="filter-title">Start Month</p>
              <DatePicker
                selected={this.state.startDate}
                onChange={date => this.setStartDate(date)}
                selectsStart
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                // showMonthYearPicker
                dateFormat="MMMM dd, yyyy"
                showDisabledMonthNavigation
                showPopperArrow={false}
                // disabled
              />
            </div>
            
          </div>
        </FilterStyles>
       
      </AllStyles>
    )
  }
}

export default MonthlyFilter;
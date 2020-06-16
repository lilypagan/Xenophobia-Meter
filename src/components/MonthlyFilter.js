import React from 'react';
import { AllStyles, FilterStyles } from '../style/GeneralStyles';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

class MonthlyFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date("2020/01/01"),
      endDate: new Date("2020/06/01")
    }
  }

  setStartDate(date) {
    this.setState({startDate: date})
  }

  setEndDate(date) {
    this.setState({endDate: date})
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
                showMonthYearPicker
                dateFormat="MMMM yyyy"
                showDisabledMonthNavigation
                showPopperArrow={false}
                disabled
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
                showMonthYearPicker
                dateFormat="MMMM yyyy"
                showDisabledMonthNavigation
                showPopperArrow={false}
                disabled
              />
              <p className="filter-note">(coming soon)</p>
            </div>
            
          </div>
        </FilterStyles>
       
      </AllStyles>
    )
  }
}

export default MonthlyFilter;
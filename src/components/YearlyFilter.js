import React from 'react';
import { AllStyles, FilterStyles } from '../style/GeneralStyles';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

class YearlyFilter extends React.Component {
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
              <p className="filter-title">Year Selected</p>
              <DatePicker
                selected={this.state.endDate}
                onChange={date => this.setEndDate(date)}
                selectsEnd
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                minDate={this.state.startDate}
                showYearPicker
                disabled
      dateFormat="yyyy"
                showDisabledMonthNavigation
                showPopperArrow={false}
              />
              <br></br>
              <p className="filter-note">(coming soon)</p>
            </div>
            
          </div>
        </FilterStyles>
       
      </AllStyles>
    )
  }
}

export default YearlyFilter;
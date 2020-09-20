import React from 'react';
import { AllStyles, FilterStyles } from '../style/GeneralStyles';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import testerdata2 from '../data/testerCountryGraphAPI.json';

class YearlyFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: new Date("2020/01/01"),
    }
  }

  setYear(date) {
    const year = moment(date).format('YYYY')
    this.setState({year: date})
    // console.log(year)
    // this.props.onSelectYear(testerdata2); //TODO: delte once data flowing
    // fetch(`/api/retrieve/${this.props.countryName}/${year}`).then(response =>
    //   response.json().then(data => {
    //     this.props.onSelectYear(testerdata2); //TODO: change to data once data flowing
    //     console.log(testerdata2)

    //   })
    // );
  }

  render() {
    return(

      <AllStyles>
        <FilterStyles>
          <div className="date-filters-section">
            <div className="date-filter">
              <p className="filter-title">Year Selected</p>
              <DatePicker
                selected={this.state.year}
                onChange={year => this.setYear(year)}
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
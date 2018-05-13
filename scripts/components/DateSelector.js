import React from 'react'
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { START_DATE, END_DATE, HORIZONTAL_ORIENTATION, ANCHOR_LEFT } from '../../node_modules/react-dates/src/constants';
import moment from "moment";

export default class DateSelector extends React.Component{
  constructor(props){
    super(props);
    this.searchHandler = this.searchHandler.bind(this);
    this.checkRange = this.checkRange.bind(this);
    this.state = {
      focusedInput: null,
      startDate: null,
      endDate: null,
    }
  }
  searchHandler(e){
    e.preventDefault()
    const result = this.props.input.filter((obj) => {
      const objMoment = new moment(obj.date + " 12:00")
      return objMoment.isSameOrAfter(this.state.startDate) && objMoment.isSameOrBefore(this.state.endDate)
    })
    this.props.filterViewState(result)
  }
  checkRange(day){
    if(this.props.input.length > 0){
      const momentObjArr = this.props.input.map((obj) => new moment(obj.date + " 12:00"))
      const latestMoment = momentObjArr.reduce((moment, heldMoment) => {
        return moment.isSameOrAfter(heldMoment) ? moment : heldMoment;
      } )
      const earliestMoment = momentObjArr.reduce((moment, heldMoment) => {
        return moment.isSameOrBefore(heldMoment) ? moment : heldMoment;
      })
      if (day.isSameOrAfter(earliestMoment) && day.isSameOrBefore(latestMoment)){
        return false
      }
      else { return true }
    }
  }

  render(){
    return (
      <div>
        <DateRangePicker
          startDate={this.state.startDate}
          startDateId="start"
          endDate={this.state.endDate}
          endDateId="end"
          onDatesChange={({ startDate, endDate }) => this.setState({startDate, endDate})}
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput => this.setState({ focusedInput: focusedInput})}
          isDayHighlighted={(day) => day.isAfter(this.state.startDate) && day.isBefore(this.state.endDate)}
          keepOpenOnDateSelect={false}
          reopenPickerOnClearDates= {false}
          isOutsideRange={(day) => this.checkRange(day)}
        />
      <button className="dateRangeButton button" onClick={this.searchHandler}>Search By Date</button>
      </div>
    )
  }
}

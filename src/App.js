import React, { Component } from 'react';

import Calender from './Calender'
import { weeks } from './utils/utils';

class App extends Component {

  constructor(props) {
    super(props)

    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()

    this.state = {
      year,
      month
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        this.decreaseMonth()
      } else if (e.key === 'ArrowRight') {
        this.increaseMonth()
      }
    })
  }

  increaseMonth = () => {
    const { year, month } = this.state
    if (month >= 11) {
      this.setState({
        year: year + 1,
        month: 0
      })
    } else {
      this.setState({
        month: month + 1
      })
    }
  }
  decreaseMonth = () => {
    const { year, month } = this.state
    if (month <= 0) {
      this.setState({
        year: year - 1,
        month: 11
      })
    } else {
      this.setState({
        month: month - 1
      })
    }
  }

  render() {
    const { year, month } = this.state
    return (
      <div className="App">
        <div className="yearmonth">
          <div className="prevMonth" onClick={this.decreaseMonth}>{'<'}</div>
          {year}.{month + 1}
          <div className="nextMonth" onClick={this.increaseMonth}>{'>'}</div>
        </div>
        <div className="week">
          {weeks.map(week => (
            <div key={week} className="week-item">{week}</div>
          ))}
        </div>
        <Calender year={year} month={month} />
      </div>
    );
  }
}

export default App;

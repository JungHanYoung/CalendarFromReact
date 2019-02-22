import React, { Component } from 'react';

import Calender from './Calender'
import { weeks } from './utils/utils';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="yearmonth">2018.12</div>
        <div className="week">
          {weeks.map(week => (
            <div key={week} className="week-item">{week}</div>
          ))}
        </div>
        <Calender startWeek="Sat" />
      </div>
    );
  }
}

export default App;

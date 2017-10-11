import React from 'react';
import AppStore from '../stores/AppStore';
import Page from './Page'
import { DateRange, defaultRanges } from 'react-date-range';
import moment from "moment";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentWillReceiveProps(nextProps) {}

  render() {
    let specialDays = [
      {
        date: moment()
  }
    ];
    let theme = {
      Calendar       : {
        // background   : 'transparent',
        // color        : '#95a5a6',
        // width : "320px",
      },

      DateRange      : {
        background   : '#ff0000'
      },
      DayInRange     : {
        // background   : '#9b59b6 content-box',
        color        : '#fff',
        // padding: "7px 0px 7px 0px",
        // height: "auto",
      },
      DayActive    : {
        background   : '#00ff00',
        boxShadow    : 'none',
        // padding: "5px 0px 5px 0px",
        // height: "auto",
      },
      DaySelected    : {
        background   : '#0000ff',
        borderRadius: "50%",
        // padding: "5px 0px 5px 0px",
        //   height: "auto",
      },
      Day            : {
        // padding: "10px 0px 10px 0px",
        // height: "calc(100% + 20px)",
        // lineHeight: "calc(100% + 10px)",
      },};
    return (
      <div>
      <h1>Hello {this.props.name}</h1>
        <div  className="container">
          <div className="row panel-header">
            sss
          </div>
          <div className="row">
            <div className="cell-left">
              <img className="vertical-dot" src="/img/vertical-dot.png"/>
            </div>
            {/*<div className="cell-right">*/}
              <div className="cell-right-first">2-1</div>
            <span className="horizontal-dot">dddd</span>
              <div className="cell-right-second">2-2</div>
            {/*</div>*/}
          </div>
          <div className="row calender">
            <DateRange
              onInit={this.handleSelect}
              onChange={this.handleSelect}
              // endDate={moment().add(3, "days")}
              specialDays={specialDays}
              calendars={1}
              theme={theme}
            />
          </div>
          <div className="row">
            <button>send</button>
          </div>
        </div>
      </div>
      );
  }

  handleSelect(range){
    try {
      var a = document.querySelectorAll(".is-selected")[0];
      var b = document.querySelectorAll(".is-selected")[1];
      a.style.borderRadius = "50% 0 0 50%";
      b.style.borderRadius = "0 50% 50% 0";
    } catch (e) {
      console.log(e);
      document.querySelector(".is-selected").style.borderRadius = "50%";
    }


    console.log(range);
    // An object with two keys,
    // 'startDate' and 'endDate' which are Momentjs objects.
  }
}

export default App;

import React, { Component } from "react";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [
        { id: 1, value: "topic", label: "all time" },
        { id: 2, value: "2016", label: "last 5 years" },
        { id: 3, value: "2018", label: "last year" },
        { id: 4, value: "2019", label: "last month" }
      ]
    };
  }
  render() {
    const { onChildDateChange } = this.props;
    const dates = this.state.dates.map(item => {
      return (
        <div key={item.id} className='date-filter'>
          <input
            id={"radio" + item.id}
            type='radio'
            name='option'
            value={item.value}
            onClick={() => onChildDateChange(item.value)}
          />
          <label htmlFor={"radio" + item.id}>{item.label}</label>
        </div>
      );
    });
    return (
      <div className='sidebar'>
        <div className='accordion'>
          <div className='card'>
            <div className='card-header' id='heading1'>
              <button
                className='btn btn-tertiary'
                type='button'
                data-toggle='collapse'
                data-target='#collapse1'
                aria-expanded='false'
                aria-controls='collapse1'
              >
                Dates
              </button>
            </div>

            <div
              id='collapse1'
              className='collapse show'
              aria-labelledby='heading1'
              data-parent='#accordionExample'
            >
              <div className='card-body'>{dates}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

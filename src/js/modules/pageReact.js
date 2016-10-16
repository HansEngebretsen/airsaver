import React from 'react';
import ReactDOM from 'react-dom';
/*
  Main Card Element
  <Card />
*/
class Card extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      active: false,
      cards: {}
    }
  };
  handleClick() {
    this.setState({
      active: this.state.active === true ? false : true
    });
  };
  render() {
  var data = this.props.data;
  console.log(this.props.data);
  var expanded = this.state.active === true ? 'card active' : 'card';
  return (
    <article className={expanded} onClick={this.handleClick}>
    <header>
      <section className="days">
        <h4>{ data.header.work_days } <span className="small">work days</span></h4><br />
        <h4>{ data.header.vaca_days } <span className="small">vaca days</span></h4>
      </section>
      <section className="main-route">
        <div className="route-wrapper">
          <h1 className="codes">{data.header.start} <svg clipRule="evenodd" fillRule="evenodd" height="30" width="30" imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <g stroke="#CF6A5E">
              <path fill="none" strokeLinecap="round" strokeWidth="30" d="M300 390H55"/>
              <path d="M98 325c-9 10 10 16 25 6l311-156c24-17 35-25 42-50 2-15-46-11-78-7-15 1-34 10-42 16l-56 35 1-1-169-31c-14-3-24-5-37-1-10 5-18 10-27 18l122 72c4 3 5 7 1 9l-44 27-75-15c-10-2-18-4-28 0-8 4-14 9-20 15l74 63z" fill="#CF6A5E" strokeLinejoin="round" strokeWidth="10"/>
            </g></svg> {data.header.end}</h1>
            <h2 className="price">
            <span className="total"><sup>$</sup>{data.header.total}&nbsp;</span>
            <span className="breakout"><span className="breakout-dollars"><sup>$</sup>{data.header.breakout_dollars}</span> <span className="breakout-points"><sup>p</sup>{data.header.breakout_points}</span></span>
            </h2>
          </div>
        </section>
      </header>
      <div className="details">
        {data.routes.map(function(route, i) { 
          return <Routes key={i} routes={ route }/>
         })}
      </div>
    </article>
  );
  }
};
/*
  Main Routes Element
  <Routes />
*/

const Routes = (props) => {
  let d = props.routes;
  return (
    <div className="route">
      <span className="start">{d.start.place} <br /><span className="icons-wrap"><span className="time">{d.start.time}</span><br /><span className="cali">{d.start.day}</span></span></span>
      <span className="line"></span>
      <span className="end">{d.end.place} <br /><span className="icons-wrap"><span className="time">{d.end.time}</span><br /><span className="cali">{d.end.day}</span></span></span>
    </div>
  );
}
/*
  Add Form Element
  <AddForm />
*/
const AddForm = React.createClass({
  getInitialState: function() {
    return {
      reveal: true
    };
  },
  revealForm: function() {
    this.setState({
      reveal: this.state.reveal === true ? false : true
    });
  },
  
  newForm: function(){ // Render the new card thing from the form
    let t = this.refs;
    var data = {
      header: {
        work_days: t.headerWork_days.value,
        vaca_days: t.headerVaca_days.value,
        start: t.headerStart.value,
        end: t.headerEnd.value,
        total: t.headerTotal.value,
        breakout_dollars: t.headerBreakout_dollars.value,
        breakout_points: t.headerBreakout_points.value
      },
      routes: [
       {
        start: {
          place: t.routes_startPlace.value,
          time: t.routes_startTime.value,
          day: t.routes_startDay.value
        },
        end: {
          place: t.routes_endPlace.value,
          time: t.routes_endTime.value,
          day: t.routes_endDay.value
        }
       }
      ]
    }
    this.props.addCard(data);
  },
  
  generateOpts: function(times){ // Function for looping option values
    let opts = [];
    for(let i = 1; i < (times + 1); i++) {
      opts.push(<option value={i}>{i}</option>);
    }
    return opts;
  },
  
  render: function(){ // Render the button and form input
    let revealed = this.state.active === true ? 'add-form active' : 'add-form';
    return (
      <div className={revealed} id="form">
        <button href="#" className="addbtn" id="addbtn" onClick={this.revealForm}>
        <span className="plus">+</span></button>
        <form action="" className="trip-form" onSubmit={this.newForm}>
          <h1>Add a new trip</h1>
          <fieldset>
            <legend>Main Route:</legend>
            <div className="form-field multi-input">
              <label htmlFor="main">Main Route</label>
              <input type="text" name="header-start" id="header-start" placeholder="from"/>
              <input type="text "name="header-end" placeholder="to"/>
            </div>
            <div className="form-field multi-input daysout">
              <label htmlFor="main">Days Out</label>
              <select name="header-work_days">
                { this.generateOpts(14) }
              </select>
              <select name="header-vaca_days">
                { this.generateOpts(14) }
              </select>
            </div>
            <div className="form-field multi-input price-input">
              <label htmlFor="main">price</label>
              <input type="text" name="header-total" className="price" placeholder="total"/>
              <input type="text" name="header-breakout_dollars" className="price" placeholder="breakout dollars"/>
              <input type="text" name="header-breakout_points" className="price" placeholder="breakout points"/>
            </div>
          </fieldset>
          <fieldset className="subroute" id="subroute">
            <legend>Sub-Route:</legend>
            <div className="form-field multi-input">
              <label htmlFor="main">Start</label>
              <input type="text" name="place" placeholder="place"/>
              <input type="text" name="time" placeholder="time"/>
              <input type="text" name="day" placeholder="day"/>
            </div>
            <div className="form-field multi-input">
              <label htmlFor="main">end</label>
              <input type="text" name="place" placeholder="place"/>
              <input type="text" name="time" placeholder="time"/>
              <input type="text" name="day" placeholder="day"/>
            </div>
          </fieldset>
          <button className="add-route" id="addroute">Add a sub-route</button>
          <div className="form-field submit-field">
            <input type="submit" value="Add Trip"/>
          </div>
        </form>
      </div>
    )
  }
});
// Render form: // <Card data={post} key={i} />
/*
  Go get that Data, main function
  <GetData />
*/
const GetData = React.createClass({
  getInitialState: function() {
    return {
      data: []
    };
  },

  componentDidMount: function() {
    var th = this;
    $.ajax({
      url: '//codepen.io/hans/pen/WxqOyX.js', // url to the actual JSON
      complete: function(xhr) {
        var response = jQuery.parseJSON(xhr.responseText);
        th.setState({
          data: response
        });
      }
    });
  }, // Get the data and update UI on the first time

  addCard : function(data) {
    var timestamp = (new Date()).getTime();
    // update the state object
    this.state.data.push(data);
    // set the state
    this.setState({ data : this.state.posts });
  },

  render: function() {
    var dat = this.state.data.posts || [];
    return (
      <div>
        {dat.map(function(post, i) {
          return <Card data={post} key={i}/>
        })}
        <AddForm />
       </div>
    )
  }
});
/*
  Render it into the dom
  Let's do it
*/
module.exports = GetData;
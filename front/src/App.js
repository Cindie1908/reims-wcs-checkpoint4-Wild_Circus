import React from 'react';
import './App.css';
import axios from 'axios';
import HeaderBar from './components/HeaderBar.js';
import HomeImage from './components/HomeImage.js';
import Sidebar from './components/Sidebar';
import CarouselComponent from './components/carousel.component.js';
import ArtistCard from './components/ArtistCard';
import OurWilders from './components/OurWilders';
import OurPerforms from './components/OurPerforms';
import DateShow from './components/DateShow';
import Perform from './components/Perform';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      actartists:null,
      acts:null,
      customers:null,
      artists:[],
      performances:null,
      events:[],
      currentPerform:0,
    }
    this.nextPerform = this.nextPerform.bind(this)
  }

  nextPerform() {
    this.setState(prevState => {
      return {
        currentPerform:
          (prevState.currentPerform + 1) % prevState.performances.length
      }
    })
  }

    componentDidMount() {
      axios
        .get('http://localhost:8000/api/events')
        .then(response => response.data)
        .then(data => {
          this.setState({
            events: data
          })
        })
      axios
        .get('http://localhost:8000/api/performances')
        .then(response => response.data)
        .then(data => {
          this.setState({
            performances: data
          })
        })
      axios
        .get('http://localhost:8000/api/artists')
        .then(response => response.data)
        .then(data => {
          this.setState({
            artists: data
          })
        })
      axios
        .get('http://localhost:8000/api/customers')
        .then(response => response.data)
        .then(data => {
          this.setState({
            customers: data
          })
        })
      axios
        .get('http://localhost:8000/api/acts')
        .then(response => response.data)
        .then(data => {
          this.setState({
            acts: data
          })
        })
      axios
        .get('http://localhost:8000/api/actartists')
        .then(response => response.data)
        .then(data => {
          this.setState({
            actartists: data
          })
        })
    }
  render(){
  return (
    <Router>
      <Route exact path="/">
        <div>
          <Sidebar/>
          <HeaderBar/>
          <HomeImage/>
        </div>
      </Route>
      <Route exact path="/show">
        <div>
          <Sidebar/>
          <HeaderBar/>
          {this.state.performances && (
            <Perform 
              key={this.state.performances.id}
              perform={this.state.performances[this.state.currentPerform]}
              nextPerform={this.nextPerform}
            />
          )}
        </div>
      </Route>
      <Route exact path="/pictures">
        <div>
          <Sidebar/>
          <HeaderBar/>
          <OurPerforms/>
          <div className="espace">
              <CarouselComponent/>
          </div>
        </div>
      </Route>
      <Route exact path="/artists">
        <div>
          <Sidebar/>
          <HeaderBar/>
          <OurWilders/>
            <div className="FlexArtist">
              {this.state.artists.map(artist=>(
                <ArtistCard {...artist}/>
              ))}
            </div>
        </div>
      </Route>
      <Route exact path="/dates">
        <div>
          <Sidebar/>
          <HeaderBar/>
            {this.state.events.map(event=>(
            <DateShow {...event}/>
        ))}
        </div>
      </Route>
    </Router>
  )}
  }

export default App;

{/*<div>
      <Sidebar/>
      <HeaderBar/>
      <HomeImage/>
      <OurPerforms/>
      <div className="espace">
          <CarouselComponent/>
      </div>
      <OurWilders/>
      <div className="FlexArtist">
        {this.state.artists.map(artist=>(
          <ArtistCard {...artist}/>
        ))}
      </div>
      {this.state.events.map(event=>(
          <DateShow {...event}/>
      ))}
    </div>
  );*/}

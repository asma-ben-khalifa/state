import './App.css';
import React from 'react';
import image from "./ph.jpg" ;
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

  state = {
    person : 
   {fullName : "asma" ,
    bio : "hello asma" ,
    imgSrc : image,
    profession : "ingénieur",
   
    } ,
     shows : true,
     date : new Date(),
    };
    handleShowPerson = () => {
      this.setState({
        ...this.state,
        shows: !this.state.shows
      });
    };

    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
  
  render() {
    return (
     
      <>
      {this.state.shows && (
      <div className='div0'>
        <div className='div1'>
        <h1>{this.state.person.fullName}</h1>
          <h1>{this.state.person.bio}</h1>
          <h1>{this.state.person.profession}</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>

          </div>
        <div>
          <img src={this.state.person.imgSrc} alt="asma"></img>
          </div>
        </div>
      )}
        <Button variant="secondary"  onClick={this.handleShowPerson} className='btm'>click here</Button>{' '}



     
    </>
  );
}
}




export default App;

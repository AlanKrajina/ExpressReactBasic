import React, { useState, useEffect } from 'react';
import './boxers.css';


const Boxers = () => {

  const [boxers,setBoxers] = useState([])

  useEffect(() => {
    fetch('/api/boxers')
      .then(res => res.json())
      .then(boxersAll => setBoxers(boxersAll));
    }, []);


  return (
    <div>
    <h2>Boxers</h2>
    <ul>
      {boxers.map(boxer => 
        <li key={boxer.id}>{boxer.firstName} {boxer.lastName}</li>
      )}
    </ul>
  </div>    
  )
}

export default Boxers;


/*
class Boxers extends Component {
  constructor() {
    super();
    this.state = {
      boxers: []
    };
  }

  componentDidMount() {
    fetch('/api/boxers')
      .then(res => res.json())
      .then(boxers => this.setState({boxers}, () => console.log('Boxers fetched...', boxers)));
  }

  render() {
    return (
      <div>
        <h2>Boxers</h2>
        <ul>
        {this.state.boxers.map(boxer => 
          <li key={boxer.id}>{boxer.firstName} {boxer.lastName}</li>
        )}
        </ul>
      </div>
    );
  }
}

export default Boxers;
*/

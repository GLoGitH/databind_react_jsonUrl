import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component 
{
  constructor(props)
  {
    super(props);
    this.state = { data: [ ] };
  }

  componentDidMount()
  {
    fetch('https://facebook.github.io/react-native/movies.json')
     .then((Response)=>Response.json())
     .then((findresponse)=>
    {
      console.log(findresponse);
      console.log(findresponse.movies);
      this.setState( {data: findresponse.movies})
    })
  }

  render() 
  {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <table border="1">
           <tbody>

            {
              this.state.data.map( (dynamicData, key) =>
              { 
                return(
                  <tr key={key}>
                    <td>{key}</td>
                    <td>{dynamicData.title}</td>
                    <td>{dynamicData.releaseYear}</td>
                  </tr>
                );
              })
            }
           </tbody>
          </table>
      </div>
    );
  }
}

export default App;

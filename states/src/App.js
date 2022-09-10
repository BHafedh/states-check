import React from "react";
import './App.css';
import Compteur from "./Compteur";

class App extends React.Component {
  state = {
    fullName: ' GoMyCode',
    bio: 'My name is Hafedh . I m a web developer student',
    imgSrc: 'https://www.i4net.tn/wp-content/uploads/2021/07/12-Websites-You-Should-Check-Out-to-Learn-Web-Development-Fast.png',
    profession: 'Web Developer',
    show: false
  }

  handleShow = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.show ? (
          <>
            <h1>{this.state.fullName}</h1>
            <h1>{this.state.bio}</h1>
            <img src={this.state.imgSrc} alt="failed" />
            <h1>{this.state.profession}</h1>
          </>
        ) : (
          <h1> the profile</h1>
        )
        }
        <button onClick={this.handleShow}>{!this.state.show ? "show" : "hide"}</button>
        <>
        <h1> the count</h1>
        <Compteur />
        </>
      </div>
    );
  }
}

export default App;

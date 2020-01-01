import React from 'react';
import Logo from './components/Logo';
import './App.scss';



class App extends React.Component {
  
  container = React.createRef();
  state = {
    open: false,
  };
  handleButtonClick = () => {
    this.setState(state => {
      return {
        open: !state.open,
      };
    });
  };
 
  handleClickOutside = event => {
    if (this.container.current && !this.container.current.contains(event.target)) {
      this.setState({
        open: false,
      });
    }
  };
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
}
componentWillUnmount() {
  document.removeEventListener("mousedown", this.handleClickOutside);
}
  render() {
    return (
      <div className="App">
        <div className="container" ref={this.container}>
            <button type="button" className="button" onClick={this.handleButtonClick}>
            <Logo ></Logo>
            </button>
            {this.state.open && (
            <div className="dropdown">
              <ul>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
                <li>Option 4</li>
              </ul>
            </div>
          )}
          </div>
      </div>
    );
  }
}

export default App;

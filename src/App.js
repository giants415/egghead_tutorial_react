import React from 'react';

class App extends React.Component {
  render(){
    return (
      <div>
        <h1>Hello world</h1>
        <b>bold</b>
      </div>
    ) /* Wrap all content for the return in () otherwise error will occur */
  }
};

// const App = () => <h1>Hello stateless</h1>
//^^^ stateless react ///

export default App

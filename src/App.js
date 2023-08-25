import React from 'react';
// import ReactDOM from "react-dom";
import Header from './components/header';
import Section from './components/section';
import Footer from './components/footer';
// ReactDOM.render(<Game />, document.getElementById("root"));

// https://tech.groww.in/maintain-code-consistency-using-eslint-prettier-husky-and-lint-staged-a657083d461b

function App() {
  return (
    <div className='myApp'>
      <Header />
      <Section />
      <Footer />
    </div>
  );
}

export default App;

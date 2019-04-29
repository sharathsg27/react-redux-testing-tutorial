import React from 'react';
import './app.scss';
import Header from "./components/header";
import HeadLine from "./components/headline";

function App() {
  return (
    <div className="App">
        <Header/>
        <section className="main">
            <HeadLine header={'Posts'} desc={'Click the button to render Posts'}/>
        </section>
    </div>
  );
}

export default App;

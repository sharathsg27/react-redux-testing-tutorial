import React from 'react';
import './app.scss';
import Header from "./components/header";
import HeadLine from "./components/headline";

const user = {
    firstName: 'Sharath',
    lastName: 'Subramanya',
    isDeveloper: true,
    age: 44,
    skills: ['javascript', 'react', 'redux']
};

function App() {
  return (
    <div className="App">
        <Header/>
        <section className="main">
            <HeadLine header={'Posts'} desc={'Click the button to render Posts'} user={user}/>
        </section>
    </div>
  );
}

export default App;

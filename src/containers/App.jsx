import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';

function App() {
  const [ robots, setRobots ] = useState([]);
  const [ searchField, setSearchField ] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setRobots(users));
        console.log(count);
  }, [count])

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  }

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  if (!robots.length) {
    return <h1>Loading</h1>
  } else {
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <button onClick={()=>setCount(count + 1)}>Click</button>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots}/>
          </ErrorBoundry>
        </Scroll>
      </div>
    )
  }
}

export default App;
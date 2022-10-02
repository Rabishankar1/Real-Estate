import './App.css';
import Navbar from "./components/navbar/navbar";
import Filters from '../src/components/filter-box/filters';
import Content from '../src/components/content/content';
import data from "./data";
import { useState } from 'react';
// import Search from './components/Search/search';
import Favorites from './components/Favorites/favorites';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Select from 'react-select';



function App() {
  const [state, toggleState] = useState(false);

  const [filtersData, updateFiltersData] = useState([...data]);

  const [loc, updateLocation] = useState('');

  function transition(toggle) {
    toggleState(toggle)
  }
  // console.log(filtersData, 'filtersData')
  function location(e) {
    updateLocation(e)
  }

  function getLocationFromChild(location) {
    updateLocation(location);
    selectRef.select.clearValue();
  }


  const options = [
    { value: 'New York', label: 'New York' },
    { value: 'San Andreas', label: 'San Andreas' },
    { value: 'Hawaii', label: 'Hawaii' },
    { value: 'Bangalore', label: 'Bangalore' },
    { value: 'Cuttack', label: 'Cuttack' },
  ]




  let selectRef = null;

  return (

    <div className="App">
      <Navbar transition={(toggle) => transition(toggle)} />

      <Routes>

        <Route path='/' element={
          <div>
            {state && <div className='space'></div>}
            <main>
              <header>
                <div className="heading">Search properties to rent</div>
                <div style={{width: '300px'}}>
                <Select
                  ref={ref => {
                    selectRef = ref;
                  }}
                  onChange={e => location(e)}
                  options={options}
                  placeholder="Search With search Bar" />
                </div>
              </header>
              <Filters
                location={loc}
                data={data}
                updateData={(data) => updateFiltersData(data)}
                updateLocation={location => getLocationFromChild(location)}
              />
              <div className="grid-container">
                {filtersData.map(i => {
                  return (
                    <div className="grid-item">
                      <Content data={i} />
                    </div>)
                })}
              </div>
              <br />
            </main>
          </div>
        } />

        <Route path='/favorites' element={<Favorites state={state} />} />

      </Routes>

      <footer>Created by Rabishankar Panigrahi</footer>
    </div>

  );
}

export default App;

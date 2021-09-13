import './styles/App.css';

import React, { useState } from 'react';

import { useAppDispatch, useAppSelector } from './app/hooks';
import logo from './assets/logo.svg';
import { addAmount, decrement, increment, reset } from './features/counterSlice';
import { useFetchDogsQuery } from './features/dogsApiSlice';

function App() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);

  const [numberOfDogsToFetch, setNumberOfDogsToFetch] = useState(5);
  const { data = [], isFetching } = useFetchDogsQuery(numberOfDogsToFetch);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ width: "20ch" }}>
          Redux Toolkit Counter and Dog Breed Fetcher!
        </p>
        <div>
          <p>count is: {count}</p>
          <button type="button" onClick={() => dispatch(increment())}>
            increment
          </button>
          <button type="button" onClick={() => dispatch(decrement())}>
            decrement
          </button>
          <button type="button" onClick={() => dispatch(addAmount(5))}>
            add 5
          </button>
          <button type="button" onClick={() => dispatch(reset())}>
            reset
          </button>
        </div>
        <div>
          <p>Select number of dogs to fetch</p>
          <select
            name="fetch"
            id=""
            onChange={(e) => setNumberOfDogsToFetch(Number(e.target.value))}
          >
            <option value="">Select fetch number</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>
        <div style={{ padding: "0.25rem" }}>
          <p>Number of dogs fetched: {data.length}</p>
          {isFetching ? (
            <p>Loading...</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Dog</th>
                </tr>
              </thead>
              <tbody>
                {data.map((breed) => (
                  <tr key={breed.id}>
                    <td>{breed.name}</td>
                    <td>
                      <img src={breed.image.url} alt="" width={180} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import { employee } from './components/data.js';
import './App.css';

const Exam = () => {
  const lists = employee.map((a) => {
    return (
      <tr>
        <td>{a.id}</td>
        <td>{a.name}</td>
        <td>{a.username}</td>
        <td>{a.email}</td>
        <td>{a.address.zipcode}</td>
        <td>{a.address.geo.lat}</td>
      </tr>
    );
  });
  return (<>{lists}</>);
};

function App() {
  return (
    <table border={1} >
      <tr>
        <th>id</th>
        <th>name</th>
        <th>username</th>
        <th>email</th>
        <th>zipcode</th>
        <th>geo lat</th>
      </tr>
      <Exam />
    </table>

  );
}

export default App;

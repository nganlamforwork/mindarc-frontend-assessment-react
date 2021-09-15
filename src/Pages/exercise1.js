import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Header from './Components1/header';
import CardLibrary from './Components1/cardLibrary';
import { makeStyles } from '@material-ui/core/styles';
import './exercise1.css';

function Exercise1() {
  return (
    <div className='mainExercise1'>
      <Header /> 
      <CardLibrary />
    </div>
  );
}
export default Exercise1;
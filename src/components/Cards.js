import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import '../App.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out some of my work!</h1>
      <div className='cards_container'>
        <div className='cards_wrapper'>
          <ul className='cards_items'>
            <CardItem
              src='images/checkerProject.png'
              text='A Project base on the game of checker.'
              label='Project 1'
            />
            <CardItem
              src='images/CatProject.png'
              text='An App for cat lover and anyone interested in knowing more about different cat.'
              label='Project 2'
            />
          </ul>
          <ul className='cards_items'>
            <CardItem
              src='images/codrProject.png'
              text='A social media app for software developers.'
              label='Project 3'              
            />
            <CardItem
              src='images/carProject.png'
              text='A website I made for users to look up car data.'
              label='Project 4'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
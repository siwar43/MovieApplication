import React from 'react';
import SerieCard from './SerieCard';
import './SerieList.css';
import AddSerie from './AddSerie';

function SerieList({ series, setSeries }) {
  return (
    <>
      <div className='serie-list-wrapper'>
        <div className="title-only">
          <h2 className='serie-list-title'>Series List</h2>
        </div>

        <div className="button-only">
          <AddSerie series={series} setSeries={setSeries} />
        </div>

        <div className='content'>
          {series.map((el, index) => <SerieCard key={index} el={el} />)}
        </div>
      </div>
    </>
  );
}

export default SerieList;

import React from 'react';

import '../css/ChartBar.css';

const ChartBar = (props) => {
  let barFillHeight = '0%';

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }
  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        {/* use double curly brace for style attribute since it's expecting 
        a dynaminc value and the value is a JS object */}
        <div
          className='chart-bar__fill'
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className='chart-bar__label'>{props.label}</div>
    </div>
  );
};

export default ChartBar;

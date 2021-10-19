import React from 'react';

import weather from '../../assets/icons/weather.svg';
import night from '../../assets/icons/night.svg';
import cloudy from '../../assets/icons/cloudy.svg';
import snowy from '../../assets/icons/snowy.svg';
import thunder from '../../assets/icons/thunder.svg';
import rainy from '../../assets/icons/rainy.svg';
import sunny from '../../assets/icons/sunny.svg';

const WeatherIconSmall = ({ number }) => {
  return (
    <>
      {number >= 0 && number < 6 ? (
        //sunny
        <img
          alt="weather"
          src={sunny}
          width="50"
          style={{ borderRadius: '5px' }}
          className="d-inline-block align-top"
        />
      ) : number >= 6 && number < 12 ? (
        //cloudy
        <img
          alt="weather"
          src={cloudy}
          width="50"
          style={{ borderRadius: '5px' }}
          className="d-inline-block align-top"
        />
      ) : number >= 12 && number < 19 ? (
        //rain
        <img
          alt="weather"
          src={rainy}
          width="50"
          style={{ borderRadius: '5px' }}
          className="d-inline-block align-top"
        />
      ) : number >= 19 && number < 33 ? (
        //snow
        <img
          alt="weather"
          src={snowy}
          width="50"
          style={{ borderRadius: '5px' }}
          className="d-inline-block align-top"
        />
      ) : number >= 33 && number < 39 ? (
        //night
        <img
          alt="weather"
          src={night}
          width="50"
          style={{ borderRadius: '5px' }}
          className="d-inline-block align-top"
        />
      ) : number >= 39 && number < 44 ? (
        //storm
        <img
          alt="weather"
          src={thunder}
          width="50"
          style={{ borderRadius: '5px' }}
          className="d-inline-block align-top"
        />
      ) : (
        //general weather
        <img
          alt="weather"
          src={weather}
          width="50"
          style={{ borderRadius: '5px' }}
          className="d-inline-block align-top"
        />
      )}
    </>
  );
};

export default WeatherIconSmall;

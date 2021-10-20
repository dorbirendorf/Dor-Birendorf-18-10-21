import React from 'react';
import {
  Typography,
  Card,
  CardContent,
  CardHeader,
} from '@mui/material';
import WeatherIconSmall from './layout/WeatherIconSmall';
import{formatDate,formatMinMax} from '../utils/format'


export const FiveDaysForcastCard = ({ forecast, degrees,darkMode }) => {
  return (
    <div>
      <Card sx={{ 
        textAlign: 'center',
        bgcolor:darkMode?'#343a40':"#E5EAEF",
        color:darkMode? "#E5EAEF":'#343a40'  }}>
        <CardHeader
          
          title={formatDate(forecast.Date)}
          subheader={`${forecast.Day.IconPhrase}`}
        />
        <CardContent sx={{textAlign:"center" }}>
          <WeatherIconSmall number={forecast.Day.Icon} />
          <Typography variant="body2"  textAlign="center">
            {formatMinMax(
              forecast.Temperature.Minimum.Value,
              forecast.Temperature.Maximum.Value,
              degrees
            )}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

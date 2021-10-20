import React from 'react';
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  CardHeader,
  CardActions,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WeatherIconSmall from './layout/WeatherIconSmall';
import{formatDate,convertToFarenheit,formatMinMax} from '../utils/format'


export const FiveDaysForcastCard = ({ forecast, degrees,darkMode }) => {
  return (
    <div>
      <Card sx={{ 
        textAlign: 'center',
        bgcolor:darkMode?'#343a40':'#f8f9fa',
        color:darkMode? '#f8f9fa':'#343a40'  }}>
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

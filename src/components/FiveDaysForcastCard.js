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


export const FiveDaysForcastCard = ({ forecast, degrees }) => {
  return (
    <div>
      <Card>
        <CardHeader
          sx={{ textAlign: 'center' , background: 'ghostwhite'  }}
          title={formatDate(forecast.Date)}
          subheader={`${forecast.Day.IconPhrase}`}
        />
        <CardContent sx={{textAlign:"center" }}>
          <WeatherIconSmall number={forecast.Day.Icon} />
          <Typography variant="body2" color="text.secondary" textAlign="center">
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

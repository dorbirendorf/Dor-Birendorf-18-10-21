import React from 'react'
import { Grid, Typography, Box,Card,CardHeader,CardContent,CardActions,IconButton } from '@mui/material';
import WeatherIcon from './layout/WeatherIcon';
import{formatDate,convertToFarenheit,formatMinMax,formatTemp} from '../utils/format'


export const SmallConditionsCard = ({data,theme}) => {
    const{locationName,weather}=data
    const{darkMode,celcius}=theme
    return (
        <div>
             <Card>
            <CardHeader
              sx={{ background: 'ghostwhite' }}
              title={
                <Typography align="center" variant="h5">
                  {locationName}
                </Typography>
              }
            />
            <CardContent sx={{ textAlign: 'center' }}>
              <WeatherIcon
                number={weather[0].WeatherIcon}
                xs={12}
                sx={{ maxHeight: 200, maxWidth: 200 }}
              />
              <Typography variant="h6">{weather[0].WeatherText}</Typography>
              <Typography variant="p">{formatTemp(weather[0].Temperature.Metric.Value,celcius)}</Typography>
            </CardContent>
          </Card>
        </div>
    )
}

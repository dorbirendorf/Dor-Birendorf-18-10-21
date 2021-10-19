import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { TextField, Autocomplete, Button, Stack } from '@mui/material';
import { connect } from 'react-redux';
import {
  locationsAutocomplete,
  setCurrentLocation,
} from '../state/actions/weatherApiActions';

const SearchBox = (props) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event, newInputValue) => {
    props.locationsAutocomplete(newInputValue);
  };

  const handleChange = (event, newInputValue) => {
    setInputValue(newInputValue);
  };

  const handleSubmit = (event) => {
    if (inputValue) {
      props.setCurrentLocation({
        Key: inputValue.Key,
        name: inputValue.LocalizedName,
      });
    }
  };

  return (
    <div>
      <Stack direction="row" spacing={2} marginBottom={4}>
        <Autocomplete
          id="location-search-bar"
          options={
            props.weather.autoCompleteLocations
              ? props.weather.autoCompleteLocations
              : []
          }
          fullWidth
          getOptionLabel={(city) =>
            `${city.LocalizedName} , ${city.Country.LocalizedName} , ${city.Key}`
          }
          onInputChange={handleInputChange}
          onChange={handleChange}
          renderInput={(params) => (
            <TextField {...params} label="Location" variant="outlined" />
          )}
        />
        <Button
          onClick={handleSubmit}
          variant="outlined"
          size="large"
          startIcon={<SearchIcon />}
        >
          Search
        </Button>
      </Stack>
    </div>
  );
};

const mapStateToProps = (state) => ({
  weather: state.weather,
  theme:state.theme
});

export default connect(mapStateToProps, {
  locationsAutocomplete,
  setCurrentLocation,
})(SearchBox);

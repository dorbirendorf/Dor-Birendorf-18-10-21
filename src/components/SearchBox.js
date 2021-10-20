import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { TextField, Autocomplete, Button, Stack } from '@mui/material';
import { connect } from 'react-redux';
import {
  locationsAutocomplete,
  setCurrentLocation,
} from '../state/actions/weatherApiActions';

const SearchBox = ({
  weather: { autoCompleteLocations },
  theme: { darkMode },
  locationsAutocomplete,
  setCurrentLocation,
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event, newInputValue) => {
    locationsAutocomplete(newInputValue);
  };

  const handleChange = (event, newInputValue) => {
    setInputValue(newInputValue);
  };

  const handleSubmit = (event) => {
    if (inputValue) {
      setCurrentLocation({
        Key: inputValue.Key,
        name: inputValue.LocalizedName,
      });
    }
  };

  return (
    <div>
      <Stack
        direction="row"
        spacing={2}
        marginBottom={4}
        sx={{
          bgcolor:  "#E5EAEF",
          color: darkMode ? "#E5EAEF" : '#343a40',
        }}
      >
        <Autocomplete
          id="location-search-bar"
          options={autoCompleteLocations ? autoCompleteLocations : []}
          fullWidth
          getOptionLabel={(city) =>
            `${city.LocalizedName} , ${city.Country.LocalizedName} , ${city.Key}`
          }
          onInputChange={handleInputChange}
          onChange={handleChange}
          renderInput={(params) => (
            <TextField {...params} label="Location" variant="standard" />
          )}
        />
        <Button
          onClick={handleSubmit}
          variant="text"
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
  theme: state.theme,
});

export default connect(mapStateToProps, {
  locationsAutocomplete,
  setCurrentLocation,
})(SearchBox);

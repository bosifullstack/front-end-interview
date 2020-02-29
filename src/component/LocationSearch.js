import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';


import { TextField } from '@material-ui/core';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';


const useStyles = theme => ({
  form: {
    width: '100%',
    '& div': {
      width: '100%',
    },
  },
});
 
class LocationSearchInput extends Component {
 
  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };
 
  render() {
    const { classes, address, handleChange, index } = this.props;

    return (
      <PlacesAutocomplete
        value={address}
        onChange={address => handleChange(index, 'address', address)}
        onSelect={address => handleChange(index, 'address', address)}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className={classes.form}>
            <TextField
              required
              id="address"
              value={address}
              onChange={e => handleChange(index, 'address', e.target.value)}
              {...getInputProps({
                placeholder: 'Address',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

export default withStyles(useStyles)(LocationSearchInput)
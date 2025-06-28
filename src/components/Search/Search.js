import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { fetchCities } from '../../api/OpenWeatherService';

const Search = ({ onSearchChange }) => {
  const [searchValue, setSearchValue] = useState(null);

  const loadOptions = async (inputValue) => {
    const citiesList = await fetchCities(inputValue);

    return {
      options: citiesList.data.map((city) => {
        return {
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.countryCode}`,
        };
      }),
    };
  };

  const onChangeHandler = (enteredData) => {
    setSearchValue(enteredData);
    onSearchChange(enteredData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for cities"
      debounceTimeout={600}
      value={searchValue}
      onChange={onChangeHandler}
      loadOptions={loadOptions}
      styles={{
        control: (base) => ({
          ...base,
          backgroundColor: '#1E1E1E',
          borderColor: '#4CAF50',
          color: '#ffffff',
        }),
        singleValue: (base) => ({
          ...base,
          color: '#ffffff',
        }),
        input: (base) => ({
          ...base,
          color: '#ffffff',
        }),
        menu: (base) => ({
          ...base,
          backgroundColor: '#2A2A2A',
          color: '#ffffff',
        }),
        option: (base, state) => ({
          ...base,
          backgroundColor: state.isFocused ? '#4CAF50' : '#2A2A2A',
          color: state.isFocused ? '#ffffff' : '#e0e0e0',
          cursor: 'pointer',
        }),
        placeholder: (base) => ({
          ...base,
          color: 'rgba(255, 255, 255, 0.6)',
        }),
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: 6,
        colors: {
          ...theme.colors,
          primary25: '#4CAF50',
          primary: '#4CAF50',
          neutral0: '#1E1E1E', // background
          neutral80: '#ffffff', // text
        },
      })}
    />
  );
};

export default Search;

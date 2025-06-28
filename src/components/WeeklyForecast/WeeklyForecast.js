import React from 'react';
import { Grid } from '@mui/material';
import { getWeekDays } from '../../utilities/DatetimeUtils';
import { weatherIcon } from '../../utilities/IconsUtils';
import WeeklyForecastItem from './WeeklyForecastItem';
import ErrorBox from '../Reusable/ErrorBox';
import UnfedForecastItem from './UnfedForecastItem';
import DayWeatherDetails from './DayWeatherDetails';
import Layout from '../Reusable/Layout';

const WeeklyForecast = ({ data }) => {
  const forecastDays = getWeekDays();

  const noDataProvided =
    !data ||
    Object.keys(data).length === 0 ||
    !data.list ||
    data.list.length === 0;

  let content = (
    <div style={{ width: '100%' }}>
      <ErrorBox type="error" />
    </div>
  );

  if (!noDataProvided) {
    content = (
      <Grid
        item
        container
        direction="column"
        xs={12}
        gap="8px"
        sx={{
          width: '100%',
        }}
      >
        {data.list.map((item, idx) => (
          <Grid
            key={idx}
            item
            container
            xs={12}
            alignItems="center"
            justifyContent="space-between"
            sx={{
              padding: '12px',
              background:
                'linear-gradient(0deg, rgba(255, 255, 255, 0.05) 0%, rgba(171, 203, 222, 0.05) 100%)',
              boxShadow:
                '0 2px 6px rgba(0, 0, 0, 0.15)',
              borderRadius: '12px',
              transition: '0.3s ease-in-out',
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.07)',
              },
            }}
          >
            <DayWeatherDetails
              day={forecastDays[idx]}
              src={weatherIcon(`${item.icon}`)}
              description={item.description}
            />

            <Grid
              item
              container
              xs={6}
              sm={4}
              md={3}
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <WeeklyForecastItem
                type="temperature"
                value={`${Math.round(item.temp)} °C`}
                color="#4CAF50"
              />
              <WeeklyForecastItem
                type="clouds"
                value={`${item.clouds} %`}
                color="#4CAF50"
              />
            </Grid>

            <Grid
              item
              container
              xs={6}
              sm={4}
              md={3}
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <WeeklyForecastItem
                type="wind"
                value={`${item.wind} m/s`}
                color="#4CAF50"
              />
              <WeeklyForecastItem
                type="humidity"
                value={`${item.humidity} %`}
                color="#4CAF50"
              />
            </Grid>
          </Grid>
        ))}

        {data.list.length === 5 && (
          <Grid
            item
            xs={12}
            display="flex"
            alignItems="center"
            sx={{
              padding: '12px',
              background:
                'linear-gradient(0deg, rgba(255, 255, 255, 0.05) 0%, rgba(171, 203, 222, 0.05) 100%)',
              boxShadow:
                '0 2px 6px rgba(0, 0, 0, 0.15)',
              borderRadius: '12px',
            }}
          >
            <UnfedForecastItem
              day={forecastDays[5]}
              value="NaN"
              src={weatherIcon('unknown.png')}
            />
          </Grid>
        )}
      </Grid>
    );
  }

  return (
    <Layout
      title="WEEKLY FORECAST"
      content={content}
      mb=".8rem"
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '3rem 0 0',
      }}
    />
  );
};

export default WeeklyForecast;

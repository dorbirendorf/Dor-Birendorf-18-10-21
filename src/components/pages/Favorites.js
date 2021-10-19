import React, { useEffect } from 'react';
import { getFavorites } from '../../utils/ManageFavorites';
import { SmallConditionsCard } from '../SmallConditionsCard';
import { connect } from 'react-redux';
import { getFavoriteWeather } from '../../state/actions/weatherApiActions';
import { Col, Row } from 'react-bootstrap';

const Favorites = ({ weather, theme, getFavoriteWeather }) => {

  useEffect(() => {
    const favorites = getFavorites();
    favorites.map((location) => {
      getFavoriteWeather(location);
    });
  }, [getFavoriteWeather]);
  

  const FavoriteWeatherCards = weather.favoritesWeather.map(
    (favoriteLocation) => (
      <div>
        <Row className="justify-content-md-center">
          <Col md={3} >
            <SmallConditionsCard data={favoriteLocation} theme={theme} />
          </Col>
        </Row>
      </div>
    )
  );

  return <div>
      {FavoriteWeatherCards}
      </div>;
};

const mapStateToProps = (state) => ({
  weather: state.weather,
  theme: state.theme,
});

export default connect(mapStateToProps, { getFavoriteWeather })(Favorites);

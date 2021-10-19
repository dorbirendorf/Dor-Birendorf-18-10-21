//favorite is: {Key:number , Name:string}

export const getFavorites = () => {
  var data = localStorage.getItem('favorites');
  return data ? JSON.parse(data) : [];
};

export const addFavorite = (location) => {
  const favorites = getFavorites();
  localStorage.setItem('favorites', JSON.stringify([...favorites, location]));
};

export const removeFavorite = (key) => {
  let favorites = getFavorites();
  favorites = favorites.filter((location) => key !== location.Key);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const checkIfFavoriteExist = (key) => {
  let favorites = getFavorites();
  const checkFavorites = favorites.filter((x) => key === x.Key);
  return !checkFavorites.length ? false : true;
};

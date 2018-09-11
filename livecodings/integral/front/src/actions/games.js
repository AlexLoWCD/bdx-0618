export const fetchGamesBegin = () => ({
  type: 'FETCH_GAMES_BEGIN',
});

export const fetchGamesSuccess = games => ({
  type: 'FETCH_GAMES_SUCCESS',
  games,
});

export const fetchGamesFailure = error => ({
  type: 'FETCH_GAMES_FAILURE',
  error,
});

export function fetchGames() {
  return (dispatch) => {
    dispatch(fetchGamesBegin());
    return (
      fetch('/api/games')
        .then((res) => {
          if (!res.ok) {
            throw Error(res.statusText);
          }
          return res.json();
        })
        .then(games => dispatch(fetchGamesSuccess(games)))
        .catch(error => dispatch(fetchGamesFailure(error)))
    );
  };
}

export function addGame(values) {
  return (dispatch) => {
    return (
      fetch("/api/games/",
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify(values)
        })
    );
  };
}
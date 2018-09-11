export const fetchPlatformBegin = () => ({
  type: 'FETCH_PLATFORM_BEGIN',
});

export const fetchPlatformSuccess = platforms => ({
  type: 'FETCH_PLATFORM_SUCCESS',
  platforms,
});

export const fetchPlatformFailure = error => ({
  type: 'FETCH_PLATFORM_FAILURE',
  error,
});

export function fetchPlatform() {
  return (dispatch) => {
    dispatch(fetchPlatformBegin());
    return (
      fetch('/api/platforms')
        .then((res) => {
          if (!res.ok) {
            throw Error(res.statusText);
          }
          return res.json();
        })
        .then(platforms => dispatch(fetchPlatformSuccess(platforms)))
        .catch(error => dispatch(fetchPlatformFailure(error)))
    );
  };
}
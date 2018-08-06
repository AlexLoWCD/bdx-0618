const defaultState = [{
  id: 1,
  name: "paul",
  villes: [1,2,3,4,5],
}, {
  id: 2,
  name: "julie",
  villes: [2,4,5,6],
}, {
  id: 3,
  name: "romain",
  villes: [1,2,6],
}];

const voyageurs = (state = defaultState, action) => {
  console.log(state);
  switch(action.type) {
    case 'UPDATE_VILLES':
      return state.map(v => {
        const voyageur = {...v};
        if (voyageur.id === action.id) {
          voyageur.villes = action.villes;
        }
        return voyageur;
      })
    default: 
      return state;
  }
}

export default voyageurs;
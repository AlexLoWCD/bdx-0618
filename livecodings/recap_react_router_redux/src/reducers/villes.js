const defaultState = [{
  id: 1,
  name: "bordeaux",
  visited: true,
}, {
  id: 2,
  name: "arcachon",
  visited: false,
}, {
  id: 3,
  name: "bayonne",
  visited: false,
}, {
  id: 4,
  name: "biarritz",
  visited: true,
}, {
  id: 5,
  name: "dax",
  visited: true,
}, {
  id: 6,
  name: "biscarosse",
  visited: false,
}];

const villes = (state = defaultState, action) => {
  switch(action.type) {
    case 'TOGGLE_VISITED': 
      return state.map(ville => {
        const v = {...ville};
        if (ville.id === action.id) {
          v.visited = !v.visited;
        }
        return v;
      });
    default: 
      return state;
  }
}

export default villes;
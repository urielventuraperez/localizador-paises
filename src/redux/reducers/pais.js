import { CARGAR_PAISES, FILTRO_PAISES, VER_PAIS } from '../action-types';

const initialState = {
  paises: [],
  pais: [],
  cargando: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case CARGAR_PAISES:
      return { ...state, cargando: !state.cargando };
    case FILTRO_PAISES:
      return Object.assign(
        {
          ...state,
          cargando: false
        },
        {
          paises: action.payload
        }
      );
    case VER_PAIS:
      return Object.assign(
        {
          ...state,
          cargando: false
        },
        {
          arbitrosTorneo: action.payload
        }
      );
    default:
      return state;
  }
}

export default reducer;
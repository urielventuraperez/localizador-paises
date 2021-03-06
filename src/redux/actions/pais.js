import { CARGAR_PAISES, FILTRO_PAISES, VER_PAIS } from "../action-types";
import { Utils } from "../../utils/index";

const apiKey = Utils.apiKey;
const apiHost = Utils.apiHost;

const encabezados = new Headers();

encabezados.append("X-RapidApi-Key", apiKey);
encabezados.append("X-RapidApi-Host", apiHost);

const initMyFetch = {
  method: "GET",
  headers: encabezados,
  mode: "cors",
  cache: "default"
};

export function verPaises(name) {
  return function(dispatch) {
    dispatch({ type: CARGAR_PAISES });
    return fetch(`${Utils.apiroute}/name/${name}`, initMyFetch)
      .then(response => response.json())
      .then(json => {
        return dispatch({
          type: FILTRO_PAISES,
          payload: json
        });
      });
  };
}

export function verPais(name) {
  return function(dispatch) {
    dispatch({ type: CARGAR_PAISES });
    return fetch(`${Utils.apiroute}/name/${name}`, initMyFetch)
      .then(response => response.json())
      .then(json => {
        return dispatch({
          type: VER_PAIS,
          payload: json
        });
      });
  };
}

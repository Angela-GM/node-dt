// wrapper que envuelve el fetchApi, todas las peticiones van a pasar por aqui, esto ayuda a que si debemos añadir algo tipo una autenticacion, por ejemplo, podemos hacerlo aqui sin afectar el resto de la app

import axios from "axios";

export const httpClientPlugin = {
  get: async (url: string) => {
    // const response = await fetch(url);
    // return await response.json();
    const { data } = await axios.get(url);
    return await data;
  },
  post: async (url: string, body: any) => {},
  put: async (url: string, body: any) => {},
  delete: async (url: string) => {},
};

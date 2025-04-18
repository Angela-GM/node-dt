// wrapper que envuelve el fetchApi, todas las peticiones van a pasar por aqui, esto ayuda a que si debemos añadir algo tipo una autenticacion, por ejemplo, podemos hacerlo aqui sin afectar el resto de la app 

const axios = require('axios');

const httpClientPlugin = {
    get: async (url) => {
        // const response = await fetch(url);
        // return await response.json();
        const {data} = await axios.get(url);
        return await data;
    },
    post: async (url, body) => {},
    put: async (url, body) => {},
    delete: async (url) => {}
}



module.exports = {
   httpClient: httpClientPlugin
}
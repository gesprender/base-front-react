interface FetchConfig {
  mode?: 'cors';
  method: 'POST' | 'GET' | 'DELETE';
  body?: FormData;
  headers?: HeadersInit;
}

// Fetch functions
function getHeader() {
  return {
    'Authorization': `Bearer ${localStorage.getItem('tokenUser')}`
  };
}

const buildDateSend = (data: { [x: string]: string | Blob; }) => {
  let dataSend = new FormData();
  for (let key in data) { dataSend.append(key, data[key]); }
  return dataSend;
};


export const API = {

  _post: function _post(url:string, params: any, token = true) {
    let formData = buildDateSend(params);
    const config:FetchConfig = token ? { mode: 'cors', method: 'POST', body: formData, headers: getHeader() } : { mode: 'cors', method: 'POST', body: formData };
    return fetch(url, config).then(function (response) {
      return response.json();
    });
  },

  _get: function _get(url: any, params: any, token = true) {
    const query = new URLSearchParams(params);
    const newUrl = params ? new URL(`${url}${query ? `?${query.toString()}` : ''}`) : url;
    const config:FetchConfig = token ? { mode: 'cors', method: 'GET', headers: getHeader() } : { method: 'GET' };
    return fetch(newUrl, config).then(function (response) {
      return response.json();
    });
  },

  _put: function _put(url: string, params: any, token = true) {
    let formData = buildDateSend(params);
    formData.append('_method', 'PUT');
    const config:FetchConfig = token ? { mode: 'cors', method: 'POST', body: formData, headers: getHeader() } : { mode: 'cors', method: 'POST', body: formData };
    return fetch(url, config).then(function (response) {
      return response.json();
    });
  },

  _delete: function _delete(url: string, token = true) {
    const config:FetchConfig = token ? { mode: 'cors', method: 'DELETE', headers: getHeader() } : { mode: 'cors', method: 'DELETE' };
    return fetch(url, config).then(function (response) {
      return response.json();
    });
  }

};
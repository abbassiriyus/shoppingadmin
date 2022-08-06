import axios from 'axios';
export const host = "http://shop.abrorjonaxmadov.uz";
export const access_token =localStorage.getItem('token')
export const lang =(localStorage.getItem('lang')==null?("uz"):(localStorage.getItem('lang')));

export function httpRequest(config){
    return axios({
      ...config,
    }); 
   
  };
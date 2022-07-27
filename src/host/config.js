import { host,access_token,httpRequest } from "./host"

// post login
export const postContact= (data) => {
    const config = {
        url: `${host}/auth/v1/login/`,
        method: "post", 
        data:data,
      };
      return httpRequest(config);
    }


    export const PostProduct= (formDataObj) => {
      let config = {
          url: `${host}/users/api/v1/products/`,
          method: "post",
          data: formDataObj,
          headers: {
            'Authorization': `Token ${access_token}`,
            "Content-Type": "multipart/form-data"
          }
        };
        return httpRequest(config);
      };


      export let getCategorys= () => {
        let config = {
          url: `${host}/api/v1/categories/`,
          method: "GET",
          headers:{
            'Authorization': `Token ${access_token}`,
            "Content-Type": "multipart/form-data"
          }
        };
        return httpRequest(config);
      }


    export const PostCategorys= (formDataObj) => {
      let config = {
          url: `${host}/api/v1/categories/create/`,
          method: "post",
          data: formDataObj,
          headers: {
            'Authorization': `Token ${access_token}`,
            "Content-Type": "multipart/form-data"
          }
        };
        return httpRequest(config);
      };
      export let getSubCategorys= () => {
        let config = {
          url: `${host}/api/v1/subcategories/`,
          method: "GET",
        };
        return httpRequest(config);
      }


    export const PostSubCategorys= (formDataObj) => {
      let config = {
          url: `${host}/api/v1/subcategories/create/`,
          method: "post",
          data: formDataObj,
          headers: {
            'Authorization': `Token ${access_token}`,
            "Content-Type": "multipart/form-data"
          }
        };
        return httpRequest(config);
      };




      export const postProduct= (data) =>{
        const config = {
          url: `${host}/api/v1/products/`,
          method: "post", 
          data:data,
          headers: {
            'Authorization': `Token ${access_token}`,
            "Content-Type": "multipart/form-data"
          }
        };
        return httpRequest(config);
        };

        export const getProduct=()=>{
          const config = {
            url: `${host}/api/v1/products/`,
            method: "GET",
          }
          return httpRequest(config)
        }
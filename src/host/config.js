import { host,access_token,httpRequest } from "./host"
import { lang} from "./host"
// post login
export const postContact= (data) => {
    const config = {
        url: `${host}/auth/v1/login/`,
        method: "post", 
        data:data,
      };
      return httpRequest(config);
    }




// category
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

      export const deleteCategorys= slug => {
        let config = {
            url: `${host}/api/v1/categories/${slug}/delete/`,
            method: "delete",
            headers: {
              'Authorization': `Token ${access_token}`,
            }
          };
          return httpRequest(config);
        };

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
   
   
   
   
  //  subcategory
      export let getSubCategorys= () => {
        let config = {
          url: `${host}/api/v1/subcategories/`,
          method: "GET",
        };
        return httpRequest(config);
      }

      export const deleteSubCategorys= slug => {
        let config = {
            url: `${host}/api/v1/subcategories/${slug}/delete/`,
            method: "delete",
            headers: {
              'Authorization': `Token ${access_token}`,
            }
          };
          return httpRequest(config);
        };

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


// product
       

export const getProduct=()=>{
          const config = {
            url: `${host}/api/v1/products/`,
            method: "GET",
          }
          return httpRequest(config)
        }

        export const deleteProducts= slug => {
          let config = {
              url: `${host}/api/v1/products/${slug}/`,
              method: "delete",
              headers: {
                'Authorization': `Token ${access_token}`,
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
            "Accept-Language": `${lang}`,
            "Content-Type": "multipart/form-data"
          }
        };
        return httpRequest(config);
        };

    //images
    export const PostImages=(data)=>{
      const config ={
        url:`${host}/api/v1/products/images/`,
        method: "post",
        data:data,
        headers:{
          'Authorization': `Token ${access_token}`,
          "Content-Type":"multipart/form-data"
        }
      };
      return httpRequest(config);
    }

    export const getImages=()=>{
      const config={
        url:`${host}/api/v1/products/images/`,
        method: "GET",
      }
      return httpRequest(config)
    }



    export const deleteImages= id => {
      let config = {
          url: `${host}/api/v1/products/images/${id}/`,
          method: "delete",
          headers: {
            'Authorization': `Token ${access_token}`,
          }
        };
        return httpRequest(config);
      };



    export const postPromotions=(data)=>{
      let config = {
        url: `${host}/api/v1/products/promotions/create/`,
        method: "post",
        data:data,
        headers:{
          'Authorization': `Token ${access_token}`,
          "Content-Type":"multipart/form-data"
        }
      }
      return httpRequest(config);
    };



    export const getPromotions=()=>{
      const config={
        url:`${host}/api/v1/products/promotions/`,
        method: "GET",
      }
      return httpRequest(config)
    };


   
    export const  addPromotions=(data,id)=>{
      let config = {
        url: `${host}/api/v1/products/promotions/add-remove/${id}/`,
        method: "patch",
        data:data,
        headers:{
          'Authorization': `Token ${access_token}`,
          "Content-Type":"multipart/form-data"
        }
      }
      return httpRequest(config);
    };
    export const deletePromotions= id => {
      let config = {
          url: `${host}/api/v1/products/promotions/${id}/delete/`,
          method: "delete",
          headers: {
            'Authorization': `Token ${access_token}`,
          }
        };
        return httpRequest(config);
      };



    export const getImgSlug=(slug)=>{
      const config={
        url:`${host}/api/v1/products/${slug}/`,
        method: "GET",
      }
      return httpRequest(config)
    };







// post companiye
export const postCopany=(data)=>{
  let config = {
    url: `${host}/api/v1/company/`,
    method: "post",
    data:data,
    headers:{
      'Authorization': `Token ${access_token}`,
      "Accept-Language": `${lang}`,
      "Content-Type":"multipart/form-data"
    }
  }
  return httpRequest(config);
};

export const getCompany=()=>{
  const config={
    url:`${host}/api/v1/company/`,
    method: "GET",
  }
  return httpRequest(config)
};



//contacts
export const postContacts=(data)=>{
  const config = {
    url:`${host}/api/v1/contacts/create/`,
    method: "post",
    data:data,
    headers:{
      'Authorization': `Token ${access_token}`,
      "Accept-Language": `${lang}`,
      "Content-Type":"multipart/form-data"
    }

  }
  return httpRequest(config)
};

export const getContacts=(data)=>{
  const config = {
    url:`${host}/api/v1/contacts/`,
    method:"GET"
  }
  return httpRequest(config)
};
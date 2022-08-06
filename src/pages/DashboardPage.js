import Page from 'components/Page';
import {  NumberWidget } from 'components/Widget';
import './style.css'
import React from 'react';
import { Card, Col, Row } from 'reactstrap';
import { getCategorys, getCompany, getContacts, getImages, getProduct, getPromotions, getSubCategorys, postCopany } from '../host/config';
import axios from 'axios';

class DashboardPage extends React.Component {
  state={
   category:[],
   product:[],
   subCategory:[],
   aksiya:[],
   data:[],
   file:[]
  }



  handleFile(e) {
    let file1 = e.target.files[0];
  // console.log(file1);
  this.setState({file:file1})
  }
 getcategory=()=>{
   getCategorys().then(res=>{
     this.setState({category:res.data})
   })
 }
getProduct1=()=>{
  getProduct().then(res=>{
    this.setState({product:res.data})
  })
}
getSubCategory=()=>{
  getSubCategorys().then(res=>{
    this.setState({subCategory:res.data})
  })
}
getImaga=()=>{
  getPromotions().then(res=>{
    this.setState({aksiya:res.data})
  })
}
  postContact=()=>{
    var contacts={
      "name": document.querySelector(''),
      // "text": "Q",
    }
    getContacts(contacts).then(res=>{
      this.getContact()
    })
  }





getCompanys=()=>{
getCompany().then(res=>{
console.log(res.data);
})
}
postCompanys=()=>{
 var data={
  "created_at": document.querySelector('#created_at').value,
  "modified_at": document.querySelector('#modified_at').value,
  "logo": document.querySelector('#logo').value,
  "phone": document.querySelector('#phone').value,
  "about_img": document.querySelector('#about_img').value,
  "team": document.querySelector('#team').value,
  "team_story": document.querySelector('#team_story').value,
  "longitude": "123324.2342342000000000000000000",
  "latitude": "12432432.2343530000000000000000000",
  "created": 1,
  "modified": 1
}
postCopany(data).then(res=>{    
  this.getCompanys();
})
}
componentDidMount(){
  this.getcategory()
  this.getImaga()
  this.getSubCategory()
  this.getProduct1()

}

  render() {

    return (
      <Page
        className="DashboardPage"
        title="Dashboard"
        breadcrumbs={[{ name: 'Dashboard', active: true }]}
      >
        <Row>
          <Col lg={3} md={6} sm={6} xs={12}>
                <div class="bg-info w-100 card12">
                    <h1>{this.state.product.length}</h1>
                    <p>Product</p>
               </div>
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
     <div className="card12">
     <h1>{this.state.category.length}</h1>
                    <p>Category</p>
       </div>
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
     <div className="card12">
     <h1>{this.state.subCategory.length}</h1>
                    <p>SubCategory</p>
       </div>
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
        <div className="card12">
        <h1>{this.state.aksiya.length}</h1>
                    <p>Promotion</p>
          </div>
          </Col>
        </Row>

        <div className='mt-3'>
                <h5>Description of new card</h5>
                <input type="text" id="newDescription" placeholder="Description card category" requiered />
              </div>
              <div className='mt-3'>
                <h5>Company logo</h5>
                <input className='d-block mt-2' type="file" placeholder='logo' name="" id="logo" />
              </div>
              <div className='mt-3'>
                <h5>Characteristics of new card</h5>
                <input type="text" id="newCharacteritics" placeholder="New card characeristics" />
              </div>
              <div className='mt-3'>
                <h5>Image of new card</h5>
                <input type="file" onInput={(e) => this.handleFile(e)} id="file" requiered />
              </div>
              <div className='mt-3'>
                <h5>Description of new card</h5>
                <input type="text" id="newDescription" placeholder="Description card category" requiered />
              </div>
              <div className='mt-3'>
                <h5>Price of new card</h5>
                <input type="number" id="newPrice" placeholder="New card price" requiered />
              </div>
              <div className='mt-3'>
                <h5>Characteristics of new card</h5>
                <input type="text" id="newCharacteritics" placeholder="New card characeristics" />
              </div>
              <div className='mt-3'>
                <h5>Image of new card</h5>
                <input type="file" onInput={(e) => this.handleFile(e)} id="file" requiered />
              </div>

        <input className='d-block mt-2' type="date" placeholder='created_at' name="" id="created_at"/>
        <input className='d-block mt-2' type="date" placeholder='modified_at' name="" id="modified_at"/>  
        <input className='d-block mt-2' type="tel" placeholder='phone' id='phone' />

        <input className='d-block mt-2' type="file" name="" id="about_img" />
        <input className='d-block mt-2' type="text" placeholder='team' name="" id="team" />
        <input className='d-block mt-2' type="text" placeholder='team_story' name="" id="team_story" />

        <button className='btn btn-primary mt-2' onClick={()=> this.postCompanys()}>yuborish</button>
       
      </Page>
    );
  }
}
export default DashboardPage;

import React, { Component } from 'react'
import { Button, Card, CardBody, CardHeader, CardImg, CardText, CardTitle, Col, Form, FormGroup, FormText, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row, Table } from 'reactstrap';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import Page from 'components/Page';
import { getCategorys, getProduct, getSubCategorys, postProduct } from '../host/config';



export default class tablepage extends Component {

state={
    data:[],
    category:[],
    subcategory:[],
    modal:false
}

getCategory=()=>{
    getCategorys().then(res=>{
    //  this.state
  this.setState({category:res.data})
  console.log(res.data);
    })
    console.log(this.state.category);
  }


  getSubCategory=()=>{
      getSubCategorys().then(res=>{
          this.setState({subcategory:res.data})
          console.log(res.data);
      })
      console.log(this.state.subcategory)
  }


handleShow=()=>{
    this.setState({modal:true})
}
handleClose=()=>{
    this.setState({modal:false})
}
postProduct1=()=>{
    var data1={
        "slug":document.querySelector('#newTitle').value,
        "title": document.querySelector('#newTitle').value,
        "category":  document.querySelector('#category').value,
        "subcategory":  document.querySelector('#subcategory').value,
        "description":document.querySelector('#newDescription').value,
        "price":document.querySelector('#newPrice').value,
        "characteristics":document.querySelector('#newCharacteritics').value,
        "image":document.querySelector('#newImage').value
      }

      postProduct(data1).then(res =>{
          this.setState(res.data)
          console.log(res.data);
      })
}

getProduct1 = () =>{
    getProduct().then(res=>{
      //  state
    this.setState(res.data)
    console.log(res.data);
      })
      console.log(this.state.data);
  }
componentDidMount(){
    this.getCategory()
    this.getSubCategory()
    getProduct()
}


  render() {
    return (
      <>
            <Page
      title="Tables"
      breadcrumbs={[{ name: 'tables', active: true }]}
      className="TablePage"
    >


      <Row>
        <Col>
          <Card className="mb-3">
            <CardHeader>
              <button onClick={()=>this.handleShow()} className="btn btn-primary">Create</button>
              
            </CardHeader>
            <CardBody>
              {this.state.data.map(item=>{
                return <Table responsive>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"><img className='w-10' src={item.image} alt='Card image'/></th>
                    <td>{item.title}</td>
                    <td>{item.category}</td>
                    <td>{item.price}</td>
                    <td><button className='btn btn-success'>Edit</button></td>
                    <td><button className='btn btn-danger ml-3'>Delete</button></td>
                  </tr>
                </tbody>
              </Table>
              })}
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Modal isOpen={this.state.modal}>
                  <ModalHeader >Modal title</ModalHeader>
                  <ModalBody>
                  <div className='mb-2'>
            <h3>Name for new card</h3>
            <input type="text" id="newTitle" placeholder="New card name" required/>
            </div>
            <div className='mt-3'>
              <h3>Category of new card</h3>
              <Input type="select" id="category" name="select">
                   {this.state.category.map(item=>{ return <option>{item.title}</option>})}
                 
                  </Input>     
           </div>
            <div className='mt-3'>
              <h3>Sub-Category of new card</h3>
              <Input type="select" id="subcategory" name="select">
                   {this.state.subcategory.map(item1=>{ return <option>{item1.title}</option>})}
                 
              </Input>
            </div>
            <div className='mt-3'>
              <h3>Description of new card</h3>
              <input type="text" id="newDescription" placeholder="Description card category" requiered/>
            </div>
            <div className='mt-3'>
              <h3>Price of new card</h3>
              <input type="number" id="newPrice" placeholder="New card price" requiered/>
            </div>
            <div className='mt-3'>
              <h3>Characteristics of new card</h3>
              <input type="text" id="newCharacteritics" placeholder="New card characeristics"/>
            </div>
            <div className='mt-3'>
              <h3>Image of new card</h3>
              <input type="file" id="newImage" requiered/>
            </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.postProduct1}>
                     save
                    </Button>
                    <Button color="secondary" onClick={this.handleClose}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </Modal>
    </Page>
      </>
    )
  }
}

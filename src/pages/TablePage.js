import Page from 'components/Page';
import React, { useEffect } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { getProduct, postProduct, PostProduct } from '../host/config';


const TablePage = () => { 

  const [data, setData] = useState([])

  const [show, setShow] = useState(false);

  const getProduct1 = () =>{
    getProduct().then(res=>{
      //  state
    setData(res.data)
    // console.log(res.data);
      })
      // console.log(data);
  }


const postProduct1 =() =>{
    const data12={
      "title": document.querySelector('#newTitle').value,
      "category":  document.querySelector('#newCategory').value,
      "subcategory":  document.querySelector('#newSubcategory').value,
      "description":document.querySelector('#newDescription').value,
      "price":document.querySelector('#newPrice').value,
      "characteristics":document.querySelector('#newCharacteritics').value,
      "image":document.querySelector('#newImage').value
    }
    postProduct(data12).then(res=>{
      console.log(res);
    })
    console.log(data12);
    // toggle1()
    getProduct1()
}


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
useEffect(()=>{
  getProduct1()}
)
  
  return (
    <Page
      title="Tables"
      breadcrumbs={[{ name: 'tables', active: true }]}
      className="TablePage"
    >


      <Row>
        <Col>
          <Card className="mb-3">
            <CardHeader>
              <button onClick={handleShow} className="btn btn-primary">Create</button>
              
            </CardHeader>
            <CardBody>
              {data.map(item=>{
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
      <Modal show={show} className="NewProduct" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new card</Modal.Title>
        </Modal.Header>
        <Modal.Body> 

            <div className='mb-3'>
              <button className='btn btn-primary english' onClick="Eng()">Eng</button>
              <button className='btn btn-primary ml-2'>Ru</button>
              <button className='btn btn-primary ml-2'>Uz</button>
            </div>
            <div className='mb-2'>
            <h3>Name for new card</h3>
            <input type="text" id="newTitle" placeholder="New card name" required/>
            </div>
            <div className='mt-3'>
              <h3>Category of new card</h3>
              <input type="text" id="newCategory" placeholder="New card category" requiered/>
            </div>
            <div className='mt-3'>
              <h3>Sub-Category of new card</h3>
              <input type="text" id="newSubcategory" placeholder="New card sub-category" requiered/>
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
       </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>postProduct1()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Page>

    
  );
};

export default TablePage;

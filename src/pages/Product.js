import React, { Component } from 'react'
import { Button, Card, CardBody, CardHeader, CardImg, CardText, CardTitle, Col, Form, FormGroup, FormText, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row, Table } from 'reactstrap';
import { MdDelete } from 'react-icons/md';
import { RiEditBoxFill } from 'react-icons/ri'
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import Page from 'components/Page';
import { addPromotions, deleteImages, deleteProducts, getCategorys, getImages, getImgSlug, getProduct, getPromotions, getSubCategorys, PostImages, postProduct } from '../host/config';
import '../styles/components/productJs.scss'


export default class Product extends Component {

  state = {
    file: null,
    data: [],
    category: [],
    subcategory: [],
    modal: false,
    modal1: false,
    modal2: false,
    productSlug: 0,
    dataPromotion: [],
    dataPromotion2: null,
    slugdata: [],
    slugdataimages: [],
  }

  getCategory = () => {
    getCategorys().then(res => {
      //  this.state
      this.setState({ category: res.data })
      // console.log(res.data);
    })
    // console.log(this.state.category);
  }


  getSubCategory = () => {
    getSubCategorys().then(res => {
      this.setState({ subcategory: res.data })
      // console.log(res.data);
    })
    // console.log(this.state.subcategory)
  }


  handleShow = () => {
    this.setState({ modal: true })
  }
  handleClose = () => {
    this.setState({ modal: false })
  }
  handleShow1 = (id) => {
    this.setState({ modal1: true, productSlug: id })
  }
  handleClose1 = () => {
    this.setState({ modal1: false })
  }

  postImage = () => {
    var data = {
      "image": this.state.file,
      "product": this.state.dataPromotion2
    }
    PostImages(data).then(res => {
      this.getImage()
      this.getProduct1()
    })
    this.toggle1()
  }
  deleteImage = (id) => {
    deleteImages(id).then(res => {
      this.getImage()
      this.getProduct1()
      this.toggle1()
    })
  }

  getImage = () => {
    getImages().then(res => {
      this.setState({ data1: res.data })
    })
  }


  postProduct1 = () => {
    var data1 = {
      "slug": document.querySelector('#newTitleEn').value,
      "title_en": document.querySelector('#newTitleEn').value,
      "title_ru": document.querySelector('#newTitleRu').value,
      "title_uz": document.querySelector('#newTitleUz').value,
      "category": document.querySelector('#category').value,
      "sub_category": document.querySelector('#subcategory').value,
      "description_uz": document.querySelector('#newDescription').value,
      "description_ru": document.querySelector('#newDescription').value,
      "description_en": document.querySelector('#newDescription').value,
      "price": document.querySelector('#newPrice').value,
      "characteristics": document.querySelector('#newCharacteritics').value,
    }

    var dataimg = {
      "image": this.state.file,
      "product": document.querySelector('#newTitleEn').value
    }
    console.log(data1);
    postProduct(data1).then(res => {
      this.getProduct1()
      console.log(this.postProduct1);         
       PostImages(dataimg).then(res=>{
          this.getProduct1()
       })
       this.getProduct1()
       this.setState({})
       
    })
    this.handleClose()

  }

  handleFile(e) {
    let file1 = e.target.files[0];

    this.setState({ file: file1 })
    console.log(file1);
  }
  deleteProduct = (slug) => {
    deleteProducts(slug).then(res => {
      this.getProduct1()
    })
  }
  getPromotion = () => {
    getPromotions().then(res => {
      this.setState({ dataPromotion: res.data })
      console.log(res.data);
    })
    console.log(this.state.data);
  }
  getProduct1 = () => {
    getProduct().then(res => {
      this.setState({ data: res.data })
      console.log(res.data);
    })
  }

  addPromotion = () => {
    var data = {
      'product': this.state.productSlug,
      // "id":document.querySelector('#addpromotion').value,
      "action": document.querySelector('#addpromotion').value

    }
    addPromotions(data, document.querySelector('#addpromotion1').value).then(res => {
      console.log(res.data);
    })
    this.handleClose1()
  }

  toggle = (slug) => {
    this.setState({ dataPromotion2: slug })
    getImgSlug(slug).then(res => {
      console.log(res.data);
      this.setState({ slugdata: res.data, slugdataimages: res.data.images })

    })
    this.setState({ modal2: true })
  };
  toggle1 = () => {
    this.setState({ modal2: false })
  };

  componentDidMount() {
    this.getProduct1()
    this.getCategory()
    this.getSubCategory()
    this.getPromotion()
    this.getImage()
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
                  <button onClick={() => this.handleShow()} className="btn btn-primary">Create</button>

                </CardHeader>
                <CardBody><Table responsive>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title <input placeholder='search title' onKeyUp={()=>{this.setState({})}} className='search33' /></th>
                      <th>Description</th>
                      <th>Price</th>
                      <th>Edit</th>
                      <th>Edd Aksiya</th>
                      <th>Edd Image</th>
                      <th>Delete</th>

                    </tr>
                  </thead>
                  {this.state.data.map(item => {
                    if((item.title).toLowerCase().includes((document.querySelector('.search33').value).toLowerCase())){
                    return <tbody>
                      <tr>
                        <th scope="row"><img className='w-10' style={{ width: '300px' }} src={item.thumbnail == null ? (item.image) : (item.thumbnail.image)} alt='NO image' /></th>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td>{item.price}</td>
                        <td><button className='btn btn-success'>Edit</button></td>
                        <td onClick={() => this.handleShow1(item.slug)}> <Button outline color="info">Add Aksiya</Button></td>
                        <td> <Button outline color="info" onClick={() => this.toggle(item.slug)} >Add Image</Button></td>
                        <td><button className='btn btn-danger ml-3' onClick={() => this.deleteProduct(item.slug)}>Delete</button></td>
                      </tr>
                    </tbody>
}
                  })}   </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Modal isOpen={this.state.modal}>
            <ModalHeader >Modal title</ModalHeader>
            <ModalBody>
              <div className='mb-2'>
                <h5>Name for new card</h5>
                <input type="text" id="newTitleEn" placeholder="New card name(en)" required />
              </div>
              <div className='mb-2'>
                <h5>Name for new card</h5>
                <input type="text" id="newTitleRu" placeholder="New card name(ru)" required />
              </div>
              <div className='mb-2'>
                <h5>Name for new card</h5>
                <input type="text" id="newTitleUz" placeholder="New card name(uz)" required />
              </div>
              <div className='mt-3'>
                <h5>Category of new card</h5>
                <Input type="select" id="category" name="select">
                  {this.state.category.map(item => { return <option value={item.slug}>{item.title}</option> })}

                </Input>
              </div>
              <div className='mt-3'>
                <h5>Sub-Category of new card</h5>
                <Input type="select" id="subcategory" name="select">
                  {this.state.subcategory.map(item1 => { return <option value={item1.slug}>{item1.title}</option> })}

                </Input>
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
          <Modal isOpen={this.state.modal1}>
            <ModalHeader >Aksiya qo`shish</ModalHeader>
            <ModalBody>
              <div className='mt-3'>
                <h3>aksiya</h3>
                <Input type="select" id="addpromotion1" name="select">
                  {this.state.dataPromotion.map(item1 => { return <option value={item1.id}>{item1.title}</option> })}
                </Input>
              </div>

              <div className='mt-3'>
                <h3>add or remove</h3>
                <Input type="select" id="addpromotion" name="select">
                  <option value="add">add</option>
                  <option value="remove">remove</option>
                </Input>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.addPromotion}>
                save
              </Button>
              <Button color="secondary" onClick={this.handleClose1}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>


          <Modal isOpen={this.state.modal2}>
            <ModalHeader >{this.state.slugdata.title}</ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Label for="exampleImage">new image</Label>
                  <Input onInput={(e) => this.handleFile(e)} id="file" type="file" >
                  </Input>
                </FormGroup>
                <div style={{ display: "flex" }}>
                  {this.state.slugdataimages.map(item => {
                  return <div className='slugdataimages'>
                    <img style={{ width: "100px" }} src={item.image} />
                    <button type='button' style={{ display: "none" }} className='produt_hover_btn'><MdDelete onClick ={() => this.deleteImage(item.id)} className="delete12" /></button>
                  </div>
                })} </div>
                 {/* <Input onInput={(e) => this.handleFile(e)} id="file" type="file" ></Input><Button></Button> */}
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.postImage}>
                save
              </Button>
              <Button color="secondary" onClick={this.toggle1}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </Page>
      </>
    )
  }
}

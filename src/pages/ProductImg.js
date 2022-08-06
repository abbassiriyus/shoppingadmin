import React, { Component } from 'react'
import { Button, Card, CardImg, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import Page from 'components/Page';
import { deleteImages, getCategorys, getImages, getProduct, PostImages } from '../host/config';


export default class ProductImg extends Component {



  state={
    file:[],
    data:[],
    data1:[],
    dataA:[],
    modal:false,
    dataAS:[]

    }


    postImage=()=>{
      var data={
        "image": this.state.file,
        "product":document.querySelector('#category').value
      }
      PostImages(data).then(res=>{
        this.getImage()
      })
      this.toggle1()
    }


    deleteImage=(id)=>{
      deleteImages(id).then(res=>{
        this.getImage()
      })
    }

    getImage=()=>{
      getImages().then(res=>{
    this.setState({data1:res.data})
    // console.log(res.data);
      })  
      // console.log(this.state.data1);
    }


    toggle =() => {
      this.setState({modal:true})
    };
    toggle1 = () => {
      this.setState({modal:false})
    };
    handleFile(e) {
      let file1 = e.target.files[0];
    // console.log(file1);
    this.setState({file:file1})
    }
    getCategory=()=>{
      getProduct().then(res=>{
      //  this.state
    this.setState({dataAS:res.data})
    // console.log(res.data);
      })
      // console.log(this.state.data);
    }
    componentDidMount(){
      setTimeout(() => {
          this.getCategory()
          this.getImage()
      }, 100);
    
    }

  render() {


    return (
      <Page title="Images" breadcrumbs={[{ name: 'Images', active: true }]}>
                <Button color="primary" className="mb-3" onClick={this.toggle}>create</Button>

          <Row>
            {this.state.data1.map(item=>{
return <Col lg={6} md={12} sm={12} xs={12} className="mb-3">
          <Card className="d-flex">
            <CardImg className="card-img-left w-25 ml-3 h-90" src={item.image} style={{ width: 'auto', height: 150 }} />
            <button className='btn btn-danger' onClick={()=> this.deleteImage(item.id)}>Delete</button>
          </Card>
        </Col>})}</Row>


        <Modal isOpen={this.state.modal}>
                  <ModalHeader >Modal title</ModalHeader>
                  <ModalBody>
                  <Form>
                <FormGroup>
                  <Label for="exampleImage">Image</Label>
                  <Input onInput={(e)=>this.handleFile(e)} id="file" type="file" >
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect">Category</Label>
                  <Input type="select" id="category" name="select">
                   {this.state.dataAS.map(item=>{ return <option  value={item.slug}>{item.title}</option>})}
                  </Input>
                </FormGroup>
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
    )
  }
}

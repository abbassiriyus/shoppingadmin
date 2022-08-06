import React, { Component } from 'react'
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Form, FormGroup, FormText, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
// import { Button, ButtonGroup, ButtonToolbar, Card, CardBody, CardHeader, CardText, Col, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledButtonDropdown } from 'reactstrap';
import bg1Image from 'assets/img/bg/background_640-1.jpg';
import { deleteSubCategorys, getCategorys, getSubCategorys, PostCategorys, PostSubCategorys } from '../host/config';
import Page from 'components/Page';

export default class Subcategory extends Component {
  state = {
    modal: false,
    data:[],
    data1:[],
    file:null
  };
getCategory=()=>{
  getCategorys().then(res=>{
  //  this.state
this.setState({data:res.data})
console.log(res.data);
  })
  console.log(this.state.data);
}
getSubCategory=()=>{
  getSubCategorys().then(res=>{
this.setState({data1:res.data})
console.log(res.data);
  })  
  // console.log(this.state.data1);
}
deleteSubcaregory=(slug)=>{
deleteSubCategorys(slug).then(res=>{
  this.getSubCategory()
})
}

postSubCategory=()=>{
  var data={
    "title_en": document.querySelector('#ensubcategory').value,
    "title_ru":  document.querySelector('#rusubcategory').value,
    "title_uz":  document.querySelector('#uzsubcategory').value,
    "category": document.querySelector('#subcategory').value,
    "image": this.state.file
  }
  PostSubCategorys(data).then(res=>{
    this.getSubCategory()
  })
  this.toggle1()
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

  componentDidMount(){
    setTimeout(() => {
        this.getCategory()
        this.getSubCategory()
    }, 100);
  
  }
  render() {
    return (
    <Page
      title="Subsubcategory"
      breadcrumbs={[{ name: 'Subcategory', active: true }]}
    >
                <Button color="primary" onClick={this.toggle}>create</Button>

          <Row>
            {this.state.data1.map(item=>{
return <Col lg={6} md={12} sm={12} xs={12} className="mb-3">
          <Card className="flex-row">
            <CardImg
              className="card-img-left"
              src={item.imageURL}
              style={{ width: 'auto', height: 150 }}
            />
            <CardBody>
              <CardTitle>{item.title}</CardTitle>
              <CardText>title_en:{item.title_en}
              </CardText>
              <CardText>
              title_uz:{item.title_uz}
                </CardText>
                <CardText>
                title_ru:{item.title_ru}
                </CardText>
              <Button color="warning">edit</Button>
              <Button color="secondary ml-2" onClick={()=>this.deleteSubcaregory(item.slug)}>delete</Button>
            </CardBody>
          </Card>
        </Col>})}</Row>
        <Modal isOpen={this.state.modal}>
                  <ModalHeader >Modal title</ModalHeader>
                  <ModalBody>
                  <Form>
                  <FormGroup>
                  <Label for="examplename">title_uz</Label>
                  <Input
                  id="uzsubcategory"
                    type="text"
                    name="name"
                    placeholder="title category_uz"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplename">title_ru</Label>
                  <Input
                  id="rusubcategory"
                    type="text"
                    name="name"
                    placeholder="title category_ru"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplename">title_en</Label>
                  <Input
                  id="ensubcategory"
                    type="text"
                    name="name"
                    placeholder="title category_en"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleImage">Image</Label>
                  <Input onInput={(e)=>this.handleFile(e)} id="file" type="file" >
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect">Select</Label>
                  <Input type="select" id="subcategory" name="select">
                   {this.state.data.map(item=>{ return <option value={item.slug}>{item.title}</option>})}
                  </Input>
                </FormGroup>
                </Form>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.postSubCategory}>
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

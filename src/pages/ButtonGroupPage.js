import Page from 'components/Page';
import React,{Component} from 'react';
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Form, FormGroup, FormText, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
// import { Button, ButtonGroup, ButtonToolbar, Card, CardBody, CardHeader, CardText, Col, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledButtonDropdown } from 'reactstrap';
// import bg1Image from 'assets/img/bg/background_640-1.jpg';
import { getCategorys, PostCategorys } from '../host/config';


export default class ButtonGroupPage extends Component {
  state = {
    modal: false,
    data:[]
  };
getCategory=()=>{
  getCategorys().then(res=>{
  //  this.state
this.setState({data:res.data})
console.log(res.data);
  })
  console.log(this.state.data);
}

postCategory=()=>{
  var data={
    "title_en": document.querySelector('#encategory').value,
    "title_ru":  document.querySelector('#rucategory').value,
    "title_uz":  document.querySelector('#uzcategory').value,
    "imageURL":document.querySelector('#newImage')[0]
  }
  PostCategorys(data).then(res=>{
    console.log(res);
  })
  console.log(data);
  this.toggle1()
  this.getCategory()
}
  toggle =() => {
    this.setState({modal:true})
  };
  toggle1 = () => {
    this.setState({modal:false})
  };


  componentDidMount(){
    setTimeout(() => {
        this.getCategory()
    }, 100);
  
  }
  render() {
    return (
    <Page
      title="Category"
      breadcrumbs={[{ name: 'Category', active: true }]}
    >
                <Button color="primary" onClick={this.toggle}>create</Button>

          <Row>
            {this.state.data.map(item=>{
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
              <Button color="success">edit</Button>
              <Button color="secondary ml-2">delete</Button>
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
                  id="uzcategory"
                    type="text"
                    name="name"
                    placeholder="title category_uz"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplename">title_ru</Label>
                  <Input
                  id="rucategory"
                    type="text"
                    name="name"
                    placeholder="title category_ru"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplename">title_en</Label>
                  <Input
                  id="encategory"
                    type="text"
                    name="name"
                    placeholder="title category_en"
                  />
                </FormGroup>
                 <FormGroup>
                  <Label for="exampleImage">Image</Label>
                  <Input type="file" id="newImage">
                  </Input>
                </FormGroup>
              </Form>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.postCategory}>
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

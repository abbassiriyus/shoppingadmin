import Page from 'components/Page';
import React,{Component} from 'react';
import { Alert, Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Form, FormGroup, FormText, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import { deleteCategorys, getCategorys, PostCategorys } from '../host/config';


export default class ButtonGroupPage extends Component {
  state = {
    modal: false,
    data:[],
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
deleteCategory=(slug)=>{
  deleteCategorys(slug).then(res=>{
    this.getCategory() 
  })
}

handleFile(e) {
  let file1 = e.target.files[0];
  // this.setState({ file:file1 });
//   var formData = new FormData();
// var imagefile = document.querySelector('#file').value;
// formData.append("image", imagefile.files[0]);
console.log(file1);
this.setState({file:file1})


}
postCategory=(e)=>{
  var data={
    "title_en": document.querySelector('#encategory').value,
    "title_ru":  document.querySelector('#rucategory').value,
    "title_uz":  document.querySelector('#uzcategory').value,
    "image":this.state.file
  }
  PostCategorys(data).then(res=>{
    // alert('malumot tushdi')
      this.getCategory()
  })
  this.toggle1()
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
       
              <Button color="success">edit</Button>
              <Button color="secondary ml-2" onClick={()=>this.deleteCategory(item.slug)}  >delete</Button>
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
                  <Input onInput={(e)=>this.handleFile(e)} id="file" type="file" >
                  </Input>
                </FormGroup>
              </Form>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={(e)=>this.postCategory(e)}>
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

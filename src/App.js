import GAListener from 'components/GAListener';
import { LayoutRoute, MainLayout } from 'components/Layout';
import PageSpinner from 'components/PageSpinner';
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
// import AuthForm from './components/AuthForm';
import './styles/reduction.scss';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { postContact } from './host/config';
const AlertPage = React.lazy(() => import('pages/AlertPage'));
// const AuthModalPage = React.lazy(() => import('pages/AuthModalPage'));
const BadgePage = React.lazy(() => import('pages/BadgePage'));
const ButtonGroupPage = React.lazy(() => import('pages/ButtonGroupPage'));
const Tablepage1  = React.lazy(() => import('./pages/tablepage'));

const ButtonPage = React.lazy(() => import('pages/ButtonPage'));
const CardPage = React.lazy(() => import('pages/CardPage'));
const ChartPage = React.lazy(() => import('pages/ChartPage'));
const DashboardPage = React.lazy(() => import('pages/DashboardPage'));
const DropdownPage = React.lazy(() => import('pages/DropdownPage'));
const FormPage = React.lazy(() => import('pages/FormPage'));
const InputGroupPage = React.lazy(() => import('pages/InputGroupPage'));
const ModalPage = React.lazy(() => import('pages/ModalPage'));
const ProgressPage = React.lazy(() => import('pages/ProgressPage'));
// const TablePage = React.lazy(() => import('pages/TablePage'));
const TypographyPage = React.lazy(() => import('pages/TypographyPage'));
const WidgetPage = React.lazy(() => import('pages/WidgetPage'));


class App extends React.Component {

  state={
    token:''
  }
  
    pushLogin=()=>{
      var data={
          "username":document.querySelector('#login').value,
          "password":document.querySelector('#Password').value
        }; 
       postContact(data).then(res=>{
         this.setState({token:res.data.key})
          localStorage.setItem('token',res.data.key)
         }).catch(err=>{
           console.log(err.data);
         })
   
      }
      componentDidMount(){
        // this.setState(token:localStorage.getItem('token'))
        // setTimeout(() => {
        //    localStorage.clear('token')
        // }, 100);
   console.log(localStorage.getItem('token'));    
      }
    render() {
   
      return (
     <div>
        { (!this.state.token)?(
      <div style={{width:'100vw',height:'100vh',display:'flex', justifyContent:'center',alignItems:'center' }}>
  
        <Form  style={{width:'300px'}}>
        
            <div className="text-center pb-4">
              iTeen
            </div>
        
          <FormGroup>
            <Label for="login">User Name</Label>
            <Input placeholder="your Login"  type="text" id="login" />
          </FormGroup>
          <FormGroup>
            <Label for='Password'>Password</Label>
            <Input type="password" id="Password"   placeholder='your password' />
          </FormGroup>
      
     
          <hr />
          <Button
            size="lg"
            className="bg-gradient-theme-left border-0"
            block
            onClick={()=>this.pushLogin()}>
            Login
          </Button>
  
        </Form></div>):(
      <BrowserRouter >
        <GAListener>
          <Switch>
            {/* <LayoutRoute
              exact
              path="/"
              layout={AuthForm}
            /> */}

            <MainLayout>
              <React.Suspense fallback={<PageSpinner />}>
                <Route exact path="/" component={DashboardPage} /> 
                <Route exact path="/buttons" component={ButtonPage} />
                <Route exact path="/cards" component={CardPage} />
                <Route exact path="/widgets" component={WidgetPage} />
                <Route exact path="/typography" component={TypographyPage} />
                <Route exact path="/alerts" component={AlertPage} />
                <Route exact path="/tables" component={Tablepage1} />
                <Route exact path="/badges" component={BadgePage} />
                <Route exact path="/category" component={ButtonGroupPage}/>
                <Route exact path="/dropdowns" component={DropdownPage} />
                <Route exact path="/progress" component={ProgressPage} />
                <Route exact path="/modals" component={ModalPage} />
                <Route exact path="/forms" component={FormPage} />
                <Route exact path="/input-groups" component={InputGroupPage} />
                <Route exact path="/subcategory" component={ChartPage} />
              </React.Suspense>
            </MainLayout>
            <Redirect to="/" />
          </Switch>
        </GAListener>
      </BrowserRouter>)}
      </div>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);

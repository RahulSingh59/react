import './App.css';
import  CreateUser  from './CreateUser';
import {Link, Route, BrowserRouter as Router,Switch } from "react-router-dom";
import {Navbar, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import  About  from "./About";
import  Home  from "./Home";
import  UserList  from "./UserList";
import  Feedback  from "./Feedback";


function App() {
  return (
    <>
    <Router>
    <Navbar bg="dark" variant="red">
    <Navbar.Brand href="#home"> <Link to="/home">Home</Link></Navbar.Brand>
    <Nav className="mr-auto">
    <Nav.Link href="#home"> <Link to="/about">About</Link></Nav.Link>
    <Nav.Link href="#features"> <Link to="/Userlist">UserList</Link></Nav.Link>
    <Nav.Link href="#pricing">  <Link to="/feedback">Feedback</Link></Nav.Link>
    </Nav>
    
    </Navbar>

    <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/Userlist">
            <UserList />
          </Route>
          <Route path="/feedback">
            <Feedback />
          </Route>
        </Switch>


    </Router>
 
    </>
  );
}

export default App;

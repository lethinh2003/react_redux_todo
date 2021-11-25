import './App.css';
import Nav from './views/Nav';
import Todos from './views/Todos';
import Info from './views/Info';
import React from 'react';
import Blogs from './views/Blogs';
import DetailBlogs from './views/DetailBlogs';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const info = {
    avatar: "https://lethinh2003.xyz/upload/avatar_4965.png",
    name: "Le Thinh",
    age: 18,
    school: "HCMUE",
  }
  return (
    <Router>
    <div className="App">

    <Nav />
   
    
    
      <header className="App-header">
      <Switch>
          <Route path="/" exact>
          <Info
    info={info}
     />
          </Route>
          <Route path="/blogs" exact>
          <Blogs />
          </Route>
          <Route path="/blogs/:id" exact>
          <DetailBlogs />
          </Route>
          <Route path="/todos">
          <Todos />
          </Route>
        </Switch>
   

     
     
      

     
      </header>
    </div>
    </Router>
  );
}

export default App;
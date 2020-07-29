import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../Component/Home';
import Contact from '../Component/Contact';
import About from '../Component/About';
import '../css/main.css';
function Menu(){
    return(
        <div>
            <Router>
                <nav>
                    <ul>
                        <li><Link to={'/'} className="link">Home</Link></li>
                        <li><Link to={'/Contact'} className="link">Contact</Link></li>
                        <li><Link to={'/About'} className="link">About</Link></li>
                       
                    </ul>
                </nav>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/Contact' component={Contact} />
                <Route path='/About' component={About} />
             </Switch>
            </Router>
        </div>
    );
}
export default Menu;
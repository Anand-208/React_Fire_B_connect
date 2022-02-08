import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link class="navbar-brand" to = {"/"}>Student</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" exact to = {"/"}>Home</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" exact to = {"/student"}>Add </Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" exact to = {"/view"}>View </Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" exact to = {"/search"}>Search </Link>
                        </li>
                
                    </ul>
                    </div>
                </div>
            </nav>
         );
    }
}
 
export default Navbar;
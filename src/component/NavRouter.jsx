import React, { Component } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Student from './student';
import View from './View';
import Update from './Update';
import {Route, Routes } from "react-router-dom";
import Search from './Search';
class NavRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/student" element={<Student/>}/>
                    <Route path="/view" element={<View/>}/>
                    <Route path="/update/:updateid" element={<Update/>}/>
                    <Route path="/search" element={<Search/>}/>
                </Routes>

            </div>
         );
    }
}
 
export default NavRouter;
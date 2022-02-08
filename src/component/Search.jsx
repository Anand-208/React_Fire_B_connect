import React from "react";
import database from "../firebase";
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            studentid:"",
            sdata:[],
            view:[],
         }
    }

    searchStudentHandler=(event)=>{
        if(event.target.name==="studentid")

        {
            this.setState({studentid:event.target.value})
        }
    }

    searchSubmitHandler=(event)=>{
        event.preventDefault();
        console.log(this.state.studentid);
        database.ref("Student").child(this.state.studentid).on("value",snapshot=>{
            let list=[]
            snapshot.forEach(snap=>{
                list.push(snap.val())
            })
            console.log(list)
            this.setState({sdata:list});
        })
        database.ref("Student").child(this.state.studentid).child("MonthlyFeeStatus").on("value",snapshot=>{
            let list=[]
            snapshot.forEach(snap=>{
                list.push(snap.val())
            })
            console.log(list)
            this.setState({view:list});
        })
    }
    render() { 
        var finddata;
        this.state.sdata.length===0 ?
            finddata=""
            :
            
               finddata= <div className="row">
                    
                    <div className="col-4"></div>
                <div className="col-4">
                    <div className="card m-2">
                        <div className="card-header">
                            
                            <h3 class="text-center alert alert-primary">Student </h3>
                        </div>
                        
                            <div className="card-body">

                                <div className="row">
                                    <div className="col-auto">
                                        <h4> Name: </h4>
                                    </div>
                                    <div className="col-auto">
                                        <h6>{this.state.sdata[1]}</h6>    
                                    </div>
                                <div className="row" >
                                    <div className="col-6">
                                        <h4> Roll No: </h4>
                                    </div>
                                    <div className="col-6">
                                        <h6>{this.state.sdata[2]}</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-auto">
                                        <h4> Class: </h4>
                                     </div>
                                     <div className="col-auto">
                                        <h6>{this.state.sdata[0]}</h6>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
             
        
        return ( 
            <div>
            <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
                <div className="card m-2">
                    <div className="card-header">
                        <h3 class="text-center alert alert-primary">Search</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.searchSubmitHandler}>
                            <div className="row">
                                <div className="col-9">
                                    <input class="form-control mr-sm-2" type="search" placeholder="Search" name="studentid" aria-label="Search"  value={this.state.studentid} onChange={this.searchStudentHandler}/>
                                </div>
                                <div className="col-3 0">
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><i class="fa fa-search"  onClick={this.searchSubmitHandler}></i>Search</button>                 </div>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
        <div>
        {finddata}
        </div>
        </div>
         );
    }
}
 
export default Search;
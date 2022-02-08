import React from 'react';
import swal from 'sweetalert';
import database from '../firebase';

class Student extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            studentName:"",
            studentRollNo:"",
            studentClass:""
        }
    }

    inputHandler=(event)=>{
        if(event.target.name==="studentName")
        {
            this.setState({studentName:event.target.value})
        }
        else
        if(event.target.name==="studentRollNo")
        {
            this.setState({studentRollNo:event.target.value})
        }
        else
        if(event.target.name==="studentClass")
        {
            this.setState({studentClass:event.target.value})
        }
}

submitHandler=(event)=>
{
    event.preventDefault();
    alert(" Name: "+this.state.studentName+" Roll: "+this.state.studentRollNo+"  Class: "+this.state.studentClass);
    database.ref("Student").child(this.state.studentRollNo).set({
        studentName:this.state.studentName,
        studentRollNo:this.state.studentRollNo,
        studentClass:this.state.studentClass,
    }).then(msg=>{
        swal({
            title: this.state.studentName,
            text: "Data has been saved successfully...",
            icon: "success",
            button: "Close",
          });
        this.setState({
            studentName:"",
            studentRollNo:"",
            studentClass:"",
            
        })
    })

}

    render() { 
        return (
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                    <div className="card m-2">
                        <div className="card-header">
                            
                            <h3 class="text-center alert alert-primary">Add New Student</h3>
                        </div>
                        <form onSubmit={this.submitHandler}>
                            <div className="card-body">

                                <div className="row">
                                    <div className='col-4'>
                                        <center><i><h4> Name </h4></i></center>
                                    </div>
                                    <div className='col-8'>
                                     <input type="text" className="form-control" name="studentName" value={this.state.studentName} onChange={this.inputHandler} placeholder="Enter Student Name" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className='col-4'>
                                        <center><i><h4> Roll No </h4></i></center>
                                    </div>
                                    <div className='col-8'>
                                    <input type="number" className="form-control" name="studentRollNo"  value={this.state.studentRollNo} onChange={this.inputHandler} placeholder="Enter Student Roll No" />
                                    </div>
                                    
                                </div>
                                <div className="row">
                                    <div className='col-4'>
                                        <center><i><h4> Class  </h4></i></center>
                                    </div>
                                    <div className='col-8'>
                                        <input type="text" className="form-control" name="studentClass" value={this.state.studentClass}  onChange={this.inputHandler} placeholder="Enter Class" />
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer text-center bg-blue">
                                <button type="submit" class="btn btn-success">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Student;
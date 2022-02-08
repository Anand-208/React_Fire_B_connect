import React from 'react';
import swal from 'sweetalert';
import database from '../firebase';
import View from './View';

class Update extends React.Component {
    constructor(params) {
        super(params);
        console.log(params);
        this.state = { 
            studentName:"",
            studentRollNo:"",
            studentClass:"",
            updaterollno:params.id,
        }
    }
    componentDidMount(){
        database.ref("Student").child(this.state.updaterollno).on("value",snapshot=>{
            this.setState({studentName:snapshot.val().studentName, studentRollNo:snapshot.val().studentRollNo, studentClass:snapshot.val().studentClass})
        })
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

    //database().ref('Student').update({studentName:'inputHander'})


submitHandler=(event)=>
{
    event.preventDefault();
    //alert(" Name: "+this.state.studentName+" Roll: "+this.state.studentRollNo+"  Class: "+this.state.studentClass);
    database.ref("Student").child(this.state.updaterollno).set({
        studentName:this.state.studentName,
        studentRollNo:this.state.studentRollNo,
        studentClass:this.state.studentClass,
    }).then(msg=>{
        swal({
            title: this.state.studentName,
            text: "Data has been updated successfully...",
            icon: "success",
            button: "Close",
          });
        
        this.setState({
            studentName:"",
            studentRollNo:"",
            studentClass:"",
            updaterollno:"",
            
        })
    })

}

    render() { 
        if(this.state.updaterollno==="")
        {
            return <View/>
        }
        else
        return (
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                    <div className="card m-2">
                        <div className="card-header">
                            
                            <h3 class="text-center alert alert-primary">Update Student Detail</h3>
                        </div>
                        <form onSubmit={this.submitHandler}>
                            <div className="card-body">

                                <div className="form-group">
                                    <center><i><h4> Name </h4></i></center>
                                    <input type="text" className="form-control" name="studentName" value={this.state.studentName} onChange={this.inputHandler} placeholder="Enter Student Name" />
                                </div>
                                <div className="form-group">
                                    <center><i><h4> Roll No </h4></i></center>
                                    <input type="number" className="form-control" name="studentRollNo"  value={this.state.studentRollNo} onChange={this.inputHandler} placeholder="Enter Student Roll No" />
                                </div>
                                <div className="form-group">
                                    <center><i><h4> Class  </h4></i></center>
                                    <input type="text" className="form-control" name="studentClass" value={this.state.studentClass}  onChange={this.inputHandler} placeholder="Enter Class" />
                                </div>
                            </div>
                            <div className="card-footer text-center bg-warning">
                                <button type="submit" class="btn btn-success">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Update;
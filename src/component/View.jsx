import React  from 'react';
//import BtnPopup from './BtnPopup';
import { Navigate } from "react-router-dom"
import Update from './Update';
import swal from 'sweetalert';
import firebase from 'firebase';

class View extends React.Component {
    constructor(props) {
        super(props);
        this.state =  { 
            studentslist : [],
            //updateid:target.id,
         }
         
   
    }
    
    componentDidMount() {
        firebase.database().ref("Student").on("value", snapshot => {
          let studentlist = [];
          snapshot.forEach(snap => {
              // snap.val() is the dictionary with all your keys/values from the 'students-list' path
              studentlist.push(snap.val());
          });
          this.setState({ studentslist: studentlist });
        });
    }

    actionHandler =(event)=>{
        
        swal("What do you want to do ?", {
            buttons: {
              update: "Update",
              catch: {
                text: "Delete",
                value: "catch",
              },
              cancel: true,
            },
          })
          .then((value) => {
            switch (value) {
           
              
              case "catch":
                swal({
                  title: "Are you sure?",
                  text: "Once deleted, You will not be able to recover this Data!",
                  icon: "warning",
                  buttons: true,
                  dangerMode: true,
                })
                .then((willDelete) => {
                  if (willDelete) {
                    firebase.database().ref("Student").child(event.target.id).remove().then(msg=>{
                      swal("Deleted! Your Data has been deleted!", {
                        icon: "success",
                      });
                    })
                    
                  } else {
                    swal("Your Data is safe!");
                  }
                });
                break;
           
              case "update":
                this.setState({updateid:event.target.id});
                break;
           
              default:
                swal("Retun to Page..");
            }
          });
          
    }


    render() { 
      if(this.state.updateid)
      {
        return <Update id={this.state.updateid}/>
      }
      else
        return ( 
            <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
                <div className="card m-2">
                    <div className="card-header">
                        <h3 class="text-center alert alert-primary">Record of Students</h3>
                    </div> 
                </div>
                <div className='card-body'>
                    <table class="table table-striped">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Class</th>
                            <th>Roll</th>
                            <th>Action</th>
                        </tr>
                        </thead> 
                        <tbody>
                            {this.state.studentslist.map(data => {
                                
                                return (
                                    <tr>     
                                    <td>{data.studentName}</td>
                                    <td>{data.studentClass}</td>
                                    <td>{data.studentRollNo}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={this.actionHandler} id={data.studentRollNo}>U & D</button>
                                        
                                    </td>
                                    </tr>
                                    
                                );
                            
                                })}
                        
                            
                        </tbody>
                    </table> 

                </div>
            </div>
        </div>
         );
    }
}
 
export default View;
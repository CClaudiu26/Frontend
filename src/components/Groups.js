import React, { useState, useEffect } from "react";
import Navbar from './Navbar'
import axios from '../axios'
import Tree from './Tree/tree'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/button'


var arrayToTree = require('array-to-tree');


const Groups = () => {

    const [groups, setGroups] = useState([]);
    const [users, setUser] = useState([]);

    const [name, setNewdepartment] = useState ('');
    const [pdepartment, setPrimarydepartment] = useState('');
    const [id,setId] = useState(0);
    const [checkname, setCheckname] = useState('');

    const [lastid, setLastid] = useState(0);
    const [lastdepartment, setLastdepartment] = useState('');
   
   
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [edit,setEdit] =useState(false);
    const editClose = () => setEdit(false);
    const editShow = () => setEdit(true);


    const [move,setMove] =useState(false);
    const moveClose = () => setMove(false);
    const moveShow = () => setMove(true);

    const [save,setSave] =useState(false);
    const saveClose = () => setSave(false);
    const saveShow = () => setSave(true);

    const [details, setDetails] = useState (false);
    const detailsClose = () => setDetails(false);
    const detailsShow = () => setDetails(true);

    const [showtree, setShowtree] = useState(false);
    const treeClose = () => setShowtree(false);
    
    const treedata =[];
    const treedata1 = [];
   
    //Set the Tree Data array
    treedata.length = 0;
       groups.map (group => {
         treedata.push ({id :group.name, label:group.name,  parent: group.pdepartment});
       });
 
       Array.prototype.push.apply(treedata1, arrayToTree(treedata, {
         parentProperty: 'parent',
         customID: 'id'
       }) );

 
  
  
    

       //Get Users
    useEffect ( () => {
        axios.get("/")
        .then ( (response) =>{
            console.log("success");
            setUser(response.data);
        });

    }, []);


    //Get Departments
    useEffect ( () => {
        axios.get("/Departments")
        .then ( (response) =>{
            console.log("success");
            setGroups(response.data);
        });

    }, []);



    //Add Department
    const addDepartment = () =>  {
        axios.post('/createdepartment', {
            
            name:name,
            pdepartment:pdepartment,
        }).then ( () => {
            setGroups( [...groups, {
                id:groups.length+1,
                name:name,
                pdepartment:pdepartment,
               }])
        });

        setShow(false);
        
    };

    //Take the data when you want to Edit the name
    const takedata = (id) =>{
        editShow(true);
        for ( var i=0; i<groups.length;i++){
            if (groups[i].idd == id){
                setCheckname(groups[i].name)
                setNewdepartment (groups[i].name);
                setId(groups[i].idd);
                setPrimarydepartment(groups[i].pdepartment);
            }
        }
        
    }

    //Take the data when you want to see the Details
    const takedetails = (id) =>{
        detailsShow(true);
        for ( var i=0; i<groups.length;i++){
            if (groups[i].idd == id){
                setNewdepartment (groups[i].name);
                setId(groups[i].idd);
                setPrimarydepartment(groups[i].pdepartment);
            }
        }
        
    }

    //Take data when you want to move the department
    const takedepartment = (id) =>{
        moveShow(true);
        for ( var i=0; i<groups.length;i++){
            if (groups[i].idd == id){
                setNewdepartment (groups[i].name);
                setId(groups[i].idd);
                setPrimarydepartment(groups[i].pdepartment);
            }
        }
        
    }

    //Edit name department
    const editNamedepartment = () => {
        const changename = checkname;

        axios.put('/updatedepartment', {
            checkname:checkname,
            name:name,
            id:id,

        }).then (() => {
            setGroups(groups.map ((group) => {
                return group.idd == id ? Object.assign( {}, group, {name:name}) 
                : group.pdepartment == changename ? Object.assign( {}, group, {pdepartment:name})
                : group;
            }))


            setUser(users.map ((user) => {
                return user.department == changename? Object.assign( {}, user, {department:name}) : user;
            }))

       

        });

     

        setEdit(false);

    }

 

    
    //Function to set Primary Department
    const movedepartment = () => {
     
      
        groups.filter(group => group.idd == id).map(group => (
            setLastdepartment(group.pdepartment)
        ));
        groups.filter(group => group.name == pdepartment).map(group => (
            setLastid(group.idd)
        ));


    
       
        

        setMove(false);
        setSave(true);

    }


    //Function to find the children array
    const find = (array, id) => {
      var result;
      array.some(o => result = o.id === id ? o : find(o.children || [], id));
      return result;
  };
    

    //Move the department
    const movedepartmentfinal = () => {
      var result =[];
      var finalresult = [];
      
       
        result.push( find(treedata1, name));
        finalresult.push(find(result, pdepartment));

        if ( typeof finalresult[0] == 'undefined' ) {

        axios.put('/movedepartment', {
            pdepartment:pdepartment,
            id:id,
            lastdepartment:lastdepartment,
            lastid,
           

        }).then (() => {
            setGroups(groups.map ((group) => {
                return group.idd == id ? {
                    idd:id,
                    pdepartment:pdepartment,
                    name:name,

                }  : group
            }))
        });

      }else{

        alert("Error 50. Can't move this Department");
      }


        
 
     
        setSave(false);
    }
   
    
    const detailsshow = () => {
        setDetails(true);
    };


  

    const treeShow = () => {
         
      setShowtree(true)
      console.log(treedata1);

    };

   
    
  

 

  


  
  return (
      

    <div>
        
<Navbar handleShow = {handleShow} treeShow = {treeShow}/>

    
    <div className="container">
       
      <div className="py-4">
        <h1>Departments</h1>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>

              <th scope="col">Department Name</th>
              
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {groups.map((group, index) => (
              <tr>
                <td>{group.name}</td>
              
                <td>
                  <Button className="btn btn-primary mr-2" 
                   onClick = {() => takedetails(group.idd)}>
                    Details
                    
                  </Button>


                  <Button
                    className="btn btn-outline mr-2"
                    onClick = {() => takedata(group.idd)}
                  >
                    Edit
                  </Button>

                  <Button
                    className="btn btn-outline mr-2"
                    onClick = {() => takedepartment(group.idd)}
                  >
                    Move
                  </Button>

                  
                
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>



    
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD DEPARTMENT</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form.Group >
              <Form.Label>Department Name </Form.Label>
              <Form.Control type="text" placeholder="Department Name"  onChange = {(event) => { setNewdepartment(event.target.value)}}/>     

              </Form.Group>

            

                <Form.Group>

                <Form.Label>Where do you want to introduce this Department? </Form.Label>
                <Form.Control as="select" onChange = {(event) => { setPrimarydepartment(event.target.value)}} >
                    <option></option>
                {groups.map ((group) => (
                    <option>{group.name}</option>
                ))}
                 </Form.Control>
                
                
                </Form.Group>
           
         


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addDepartment}>
            Add Departments
          </Button>
        </Modal.Footer>
      </Modal>




      <Modal show={edit} onHide={editClose}>
        <Modal.Header closeButton>
          <Modal.Title>EDIT DEPARTMENT</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form.Group >
              <Form.Label>Department Name </Form.Label>
              <Form.Control type="text" value = {name} onChange = {(event) => { setNewdepartment(event.target.value)}}/>     

              </Form.Group>
           

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={editClose}>
            Close
          </Button>
          <Button variant="primary" onClick={editNamedepartment}>
            Edit Department
          </Button>
        </Modal.Footer>
      </Modal>




      <Modal show={move} onHide={moveClose}>
        <Modal.Header closeButton>
          <Modal.Title>MOVE DEPARTMENT</Modal.Title>
        </Modal.Header>
        <Modal.Body>

       
              <Form.Group>

                <Form.Label>Where do you want to move this Department? </Form.Label>
                <Form.Control as="select" defaultValue = {pdepartment} onChange = {(event) => {
        
                     setPrimarydepartment(event.target.value)}} >
                    <option></option>
                {groups.filter(group => group.idd != id).map(group => (
                    <option>{group.name}</option>
                ))}
                 </Form.Control>
                
                
                </Form.Group>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={moveClose}>
            Close
          </Button>
          <Button variant="primary" onClick={movedepartment}>
            Move Department
          </Button>
        </Modal.Footer>
      </Modal>


      <Modal show={save} onHide={saveClose}>
        <Modal.Header closeButton>
          <Modal.Title>WARNING</Modal.Title>
        </Modal.Header>
        <Modal.Body>

       
           Are you sure you want to move this group?

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={saveClose}>
            NO
          </Button>
          <Button variant="primary" onClick={movedepartmentfinal}>
            YES
          </Button>
        </Modal.Footer>
      </Modal>




      <Modal show={details} onHide={detailsClose}>
        <Modal.Header closeButton>
          <Modal.Title>DETAILS</Modal.Title>
        </Modal.Header>
        <Modal.Body>

                    <h4>Users in this Department: </h4>
                    
                    {users.filter(user=> user.department == name).map(user => (
                        <p style = {{marginLeft: '10px', fontWeight:500, fontSize:'18px'}}>{user.lastName}    {user.firstName} </p>

                  
                ))}

                <br></br>

                    <h4>Departments inside: </h4>
                    {groups.filter(group => group.pdepartment == name).map(group => (
                      <p  style = {{marginLeft: '10px', fontWeight:500, fontSize:'18px'}} >{group.name}</p>
                ))}
                        

                    

        </Modal.Body>
        <Modal.Footer>
         
          <Button variant="primary" onClick = {detailsClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>



     <Modal show={showtree} onHide={treeClose}>
        <Modal.Header closeButton>
          <Modal.Title>Departments Tree</Modal.Title>
        </Modal.Header>
        <Modal.Body>

  

        <div className="row">
        <div className="col text-center">
    
          <p className="mt-3">
            <div className="row mt-3 d-flex justify-content-center">
              <div className="col-lg-8 text-left text-dark">
                <Tree data={treedata1} />
              </div>
            </div>
          </p>
        </div>
      </div>
         


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={treeClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>

      

   </div>
  );
};

export default Groups;
import React,{useEffect,useState} from "react";
import Axios from 'axios'
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';



function Activity_view(){
  const [Name, setName]=useState('');
  const [New,setnew]=useState('ghyt');
  
  var temp=[];
  console.log("before temp");
  var responses=[];
  const a=6;
  var Activities;
  /*const[temp,stemp]=useState([{Activity_Category: "Adventure",
  Activity_City: "Canacona",
  Activity_District: "South Goa",
  Activity_ID: 1,
  Activity_Name: "surfing",
  Activity_Time: 3,
  Price: 2000}])*/
  
  useEffect(() => {

    Axios.get("http://localhost:3001/temp").then((response) => {
      //console.log(response.data[0].username);
      console.log("inside temp");
      setName(response.data[0].username);
      console.log("inside temp :" + Name);
      var name2=response.data[0].username;


    });
  }, []);

  
  const view_activities = () => {
    console.log("Inside functions");
    Axios.post("http://localhost:3001/get_activities", {
      username:Name,
    }).then((response) => {
      console.log("inside response ")
      console.log(response);
      Activities=response.data;
      console.log(Activities[0].activities);
      seperate_activities(Activities[0].activities);
    });
  }

  const seperate_activities=async(activities)=>{
    var newString = activities.split(",");
    console.log("newString is : " +newString);
    
    var i;
    for(i=0;i<newString.length;i++){
      console.log("iteration" + i);
      console.log(newString[i]);
      const myobject={
        activity:newString[i],
      }
      
      responses.push(await Axios.post("http://localhost:3001/get_activities_details",myobject));
      console.log(responses);
      console.log(responses.length);
     
    }
    temp=responses;
    console.log(responses[0].data[0]);
    console.log(temp);
    console.log(temp.length);
    alert("end reached");
    //get_activities_total(temp);
  }
  console.log("outside");
 
 function get_activities_total(temp){
    const total=0;
    console.log(temp);
    var i;
    for(i=0;i<temp.length;i++){
      total=total+temp[i].data[0].Price;
      console.log("total is : "+total);
    }
    console.log(total);

 }
  /* var employeeslist = [
    {
        "Id": 1,
        "EmployeeName": "Jimmy",
        "EmployeeSalary": "$3200",
        "Adress": "Amsterdam, Netherlands"
    },
    {
        "Id": 3,
        "EmployeeName": "Mark",
        "EmployeeSalary": "$2000",
        "Adress": "France, Paris"
    },
    {
        "Id": 1005,
        "EmployeeName": "Johny",
        "EmployeeSalary": "$2500",
        "Adress": "Usa,New York"
    },
    {
        "Id": 1007,
        "EmployeeName": "Alex",
        "EmployeeSalary": "$3000",
        "Adress": "Usa,New York"
    }
];*/
 /* 
  return(
    <>
    <div>
    <Button onClick={view_activities()}></Button>
    </div>
    </>

  )*/

   return (<div>
      <Button onClick={view_activities()}></Button>
        <h2>Activity List</h2>
        <div><h1>{temp.length}</h1></div>
        
        <table className="table">
            <thead>
                <tr>
                    <th>Activity Id</th>
                    <th>Activity Name</th>
                    <th>Activity Duration</th>
                    <th>Activity Category</th>
                    <th>Activity price</th>
                </tr>
            </thead>
            <tbody>
                {temp.map(activity => (
                    <tr key={activity}>
                        <td>{activity}</td>
                        <td>{activity.data[0].Activity_Name}</td>
                        <td>{activity.data[0].Activity_Time}</td>
                        <td>{activity.data[0].Activity_Category}</td>
                        <td>{activity.data[0].Price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>)

}
/*function getLength(){
  const l=responses.length;
  console.log(l);
  return l;

}
var len;

if (employeeslist && employeeslist.length > 0) {
  return (<div>
    <Button onClick={view_activities()}></Button>
      <h2>Employees List</h2>
      <div>{len=getLength()}</div>
      <div>{len}</div>
      <table className="table" >
          <thead>
              <tr>
                  <th>Employee Id</th>
                  <th>Name</th>
                  <th>Salary</th>
                  <th>Address</th>
              </tr>
          </thead>
          <tbody>
              {employeeslist.map(emp => (
                  <tr key={emp.Id}>
                      <td>{emp.Id}</td>
                      <td>{emp.EmployeeName}</td>
                      <td>{emp.EmployeeSalary}</td>
                      <td>{emp.Adress}</td>
                  </tr>
              ))}
          </tbody>
      </table>
  </div>)
}
else {
  return (<div>No Record Found</div>)
}
}*/
export default Activity_view;
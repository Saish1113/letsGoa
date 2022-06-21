import React,{useEffect,useState} from "react";
import Axios from 'axios'
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';



function Activity_view(){
  const [Name, setName]=useState('');
  const [Temp,settemp]=useState([]);
  const [Act,Setactivities]=useState('');
  const [Activity_total,Setactivity_total]=useState('');

  useEffect(() => {

    Axios.get("http://localhost:3001/temp").then((response) => {
      //console.log(response.data[0].username);
      console.log("inside temp");
      setName(response.data[0].username);
      console.log("inside temp :" + Name);
      //var name2=response.data[0].username;

    });
  }, []);

  useEffect(() => {
    if (Name === '') return;
    console.log("Inside functions");
    Axios.post("http://localhost:3001/get_activities", {
      username:Name,
    }).then((response) => {
      console.log("inside response ")
      console.log(response);
      var Activities=response.data;
      Setactivities(Activities[0].activities);
      console.log(Activities[0].activities);
      //seperate_activities(Activities[0].activities);
    });
}, [Name]);


useEffect(() => {
    if (Act === '') return;
    console.log(Act);
    var newString = Act.split(",");
    console.log("newString is : " +newString);
    
    //Capture promises of all requests to read the data
    var promises = [];
    var i;
    
    for(i=0;i<newString.length;i++){
      console.log("iteration" + i);
      console.log(newString[i]);
      const myobject={
        activity:newString[i],
      }
      
      promises.push(Axios.post("http://localhost:3001/get_activities_details",myobject)
      .then((res) => res.data[0]));
    }

    Promise.all(promises)
    .then((data) => {
        settemp(data)
        console.log("Got data", data)
    })
    .catch((e)=>console.error(e));
}, [Act]);

 // console.log("outside");
 
 useEffect(() => {
    var total=0;
    var i;
    for(i=0;i<Temp.length;i++){
      total=total+Temp[i].Price;
      console.log("total is : "+total);
    }
    console.log(total);
    Setactivity_total(total);

}, [Temp]);
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
    <h1>{console.log("tmp", Temp)}{Temp.map(elem => (
        <div>{(elem && elem.Price) || "test"}</div>
    ))}</h1>
    </div>
    </>

  )
*/
   return (<div>
        <h2>Activity List</h2>
        
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
                {Temp.map(activity => (
                    <tr key={activity.Activity_ID}>
                        <td>{activity.Activity_ID}</td>
                        <td>{activity.Activity_Name}</td>
                        <td>{activity.Activity_Time}</td>
                        <td>{activity.Activity_Category}</td>
                        <td>{activity.Price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
       Total Activity Price:  {Activity_total}
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
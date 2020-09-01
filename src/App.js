import React, {useState, useEffect} from 'react';
import './App.css';
import { Card, CardContent} from "@material-ui/core";
import Table from './Table.js'


function App() {

  // const [menus, setMenus] = useState({});
  const [tableData, setTableData] = useState([]);

  useEffect(()=>{
    
       fetch("https://us-central1-fir-func-api-spdora.cloudfunctions.net/starter_v/")
      .then(res => res.json())
      .then(data => {
        // setMenus(data)
        setTableData(data);
      })
    
   
  
  }, [])

  return (
    <div className="App">
      <h1>Project to consume REST API</h1>
      <Card className="app__right">
        <CardContent>
     
          <Table items = {tableData}/>
         
        </CardContent>

    </Card>
    </div>
  );
}

export default App;

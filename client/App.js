import React, {useState, useEffect} from "react";
import Land from "./Land";
import Scrollbar from "./Scrollbar";
import DashboardLayout from "./Component/DashBoard/Layout";

function App(props) {
    const [list, setList] = useState([]);
    const getList = ()=>{
        fetch('/api/test').then((res)=>
            res.json()
        ).then(data=>setList(data)).catch(err=>console.log(err))
    }
    useEffect(()=>{
        getList();
    }, [])
    return (
       <div>
           {list.length > 0 ? list.map((item, index)=>(
               <h2 key={index}>{item}</h2>
           )):
           <h1>No items</h1>}
       </div>
    );
};

export default App;
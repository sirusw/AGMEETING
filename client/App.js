import React, {useState, useEffect} from "react";
import Land from "./Land";
import Scrollbar from "./Scrollbar";
import DashboardLayout from "./Component/DashBoard/Layout";
import Agenda from "./Component/Test2";

function App(props) {
    //Use state hook, used to initialize a state variable for a component, basically some attribute of the component, and a function to set the state of that variable
    const [list, setList] = useState([]);
    //can write functions like normal
    const getList = ()=>{
        fetch('/api/test').then((res)=>
            res.json()
        ).then(data=>setList(data)).catch(err=>console.log(err))
    }
    //useEffect hook will run when the component(s) specified in the second argument are rendered on the DOM in this case its an empty array meaning the useEffect callback will run once when the App component is rendered
    useEffect(()=>{
        getList();
    }, [])
    const sayHello = ()=>{
        console.log("hello from App");
    }
    return (
        /*you can either return html in a component, or other components*/
       <div>
           <Agenda />
       </div>
    );
};

export default App;
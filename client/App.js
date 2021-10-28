import React, {useState, useEffect} from "react";
import Land from "./Land";
import Scrollbar from "./Scrollbar";
import DashboardLayout from "./Component/DashBoard/Layout";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App(props) {
    //Use state hook, used to initialize a state variable for a component, basically some attribute of the component, and a function to set the state of that variable
    // const [list, setList] = useState([]);
    //can write functions like normal
    // const getList = ()=>{
    //     fetch('/api/test').then((res)=>
    //         res.json()
    //     ).then(data=>setList(data)).catch(err=>console.log(err))
    // }
    //useEffect hook will run when the component(s) specified in the second argument are rendered on the DOM in this case its an empty array meaning the useEffect callback will run once when the App component is rendered
    // useEffect(()=>{
    //     getList();
    // }, [])
    // const sayHello = ()=>{
    //     console.log("hello from App");
    // }
    return (
        /*you can either return html in a component, or other components*/
        //    <div>
        //        {list.length > 0 ? list.map((item, index)=>(
        //            <h2 key={index}>{item}</h2>
        //        )):
        //        <h1>No items</h1>}
        //        {/*pass whatever you want into components using props. These can be functions, strings, numbers, variables whatever you want.*/}
        //        <Land sayHello={sayHello} anotherProp={"prop2"}></Land>
        //    </div>
        <div>
            <Link to='/dashboard'>dashboard</Link>
        </div>
    );
};

export default App;
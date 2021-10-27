import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import DashboardLayout from "./Component/DashBoard/Layout";

/*remember to add the props as a function parameter to you functional component if you wanna access the props*/
/*you can look at the react documentation if you wanna learn about regular react components vs functional components*/
function Land(props) {
    return (
        /*you can write javascript between curly braces, it will take a bit of getting used to*/
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1>
                LANDING PAGE!
            </h1>
            <h3>
                {props.anotherProp}
            </h3>
            <h4>
                {/*check if the props exists*/props.testProp&&props.testProp}
            </h4>
            <button onClick={()=>{props.sayHello(); console.log("hello from within Land component")}}>Say Hello</button>
        </>
    );
};

export default Land;
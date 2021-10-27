import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import DashboardLayout from "./Component/DashBoard/Layout";

function Land() {
    const [setList, list] = useState([]);
    const getList = ()=>{
        fetch('/api/getList').then((res)=>{
            console.log(res)
            setList(res.json())
        }).then
    }
    useEffect(()=>{
        console.log("here");
        getList();
    }, [])
    return (
        <>
            {/* <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1>
                LANDING PAGE!
            </h1> */}
            {list.map((item)=>{
                return(
                    <h2>{item}</h2>
                )
            })}
        </>
    );
};

export default Land;
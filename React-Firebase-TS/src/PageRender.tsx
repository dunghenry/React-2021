import { useParams } from "react-router-dom";
import { IParams } from "./types";
import React from 'react';
const generatePage = (name : string) => {
    const page = () => require(`./pages/${name}`).default;
    // console.log(page);
    try {
        return React.createElement(page());
    } catch (error) {
        return <h2>Page Not Found</h2>
    } 
}

const PageRender = () => {
    const {page, id} : IParams = useParams();
    let name = '';
    if(page){
        name = id ? `${page}/${id}` : `${page}`
    }
    // console.log(name);

    return generatePage(name)
}

export default PageRender;

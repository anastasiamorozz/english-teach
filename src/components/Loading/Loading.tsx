import React from "react";
import ReactLoading from "react-loading";
import './Loading.css';
 
export default function Loading() {
    return (
        <div className="loading">
            <ReactLoading type="spin" color="#23856D"
                height={100} width={50} />
        </div>
    );
}
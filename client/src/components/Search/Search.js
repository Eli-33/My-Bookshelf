import React from 'react'
import "./style.css";

export function Input(props) {
    return (
        <div className="form-group col-sm-8 mx-auto">
            <input className="form-control" {...props} />
        </div>
    )
}

export function SearchBtn(props) {
    return (
        <button {...props} className="btn submitBtn "
         style={{backgroundColor: "#2196f3", color: "white", marginBottom: "10px", float: "right", marginRight: "100px"}}>
             Search
        </button>
    )
}
export function SubmitBtn(props) {
    return (
        <button {...props} className="btn submitBtn "
         style={{backgroundColor: "#2196f3", color: "white", marginBottom: "10px", float: "right", marginRight: "100px"}}>
             submit
        </button>
    )
}

export function TextArea(props) {
    return (
      <div className="form-group">
        <textarea className="form-control" rows="20" {...props} />
      </div>
    );
  }

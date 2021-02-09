import React, { Component } from 'react';
import { saveBook } from '../../actions/bookActions';
// import Link from 'react-router-dom'
// import API from "../../utils/api/api";


class ResultListItem extends Component {

    state = {
         WannaRead: {
            saved: false,
            bgColor: "blue",
            color: "white",
            text:"Wanna Read"
        },
        CurrentlyReading: {
            saved: false,
            bgColor: "blue",
            color: "white",
            text:"Currently Reading"
        },
        Read: {
            saved: false,
            bgColor: "blue",
            color: "white",
            text:"Read"
        }
    }

    updateWantToRead = () => {
        this.setState({
            WannaRead: {
                saved: true,
                bgColor: "#00E000",
                color: "white",
                text: "Saved"
            }
        })
        console.log("Mounted!")
    }

    updateCurrentlyReading = () => {
        this.setState({
            CurrentlyReading: {
                saved: true,
                bgColor: "#00E000",
                color: "white",
                text: "Saved"
            }
        })
        console.log("Mounted!")
    }

    updateRead = () => {
        this.setState({
            Read: {
                saved: true,
                bgColor: "#00E000",
                color: "white",
                text: "Saved"
            }
        })
        console.log("Mounted!")
    }



    onClickFuncWant = () => {
        if (!this.state.WannaRead.saved) {
            saveBook(this.props, 'WannaRead').then(() => {
                this.updateWantToRead() 
            })
        }
        
    }

    onClickFuncCurrent = () => {
        if (!this.state.CurrentlyReading.saved) {
            saveBook(this.props, 'CurrentlyReading').then((res) => {
                this.updateCurrentlyReading()
            })
        }
    }

    onClickFuncRead = () => {
        if (!this.state.Read.saved) {
            saveBook(this.props, 'Read').then(() => {
                this.updateRead()
            })
        }
    }


    render () {


        return (

            <div>
                <div className="card">
                    <div className="card-header"></div>
                    <div className="card-body">
                        <img src={this.props.image} style={{maxWidth: "100px"}} alt="book"/>
                        <h5 className="card-title" style={{margin: "10px 0"}}>{this.props.title}</h5>
                        <p className="card-text" >{this.props.description}</p>
                        <p style={{fontStyle: "italic"}}>Author(s): {this.props.authors}</p>
                        <a href={this.props.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginRight: "6px" }}>View Book</a>

                           {/* WannaRead Btn */}
                        <button 
                        onClick={this.onClickFuncWant} 
                        style={{ backgroundColor: this.state.WannaRead.bgColor, color: this.state.WannaRead.color }} 
                        className="btn">
                            {this.state.WannaRead.text}
                        </button>

                            {/* CurrentlyReading Btn */}
                        <button 
                        onClick={this.onClickFuncCurrent} 
                        style={{ backgroundColor: this.state.CurrentlyReading.bgColor, color: this.state.CurrentlyReading.color }} 
                        className="btn">
                            {this.state.CurrentlyReading.text}
                        </button>
             
                            {/* Read Btn */}
                        <button onClick={this.onClickFuncRead} 
                        style={{ backgroundColor: this.state.Read.bgColor, color: this.state.Read.color }} 
                        className="btn">
                            {this.state.Read.text}
                        </button>
                   </div>
                </div>
            </div>
        )
    }

}

export default ResultListItem;

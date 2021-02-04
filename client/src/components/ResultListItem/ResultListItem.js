import React, { Component } from 'react';
// import API from "../../utils/api/api";

class ResultListItem extends Component {

    state= {
         WannaRead:
         [
            {
                 mounted:false,
                 bgColor:"",
                 color:"",
                 text:"Wanna Read"
            }
         ],
        currentlyReading:
        [
            {
                 mounted:false,
                 bgColor:"",
                 color:"",
                 text:"Currently Reading"
            }
         ],
        Read:
        [
            {
                 mounted:false,
                 bgColor:"",
                 color:"",
                 text:"Read"
            }
         ],
    }
    
    componentDidMount = () => {
        this.setState.WannaRead({
            mounted: true
        })
        console.log("Mounted!")
    }

    componentDidMount = () => {
        this.setState.currentlyReading({
            mounted: true
        })
        console.log("Mounted!")
    }
    
    componentDidMount = () => {
        this.setState.Read({
            mounted: true
        })
        console.log("Mounted!")
    }

    getStyleWant = () => {
        if (this.state.WannaRead.text === "Wanna Read") {
            this.setState.WannaRead({
                bgColor: "#00E000",
                color: "white",
                text: "Saved"
            })
        }
        else {
            this.setState.WannaRead({
                bgColor: "",
                color: "",
                text: "Save"
            })
        }   
    }
    
    getStyleCurren = () => {
        if (this.state.currentlyReading.text === "Currently Reading") {
            this.setState.currentlyReading({
                bgColor: "#00E000",
                color: "white",
                text: "Saved"
            })
        }
        else {
            this.setState.currentlyReading({
                bgColor: "",
                color: "",
                text: "Save"
            })
        }   
    }
    
    getStyleRead = () => {
        if (this.state.Read.text === "Read") {
            this.setState.Read({
                bgColor: "#00E000",
                color: "white",
                text: "Saved"
            })
        }
        else {
            this.setState.Read({
                bgColor: "",
                color: "",
                text: "Save"
            })
        }   
    }



    onClickFuncWant = () => {
        this.props.WantToRead(this.props)//.bind(this, this.props);
        this.getStyleWant();
    }
    onClickFuncCurrent = () => {
        this.props.CurrentlyReading(this.props)//.bind(this, this.props);
        this.getStyleCurren();
    }
    onClickFuncRead = () => {
        this.props.WantToRead(this.props)//.bind(this, this.props);
        this.props.Read();
    }

    // getStyle = (id) => {
    //     let style = {
    //         backgroundColor: "#00E000",
    //         color: "white"   
    //     }
    //     if (this.state.mounted) {
    //         console.log("Here's the id", id)
    //         API.getBook(id)
    //         .then(res => {
    //             console.log("Here's the res", res);
    //             if (res.data.id === id) {
    //                 console.log("There's a match!");
    //                 console.log(style);
    //                 return style
    //             }
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    //     }
    // }
    
    
    render () {
        
        // const {book} = this.props

        return (

            <div>
                <div className="card">
                    <div className="card-header"></div>
                    <div className="card-body">
                        <img src={this.props.image} style={{maxWidth: "100px"}} alt="book"/>
                        <h5 className="card-title" style={{margin: "10px 0"}}>{this.props.title}</h5>
                        <p className="card-text" >{this.props.description}</p>
                        <p style={{fontStyle: "italic"}}>Author(s): {this.props.authors}</p>
                        <a href={this.props.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{marginRight: "6px"}}>View Book</a>
                        <button onClick={this.onClickFuncWant} style={{ backgroundColor: this.state.WannaRead.bgColor, color: this.state.WannaRead.color }} className="btn">{this.state.WannaRead.text}</button>
                        <button onClick={this.onClickFuncCurrent} style={{ backgroundColor: this.state.currentlyReading.bgColor, color: this.state.currentlyReading.color }} className="btn">{this.state.currentlyReading.text}</button>
                        <button onClick={this.onClickFuncRead} style={{ backgroundColor: this.state.Read.bgColor, color: this.state.Read.color }} className="btn">{this.state.Read.text}</button>
                   </div>
                </div>
            </div>
        )
    }
    
}

export default ResultListItem;






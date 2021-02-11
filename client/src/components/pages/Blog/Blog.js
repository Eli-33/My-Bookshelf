import React, { Component } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import {Input , TextArea , SubmitBtn} from '../../Search/Search';


class Blog extends Component {
    render() {
        return (
            <div className="container-fluid h-100 p-0 m-0">
                <Sidebar />
                <div className="content">
                     <h1>Write about your book</h1>
                     <div>
                      <p>Title of the book</p>
                    <Input 
                    // value={this.state.search}
                    // onChange={this.handleInputChange}
                    name="text"
                    placeholder="Book Title"
                    type="text" 
                    id="title" />
                   <TextArea
                //    onChange={handleInputChange}
                   name="note"
                   placeholder="What do you think..."
                   />
                 <SubmitBtn/>
   
     
                </div>
                </div>
            </div>
        );
    } 
}

export default Blog;
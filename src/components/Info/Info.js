import React from 'react';
import About from "../About/About";
import PopularPosts from "../PopularPosts/PopularPosts";
import FormTags from "../../pages/Tags/FormTags";

class Info extends React.Component{
    render(){
        return(
            <div className="w3-col l4">
                <About/>
                <hr/>
                <PopularPosts/>
                <hr/>
                <FormTags/>
            </div>
        )
    }
}

export default Info;
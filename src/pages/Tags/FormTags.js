import React from 'react';
import Tags from "../../components/Tags/Tags";
import "../../App.css";


class FormTags extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            tags: []
        }
    }

    componentDidMount(tags) {
        fetch('http://localhost:3001/tags')
            .then(response =>{
                if(response.ok){
                    return response.json()
                }else{
                    alert(`Что то пошло не такю Код ошибки:`+ response.status)
                }
            })
            .then(data => this.setState( {tags:data}))
    }

    render(){
        return(
            <div className="w3-card w3-margin">
                <div className="w3-container w3-padding">
                    <h4>Tags</h4>
                </div>
                <div className="w3-container w3-white w3-padding">
                    <span className="w3-tag w3-black w3-margin-bottom w3-small">Travel</span>
                    {
                        this.state.tags.map(item =>{
                            return <Tags
                                key={item.id}
                                name={item.name}
                            />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default FormTags;
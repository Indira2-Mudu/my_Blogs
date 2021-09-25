import React from "react";

class Comments extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name:"",
            comments:""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        // console.log(event.target.localName)

        if(event.target.localName=== 'input'){
            this.setState( {
                name:event.target.value
            })
        }else{
            this.setState({
                comments:event.target.value
            })
        }
}

    render() {
        return (
            <div className="w3-container">
                <div className="w3-row">
                    <div className="w3-col">
                        <p><span className="w3-padding w3-tag">Comments</span></p>
                        <input
                            className="w3-input w3-border w3-margin-bottom"
                            placeholder="введите имя"
                            type="text"
                            onChange={this.handleChange}
                        />
                        <textarea
                            className="w3-input w3-border "
                            placeholder="введите текст"
                            onChange={this.handleChange}
                        />

                        <button className="w3-button w3-section w3-wide w3-padding-large w3-white w3-border w3-right">
                            <b>ADD</b>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Comments;
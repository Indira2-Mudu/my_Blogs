import React from "react";
import CommentsPub from "../../components/CommentsPub/CommentsPub";
import {toast} from "react-toastify";

class PublishedComments extends React.Component {
    constructor(props) {
        super(props);
        this.getCommentsByPostId = this.getCommentsByPostId.bind(this);
        this.state = {
            comments: []
        }
    }


    componentDidMount() {
        this.getCommentsByPostId();
    }

    getCommentsByPostId(){
        const URL = `http://localhost:3001/comments?postId=${this.props.id}`;

        fetch (URL)
            .then(response =>{
                if(response.ok){
                    return response.json();
                }else{
                    toast.error('Что то пошло не так: Код статуса:' + response.status)
                }
            })
            .then(data =>
                this.setState( {
                    comments:data
                })
            )
    }

    render() {
        return (
            <div className="w3-row w3-margin">
                <div className="w3-col w3-margin-bottom">
                    <p><span className="w3-padding w3-tag">Published comments:</span></p>
                    {
                        this.state.comments.map(item=> (
                            <CommentsPub obj={item}/>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default PublishedComments;
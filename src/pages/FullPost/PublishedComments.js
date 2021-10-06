import React from "react";
import CommentsPub from "../../components/CommentsPub/CommentsPub";
import {toast} from "react-toastify";
import ReactPaginate from 'react-paginate';
import '../../App.css'


class PublishedComments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            pagination: true,
            error: null,
            isLoaded: false,
            // offset:0
            perPage: 3,
            currentPage: 1
        }
        this.getCommentsByPostId = this.getCommentsByPostId.bind(this);
        this.showCommentsWithPagination = this.showCommentsWithPagination.bind(this);
        this.handlePageClick = this.handlePageClick.bind(this);

    }


    componentDidMount() {
        this.getCommentsByPostId();
    }

    getCommentsByPostId() {
        const URL = `http://localhost:3001/comments?postId=${this.props.id}&_page=${this.state.currentPage}&_limit=${this.state.perPage}`;

        fetch(URL)
            .then(response => {
                if (response.ok) {
                    this.setState({
                        pageCount: Math.ceil(response.headers.get('X-Total-Count') / this.state.perPage)
                    })

                    return response.json();
                } else {
                    toast.error('Что то пошло не так: Код статуса:' + response.status)
                }
            })
            .then(data =>
                this.showCommentsWithPagination(data))
    }

    showCommentsWithPagination(data) {
        this.setState({
            isLoaded: true,
            comments: data
        })
    }

    handlePageClick(e) {
        const selectedPage = e.selected;
        this.setState({
            currentPage: selectedPage + 1
        }, () => {
            this.getCommentsByPostId()
        })
    }

    render() {
        const {error, isLoaded, comments} = this.state;
        if (error) {
            return <h1>Ошибка</h1>;
        } else if (!isLoaded) {
            return <h1>Загрузка ... </h1>
        } else {
            return (
                <div className="w3-row w3-margin">
                    <div className="w3-col w3-margin-bottom">
                        <p><span className="w3-padding w3-tag">Published comments:</span></p>
                        {
                            this.state.comments.map(item => (
                                <CommentsPub obj={item}/>
                            ))
                        }
                    </div>
                    <ReactPaginate
                        previousLabel={'← Previous'}
                        nextLabel={'Next →'}
                        breakLabel={'...'}
                        pageCount={this.state.pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick}
                        containerClassName={'pagination'}
                        previousLinkClassName={"paginationLink"}
                        nextLinkClassName={"paginationLink"}
                        disabledClassName={"paginationLinkOff"}
                        activeClassName={"paginationLinkActive"}
                    /> <br/>

                </div>
            )
        }
    }
}

export default PublishedComments;
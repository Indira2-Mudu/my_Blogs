import React from "react";
import CommentsPub from "../../components/CommentsPub/CommentsPub";
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
            currentPage: 1,
            commentsId: this.props.commentsId
        }

        this.showCommentsWithPagination = this.showCommentsWithPagination.bind(this);
        this.handlePageClick = this.handlePageClick.bind(this);

    }


    componentDidMount() {
        this.showCommentsWithPagination(this.props.comments);
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
                            this.props.comments.map(item => (
                                <CommentsPub key={item.id} obj={item}/>
                            ))
                        }
                    </div>
                    <ReactPaginate
                        previousLabel={'← Previous'}
                        nextLabel={'Next →'}
                        breakLabel={'...'}
                        pageCount={3}
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
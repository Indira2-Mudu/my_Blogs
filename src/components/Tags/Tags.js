import React from 'react';
import "../../App.css";


class Tags extends React.Component {

    render() {
        return (
            <div className="w3-tag w3-light-grey w3-small w3-auto pages w3-small">{this.props.name}</div>
        )
    }
}

export default Tags;
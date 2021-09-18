import React from "react";

class Test extends React.Component{
    constructor(props) {
        super(props);

        console.log(this.props.location)
    }

    render() {
        return (
            <h1> Test page</h1>
        )
    }
}
export default Test;

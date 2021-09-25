import React from "react";
import * as qs from 'qs';

class Test extends React.Component{
    constructor(props) {
        super(props);

        this.parseString();

    }
    parseString(){
        let str= this.props.location.search;
        console.log(str);

        // str = qs.parse(str, {ignoreQueryPrefix: true, parameterLimit: 100});
        // console.log(str);

        let params = new URLSearchParams(str);

        params.append('foo', '4')
        console.log(params.has('asd'));
        console.log(params.get('name'));

        for (let p of params){
            console.log(p)
        }
    }

    render() {
        return (
            <h1> Test page</h1>
        )
    }
}
export default Test;

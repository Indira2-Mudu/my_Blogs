import React from 'react';


import Main from './pages/Main/Main';
import FullPost from "./pages/FullPost/FullPost";
import Test from "./pages/Test/Test";
import NotFountPage from "./pages/NotFountPage/NotFountPage";
import {BrowserRouter, Route, Switch} from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
        // console.log(window.location.pathname)
    }

    render() {
        return (
            <>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Main}/>
                        <Route path="/fullPost/:id" exact component={FullPost}/>
                        <Route path="/test" exact component={Test}/>
                        <Route component={NotFountPage}/>
                    </Switch>
                </BrowserRouter>

            </>
        )
    }

}

export default App;
import React from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Main from './pages/Main/Main';
import PostFull from "./pages/FullPost/PostFull";
import Test from "./pages/Test/Test";
import Test2 from "./pages/Test/Test2";
import NotFountPage from "./pages/NotFountPage/NotFountPage";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./components/Header/Header";
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        // console.log(window.location.pathname)
    }

    render() {
        return (
            <>
                <BrowserRouter>
                    <Header/>
                    <Switch>
                        <Route path="/" exact component={Main}/>
                        <Route path="/fullPost/:id" exact component={PostFull}/>
                        <Route path="/test" exact component={Test}/>
                        <Route path="/test2" exact component={Test2}/>
                        <Route component={NotFountPage}/>
                    </Switch>
                </BrowserRouter>
                <ToastContainer/>
            </>
        )
    }

}

export default App;
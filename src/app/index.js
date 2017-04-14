import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";


class App extends React.Component {
    render() {
         var user = {
            name: "Anna",
            hobbies: ["sports", "sewing"]
        };
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header> </Header>
                            <div className="row">
                                <div className="col-xs-10 col-xs-offset-1">
                                    <Home name={"Max"} age={27} user={user}/> 
                                    <Home/>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>);
    }
}
render(<App/>, window.document.getElementById("app"));
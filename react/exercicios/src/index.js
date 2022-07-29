import React from "react";
import ReactDOM from "react-dom";
import Pai from "./components/Pai"
import Filho from "./components/Filho"

//import {BomDia, BoaNoite} from "./components/Multi"
//import Saudacao from "./components/Saudacao"

ReactDOM.render( (
    <div>
    <Pai name="Gelson" nickname="Bittencourt">
        <Filho name="Jefferson" nickname="Cerqueira"/>
        <Filho name="Maria Luisa" nickname="Cerqueira"/>
        <Filho name="outro" nickname=""/>
        <Filho/>
    </Pai>
    </div>
), document.getElementById("root"));
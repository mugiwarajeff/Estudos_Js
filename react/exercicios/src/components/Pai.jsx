import React from "react";
import Filho from "./Filho";
import { childrenwithProps } from "../utils/utils";

export default props => (
    <div>
        <h1>{props.name} {props.nickname}</h1>
        <h2>Filhos</h2>
        <ul>
           {childrenwithProps(props)}
        </ul>
    </div>
)
import React from "react";

export default props => (
    <React.Fragment> 
        <h1>Bom dia, {props.name}!</h1>
        <h1>Vocë tem {props.idade} anos de idade</h1>    
    </React.Fragment>
    
    //* também podemos ternar uma div, porem dessa forma näo a risco de quebra de layout*/ 
)

//Näo podemos retornar dois elementos JSX

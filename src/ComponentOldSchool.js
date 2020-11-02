import React from "react"; //es6
//const reactr = require("react") //es5

export class ComponenteOldSchool extends React.Component
{

    constructor( props ){
        super(props);
        this.state = {seconds : 0};
        

    }

    cambiarSegundo(){
        this.setState({seconds : this.state.seconds +1});
    }

    mostrarMensaje(){
        return "nuevo mensaje";

    }

    // cuando carga.
    componentDidMount() {
        this.interval = setInterval(() => this.cambiarSegundo(), 1000);
    }
    
    // cuando descarga.
    componentWillUnmount() {
        clearInterval(this.interval);
    }
      

    render(){
        return (<div><p>El componente nro 4556736621 mas cool del mundo</p>
            <p><img alt="marcelito" src="https://elintra.com.ar/wp-content/uploads/2020/08/Marcelo-Bielsa.jpg" /></p>
        <h1>{this.mostrarMensaje()}</h1>
        <h2>Segundos : {this.state.seconds}</h2>
        </div>)

    }
}

export const HolaMundo = ()=><p>hola mundo</p>;

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
        return (<div><p>El componente cogollin </p>
            <p><img alt="cogollito" src="https://www.alchimiaweb.com/blog/wp-content/uploads/2012/11/1-Qleaner-TGA-Subcool-743x1024-217x300.jpg" /></p>
        <h1>{this.mostrarMensaje()}</h1>
        <h2>Segundos : {this.state.seconds}</h2>
        </div>)

    }
}

export const HolaMundo = ()=><p>hola mundo</p>;

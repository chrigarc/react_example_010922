import React from "react";

export default class User extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isReady : false
        }
    }

    eventHandler = (event) => {
            console.log(event.key);
    }

    componentDidMount() {
        console.log('agregando');    
        fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(json => {
            console.log(json);
            this.setState({
                name: json.results[0].name.first,
                image: json.results[0].picture.medium, 
                isReady: true
            });
        })     
    }

    componentWillUnmount() {
        console.log('eliminado');
    }

    render() {
        return (
            this.state.isReady ?
        (<div className="user">
            <img src={this.state.image}/>
            <p>{this.state.name}</p>
        </div>) : (<p>Cargando...</p>)
        )
    }

}
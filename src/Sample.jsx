import React, { Component } from 'react'

class Sample extends Component {
    constructor(){
        super()
        this.state = {name: "Guru"}
    }

    componentDidMount(){
        console.log("Component mounted");
        this.setState({
            ...this.state,
            name: "Subhash"
        })
    }

    componentDidUpdate(){
        console.log("Component updated");
    }
    
    componentWillUnmount(){
        console.log("Component will unmount");

    }

    shouldComponentUpdate(){
        console.log("Should component updated");
        return true;
    }

    render() {
        console.log("This is render")
        return (
        <div>This is an example of class based component{this.state.name}</div>
        )
    }
}


export default Sample
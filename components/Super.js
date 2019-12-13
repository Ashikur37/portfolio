import React, { Component } from 'react'

export default class Super extends Component {
    constructor(){
        super();
        this.x="hello world";
    }
    alertName(tit){
        alert(tit)
    }
    render() {
        return (
            <div>
                hello super
            </div>
        )
    }
}

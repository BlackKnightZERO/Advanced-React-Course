import React, { Component } from 'react';
import ForwardingRefBtn from "./ForwardingRefBtn";

class ParentForwardingRefBtn extends Component{

    constructor(props) {
        super(props)
        this.btnRef = React.createRef()
    }

    componentDidMount() {
        console.log(this.btnRef)
        this.btnRef.current.innerHTML = 'Click Me'
    }

    render() {
        return (
            <div>
                <ForwardingRefBtn ref={ this.btnRef } />
            </div>
        )
    }
    
}

export default ParentForwardingRefBtn;
import React, { Component } from "react";
import RefTextInput from "../DOM/RefTextInput/RefTextInput";

class ParentRefTextInput extends Component {
    
    constructor(props){
        super(props)
        this.componentRef = React.createRef()
    }

    componentDidMount() {
        console.log(this.componentRef.current)                              // class component holds the instance
        this.componentRef.current.refFocusInput('Arif - calling from parent')
    }
    
    render() {
        return (
            <div>
                <RefTextInput ref={ this.componentRef } />
            </div>
        )
    }
}

export default ParentRefTextInput;
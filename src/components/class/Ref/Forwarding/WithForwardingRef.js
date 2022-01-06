import React, { Component } from "react";

const WithForwardingRef = (WrapperComponent) => {

    class ForwardingRef extends Component {
    
        constructor(props) {
            super(props)
        }
    
        render() {
            return (
                <div>
                    <i>HOC Component</i>
                    <WrapperComponent ref={this.props.btnRef} />
                </div>
            )
        }
    
    }
    return React.forwardRef((props, ref) => {
        return <ForwardingRef btnRef={ref} {...props} />
    });
}

export default WithForwardingRef;


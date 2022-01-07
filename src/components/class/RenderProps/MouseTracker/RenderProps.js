import { Component } from "react";
import MouseTracker from "./MouseTracker";
import logoImg from '../../../../logo.svg';

class RenderProps extends Component {

    selfFunction = (src) => {
        return (
            <img src={ logoImg } alt="" 
                        style={{    width:'50px', position:'absolute', 
                                    top:src.y - 171, 
                                    left:src.x - 106,
                              }} 
                    />
        )
    }

    render() {
        return (
            <>
            <MouseTracker render={ this.selfFunction } />


            {/* <MouseTracker
                render={ (src) => (
                    <img src={ logoImg } alt="" 
                        style={{    width:'50px', position:'absolute', 
                                    top:src.y - 195, 
                                    left:src.x - 85 
                              }} 
                    />
                )}
            /> */}


            </>
        )
    }
}

export default RenderProps;
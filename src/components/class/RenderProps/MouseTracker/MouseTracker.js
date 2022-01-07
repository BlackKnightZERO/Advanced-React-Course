import { Component } from "react";
import MouseFollower from "./MouseFollower";

class MouseTracker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            x: 0,
            y: 0
        }
    }

    handleMouseMove = (e) => {
        this.setState((prevValue) => {
            return {
                ...prevValue,
                x: e.clientX,
                y: e.clientY,
            }
        })
    }

    render() {
        return (
            <div style={{ width:'50vw', height:'50vh', background:'#e9e9e9', position: 'relative' }}
            onMouseMove={this.handleMouseMove}
            >
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>X={this.state.x}, Y ={this.state.y}</div>
                
                {/* <MouseFollower position={this.state} /> */}
                
                { this.props.render(this.state) }
            </div>
        )
    }

}

export default MouseTracker;
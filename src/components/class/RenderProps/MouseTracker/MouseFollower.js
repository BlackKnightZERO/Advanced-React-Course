import { Component } from "react";
import logoImg from '../../../../logo.svg';

class MouseFollower extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="">
            <img src={ logoImg } alt="" style={{ width:'50px', position:'absolute', top:this.props.position.y - 195, left:this.props.position.x - 85 }} />
            </div>
        )
    }
}

export default MouseFollower;
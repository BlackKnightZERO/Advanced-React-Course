import { Component } from "react";

class Button extends Component {
    render() {
        return (
            <button className="my-1 mr-1 rounded-lg px-3 py-1 bg-red-600 text-red-100 hover:bg-red-700 duration-200">{ this.props.title }</button>
        )
    }
}

export default Button;
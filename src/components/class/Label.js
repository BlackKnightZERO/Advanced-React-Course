import { Component } from "react";

class Label extends Component {
    render() {
        return (
            <h2 className="text-4xl font-semibold text-indigo-800">{ this.props.title }</h2>
        )
    }
}

export default Label;
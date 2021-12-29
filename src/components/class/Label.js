import { Component } from "react";

class Label extends Component {
    render() {
        return (
            <h2 className="text-4xl font-semibold text-indigo-800 text-center p-1 m-1 border-b-4">{ this.props.title }</h2>
        )
    }
}

export default Label;
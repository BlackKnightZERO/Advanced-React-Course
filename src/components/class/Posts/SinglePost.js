import { Component } from "react";

class SinglePost extends Component {
    render(){
        return (
            <div className="m-2 p-2 border border-grey-400 shadow">
                <h3 className="text-xl font-bold text-blue-600">{ this.props.title }</h3>
                <p>{ this.props.description }</p>
            </div>
        )
    }
}

export default SinglePost;
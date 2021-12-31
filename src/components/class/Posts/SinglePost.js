import { Component } from "react";

class SinglePost extends Component {
    render(){
        return (
            <div className="m-2 p-2 border border-grey-400 shadow">
                <h3 className="text-xl font-bold text-blue-600">{ this.props.title }</h3>
                <p>{ this.props.description }</p>
                {
                    this.props.status==='active' 
                    ? <small className="text-green-500">{ this.props.status }</small> 
                    : <small className="text-red-500">{ this.props.status }</small>
                }
                <input name="title" type="text"
                    onChange={this.props.singleInputHandler}
                    value={this.props.title}
                    className="px-2 py-1 block w-full border border-gray-600 focus:outline-none focus:border-indigo-600"  />
                
            </div>
        )
    }
}

export default SinglePost;
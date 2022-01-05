import { Component } from "react";

class AddPost extends Component {

    // state = {
    //     title:'',
    //     description:'',
    //     status: 'active'
    // }

    // inputHandler = (e) => {
    //     const {name, value} = e.target
    //     this.setState((prevValue) => (
    //         {
    //             ...prevValue,
    //             [name]:value
    //         }
    //     ))
    // }

    // addPostHandler = (e) => {
    //     e.preventDefault()
    //     let msg = `Title:${this.state.title}, Desc: ${this.state.description}, Status: ${this.state.status}` ;
    //     alert(msg)
    // }

    render() {
        return (
            <div>
                <h2 className="text-2xl font-bold text-indigo-700">Add Post</h2>
                <form onSubmit={this.props.addPostHandler}>
                    <div className="py-1">
                        <label className="block">Title : <small className="text-green-600">{this.props.title}</small></label>
                        <input name="title" type="text"
                            onChange={this.props.inputHandler}
                            value={this.props.title}
                            className="px-2 py-1 block w-full border border-gray-600 focus:outline-none focus:border-indigo-600"  />
                    </div>
                    <div className="py-1">
                        <label className="block">Description : <small className="text-green-600">{this.props.description}</small></label>
                        <textarea name="description"
                        onChange={this.props.inputHandler}
                        value={this.props.description}
                        className="px-2 py-1 block w-full border border-gray-600 focus:outline-none focus:border-indigo-600"></textarea>
                    </div>
                    <div className="py-1">
                        <label className="block">Status : <small className="text-green-600">{this.props.status}</small></label>
                        <select name="status" 
                            onChange={this.props.inputHandler}
                            value={this.props.status}
                            className="px-2 py-1 block w-full border border-gray-600 focus:outline-none focus:border-indigo-600">
                            <option value="active">active</option>
                            <option value="inactive">inactive</option>
                        </select>
                    </div>
                    <div className="py-1">
                        <button type="submit" className="bg-orange-700 text-white px-2 py-1">Add</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddPost;
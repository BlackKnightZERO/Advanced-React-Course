import { Component } from "react";

class SinglePost extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        console.log('%c 1. child(create) - constructor called', 'background: yellow')
    }
    static getDerivedStateFromProps(props, state){
        console.log('%c 2. child(create/update) - getDerivedStateFromProps', 'background: yellow')
        return state
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('%c child(update) - shouldComponentUpdate', 'background: teal');
        return true
    }

    render(){

        console.log('%c 3. child(create/update) - render called', 'background: yellow')

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

    getSnapshotBeforeUpdate(prevProps, prevStates) {
        console.log('%c child(update) - getSnapshotBeforeUpdate', 'background: teal')
        return `snapshot taken at ${ new Date().toLocaleTimeString() }`
    }

    componentDidUpdate(prevProps, prevStates, snapShot) {
        console.log('%c child(update) - conponentDidUpdate', 'background: teal')
        console.log(snapShot)
    }

    componentDidMount() {
        console.log('%c 4. child(create) - componentDidMount', 'background: yellow')
    }
}

export default SinglePost;
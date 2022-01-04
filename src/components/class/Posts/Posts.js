import { Component } from "react";
import SinglePost from "./SinglePost";
import AddPost from './AddPost';

class Posts extends Component {

    constructor(props) {
        super(props)
        this.state = {
            posts:[
                { id:1, title:'title-01', description:'description-01', status:'active', },
                { id:2, title:'title-02', description:'description-02', status:'inactive', },
            ],
            isEditable:true,
            isVisible:true,
            newPost:{id:0, title:'', description:'', status:'active'},
        };
        console.log('%c 1. parent(create) - constructor called', 'background:orange;')
    }

    static getDerivedStateFromProps(props, state){
        console.log('%c 2. parent(create/update) - getDerivedStateFromProps', 'background:orange;')
        return state
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('%c parent(update) - shouldComponentUpdate', 'background: green');
        return true
    }

    updateTitleHandler = (title, e) => {                    // called e from button's anonymous function

            console.log(e)
            console.log(e.target)
            console.log(e.target.classList)
            console.log(e.target.value)

            const posts = [...this.state.posts]     // Immutability Method // spread operator

            posts.map(p => {
                p.title = title
                p.description = new Date().toLocaleTimeString()
                return p;
            })

            console.log(new Date().toLocaleTimeString());

            this.setState({posts});
    }
    updateTitleHandler2 = (e) => {

            console.log(e)
            console.log(e.target)
            console.log(e.target.classList)
            console.log(e.target.value)

            const posts = [...this.state.posts]             // Immutability Method // spread operator

            posts.map(p => {
                p.title = 'Updated2'
                p.description = new Date().toLocaleTimeString()
                return p
            })

            console.log(new Date().toLocaleTimeString());

            posts.push({
                id:this.state.posts.length+1,
                title:'New',
                description:'Pushed',
                status:'active'
            })

            this.setState({posts});
    }
    toggle = () => {
        this.setState( {isVisible:!this.state.isVisible} )
    }

    inputHandler = (e) => {
        const {name, value} = e.target 
        this.setState((prevValue) => (
            {
                ...prevValue,
                newPost:{
                    ...prevValue.newPost,
                    [name]:value
                }
            }
        ))
    }

    // from child
    addPostHandler = (e) => {
        e.preventDefault()

        const updatedPost = [...this.state.posts]
        const newPost = this.state.newPost

        newPost.id = updatedPost.length+1

        for (const [key, value] of Object.entries(newPost)) {
            // console.log(`${key}: ${value}`);
            if(value===''){
                alert(`Value Required for ${key}`)
                return
            }
        }

        updatedPost.push(newPost)

        this.setState((prevValue) => (
            {
                ...prevValue,
                posts:updatedPost
            }
        ))

        //  reset-form
        const newPostReset = {id:0, title:'', description:'', status:'active'}
        this.setState((prevValue) => (
            {
                ...prevValue,
                newPost:newPostReset
            }
        ))
    }

    // from loop
    singleInputHandler = (id, e) => {                                                                   // FIND INDEX IN AN ARARAY OF Objs ***
        const {name, value} = e.target
        const postIndex     = this.state.posts.findIndex(post => post.id === id)
        const posts         = [...this.state.posts]
        posts[postIndex][name] = value
        // posts[postIndex].title = e.target.value
        this.setState({posts})
    }

    render(){

        console.log('%c 3. parent(create/update) - render called', 'background:orange')

        return (
            <div>
                <div className="flex">
                    {/* conditional-rendering-method-1 : embedded JSX  */}
                    {
                        this.state.posts && this.state.isVisible && this.state.posts.map((post) => (
                            <SinglePost 
                                title={post.title} 
                                description={post.description} 
                                status={post.status} 
                                key={post.id} 
                                singleInputHandler={this.singleInputHandler.bind(this, post.id)} />
                        ))
                    }
                </div>

                <button onClick={(e) => this.updateTitleHandler('Updated', e)} 
                    className="my-1 mr-1 rounded-lg px-2 py-1 bg-green-700 text-green-100 hover:bg-green-800 duration-200">Update</button>
                <button onClick={this.updateTitleHandler2} 
                    className="my-1 mr-1 rounded-lg px-2 py-1 bg-green-700 text-green-100 hover:bg-green-800 duration-200">Update</button>
                <button onClick={this.toggle} 
                    className="my-1 mr-1 rounded-lg px-2 py-1 bg-orange-700 text-orange-100 hover:bg-orange-800 duration-200">
                        { this.state.isVisible ? 'hide' : 'show' }</button>

                <AddPost 
                    title={this.state.newPost.title}
                    description={this.state.newPost.description}
                    status={this.state.newPost.status}
                    inputHandler={this.inputHandler} 
                    addPostHandler={this.addPostHandler} 
                />

            </div>
        )
    }

    getSnapshotBeforeUpdate(prevProps, prevStates) {
        console.log('%c parent(update) - getSnapshotBeforeUpdate', 'background: green')
        return `snapshot taken at ${ new Date().toLocaleTimeString() }`
    }

    componentDidUpdate(prevProps, prevStates, snapShot) {
        console.log('%c parent(update) - conponentDidUpdate', 'background: green')
        console.log(snapShot)
    }

    componentDidMount() {
        console.log('%c 4. parent(create) - componentDidMount', 'background:orange')
    }

    componentWillUnmount() {
        console.log('%c X. parent(destory) - componentWillUnmount', 'background: orange')
    }
}

export default Posts;
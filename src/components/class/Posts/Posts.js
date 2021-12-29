import { Component } from "react";
import SinglePost from "./SinglePost";

class Posts extends Component {

    state = {
        posts:[
            { id:1, title:'title-01', description:'description-01' },
            { id:2, title:'title-02', description:'description-02' },
        ],
        isEditable:true,
        isVisible:true,
    };

    updateTitleHandler = (title, e) => {                    // called e from button's anonymous function

            console.log(e)
            console.log(e.target)
            console.log(e.target.classList)
            console.log(e.target.value)

            const posts = [...this.state.posts]     // Immutability Method // spread operator

            posts.map(p => {
                p.title = title
                p.description = new Date().toLocaleTimeString()
            })

            console.log(new Date().toLocaleTimeString());

            this.setState({posts});
    }
    updateTitleHandler2 = (e) => {

            console.log(e)
            console.log(e.target)
            console.log(e.target.classList)
            console.log(e.target.value)

            const posts = [...this.state.posts]     // Immutability Method // spread operator

            posts.map(p => {
                p.title = 'Updated2'
                p.description = new Date().toLocaleTimeString()
            })

            console.log(new Date().toLocaleTimeString());

            posts.push({
                id:this.state.posts.length+1,
                title:'New',
                description:'Pushed'
            })

            this.setState({posts});
    }
    toggle = () => {
        this.setState( {isVisible:!this.state.isVisible} )
    }

    getPosts = () => {
        let jsx = null;
        if(this.state.posts && this.state.isVisible) {
            jsx = this.state.posts.map((post) => (
                <SinglePost title={post.title} description={post.description} key={post.id} />
            ))
        }
        return jsx;
    }

    render(){

        return (
            <div>
                <div className="flex">
                    {/* conditional-rendering-method-1 : embedded JSX  */}
                    {
                        this.state.posts && this.state.isVisible && this.state.posts.map((post) => (
                            <SinglePost title={post.title} description={post.description} key={post.id} />
                        ))
                    }
                </div>
                <div className="flex">
                    {/* conditional-rendering-method-2 : ? turnary rendering */}
                    {
                        (this.state.posts && this.state.isVisible) ?
                        this.state.posts.map((post) => (
                            <SinglePost title={post.title} description={post.description} key={post.id} />
                        )) : null
                    }
                </div>
                <div className="flex">
                    {/* conditional-rendering-method-3 : functional-property calling */}
                    { this.getPosts() }
                </div>

                <button onClick={(e) => this.updateTitleHandler('Updated', e)} 
                    className="my-1 mr-1 rounded-lg px-2 py-1 bg-green-700 text-green-100 hover:bg-green-800 duration-200">Update</button>
                <button onClick={this.updateTitleHandler2} 
                    className="my-1 mr-1 rounded-lg px-2 py-1 bg-green-700 text-green-100 hover:bg-green-800 duration-200">Update</button>
                <button onClick={this.toggle} 
                    className="my-1 mr-1 rounded-lg px-2 py-1 bg-orange-700 text-orange-100 hover:bg-orange-800 duration-200">
                        { this.state.isVisible ? 'hide' : 'show' }</button>

            </div>
        )
    }
}

export default Posts;
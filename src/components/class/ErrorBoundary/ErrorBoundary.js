import { Component } from "react";

class ErrorBoundary extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hasError : false,
        }
    }

    // executed just before render
    static getDerivedStateFromError() {
        console.log(`ErrorBoundary - getDerivedStateFromError`)
        return {
            hasError:true
        }
        // this.setState({hasError:true})               // ? https://stackoverflow.com/questions/63240814/static-getderivedstatefromerror
    }

    componentDidCatch(error, info) {
        console.log(`ErrorBoundary - componentDidCatch`)
        console.log(error, info)
    }

    render() {
        return (
            this.state.hasError ? 
                <div
                className="pt-2 text-red-600 text-center"
                >
                    An error has occred
                </div>
                :
                this.props.children
        )
    }
}

export default ErrorBoundary
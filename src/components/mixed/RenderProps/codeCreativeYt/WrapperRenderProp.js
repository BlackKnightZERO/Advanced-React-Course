import { Component } from "react";

class WrapperRenderProp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count : 0
        }
    }

    incCount = () => {
        this.setState((prevValue) => {
            return {
                ...prevValue,
                count: this.state.count + 1
            }
        })
    }

    render() {
        return (
            <>
            { this.props.render(this.state.count, this.incCount) }
            </>
        )
    }

}

export default WrapperRenderProp;
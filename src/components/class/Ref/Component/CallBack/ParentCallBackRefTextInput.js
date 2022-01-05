import { Component } from "react";
import CallBackRefTextInput from "./CallBackRefTextInput";

class ParentCallBackRefTextInput extends Component {

    constructor(props) {
        super(props)
        this.textInput = null
    }

    componentDidMount() {
        this.textInput.focus();
        this.textInput.value = 'Arif - calling from callback';
    }

    render() {
        return (
            <div>
                <CallBackRefTextInput
                inputRef={ (el) => (this.textInput = el) }
                />
            </div>
        )
    }
}

export default ParentCallBackRefTextInput;
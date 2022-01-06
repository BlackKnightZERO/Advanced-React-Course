import { Component } from "react";
import ChildBackRefTextInput from "./ChildBackRefTextInput";

class ParentCallBackRefTextInput extends Component {

    constructor(props) {
        super(props)
        this.textInput = null
    }

    componentDidMount() {
        this.textInput.focus();
        this.textInput.value = 'Arif - calling from parent';
    }

    render() {
        return (
            <div>
                <ChildBackRefTextInput
                inputRef={ (el) => (this.textInput = el) }
                />
            </div>
        )
    }
}

export default ParentCallBackRefTextInput;
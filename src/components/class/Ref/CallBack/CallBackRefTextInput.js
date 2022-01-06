import { Component } from "react";

class CallBackRefTextInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValue : ''
        }

        this.textInput = null;
        this.inputRef = (el) => {               // get the HTML elem
            this.textInput = el;
        };
    }

    componentDidMount() {
        console.log('CallBackRefTextInput')
        console.log(this.textInput)
        // this.textInput.value = 'Arif - calling from callback'
        this.setState((prevValue) => {
            return {
                    ...prevValue,
                    inputValue:'Arif - calling from callback'
                }
        })
        this.textInput.focus()
    }

    render() {
        return (
            <div>
                <label htmlFor="" className="block">Callback Ref Input</label>
                <input type="text" className="border border-gray-700 block my-1"                                                  
                ref={ this.inputRef }   
                value={ this.state.inputValue }                                              
                />
                <button className="bg-orange-600 text-while px-2 py-1 my-1">focus</button>
                <hr />
            </div>
        )
    }
}

export default CallBackRefTextInput;
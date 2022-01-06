import React,{ Component } from "react";

class RefTextInput extends Component {

    constructor(props) {
        super(props)
        this.inputRef = React.createRef()                                           // Ref for HTML DOM element
        this.state = {
            inputValue : ''
        }
    }

    refFocusInput = (val) => {                         
        console.log(this.inputRef)
        // this.inputRef.current.value = val
        this.setState((prevValue) => {
            return {
                ...prevValue,
                inputValue:val
            }
        })
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div>
                <label htmlFor="" className="block">Input</label>
                <input type="text" className="border border-gray-700 block my-1"    
                ref={ this.inputRef }      
                value={this.state.inputValue}                                           
                />
                <button className="bg-orange-600 text-while px-2 py-1 my-1"
                onClick={ this.refFocusInput.bind(this, 'Arif - calling from child') }
                >focus</button>
                <hr />
            </div>
        )
    }
}

export default RefTextInput;
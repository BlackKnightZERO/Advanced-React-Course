import React, { Component } from 'react'

class ChildBackRefTextInput extends Component {

    constructor(props) {
        super(props);

        this.textInput = null;
        this.inputRef = (el) => {               // get the HTML elem
            this.textInput = el;
        };
    }

    render() {
        return (
            <div>
                <label htmlFor="" className="block">Callback Ref Input</label>
                <input type="text" className="border border-gray-700 block my-1"    
                ref={ this.props.inputRef }                                                                                                
                />
                <button className="bg-orange-600 text-while px-2 py-1 my-1">focus</button>
                <hr />
            </div>
        )
    }

}

export default ChildBackRefTextInput;
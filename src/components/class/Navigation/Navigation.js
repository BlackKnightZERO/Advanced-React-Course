import { Component } from "react";
// import ButtonContext from "../../../context/ButtonContext";

class Navigation extends Component {

    // static contextType = ButtonContext

    render() {
        return(
            <div>

                {/* <a href="#">{ this.context }</a> */}

                {/* suggested */}
                {this.props.children}
                
            </div>
        )
    }
}

export default Navigation;
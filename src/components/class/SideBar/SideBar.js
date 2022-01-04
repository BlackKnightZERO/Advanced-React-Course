import { Component } from "react";
import Navigation from "../Navigation/Navigation";
// import ButtonContext from "../../../context/ButtonContext";

class SideBar extends Component {
    render() {
        return (
            <div>

                {/* <ButtonContext.Provider value="Link 1 (child closest provider)">
                    <Navigation />
                </ButtonContext.Provider> */}

                {/* suggested */}
                {/* {this.props.children} */}

                <Navigation >
                    {this.props.children}
                </Navigation>

            </div>
        )
    }
}

export default SideBar;
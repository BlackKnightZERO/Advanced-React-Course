import { Component } from "react";
import ThemeContext from "./ThemeContext";

class ContextComponentC extends Component {

    themeStyle = (dark) => {
        return {
            backgroundColor : dark ? '#333' : '#CCC',
            color: dark ? '#CCC' : '#333',
            width:'30vw',
            height:'30vh',
            margin:'1% 0',
            borderRadius:'1%',
            position:'relative',
        }
    }

    centerDiv = () => {
        return {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }
    }

    render() {
        return (
            <>
                <ThemeContext.Consumer>
                    {
                        ( darkTheme => (
                            <div style={ this.themeStyle(darkTheme) }>
                                <div style={ this.centerDiv() }>
                                    <i>Theme-C</i>
                                </div>
                            </div>
                        ) )
                    }
                </ThemeContext.Consumer>
            </>
        )
    }
}

export default ContextComponentC;
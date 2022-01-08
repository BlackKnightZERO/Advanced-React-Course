import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ContextComponentF = () => {

    const darkTheme = useContext(ThemeContext)

    const themeStyle = {
        backgroundColor : darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        width:'30vw',
        height:'30vh',
        margin:'1% 0',
        borderRadius:'1%',
        position:'relative',
    }

    const centerDiv = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }

    return (
        <>
            <div style={ themeStyle }>
                <div style={centerDiv }>
                    <i>Theme-F</i>
                </div>
            </div>
        </>
    )
}

export default ContextComponentF;
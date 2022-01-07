const Counter1 = (props) => {
    return (
        <>
        <button onClick={ props.incCount } 
            style={{ 
                padding: '5px', 
                margin:'0px 2px', 
                color:'white', 
                background:'magenta ', 
                fontSize:'1.5em' 
            }}>{ props.count }</button>
        </>
    )
}

export default Counter1;
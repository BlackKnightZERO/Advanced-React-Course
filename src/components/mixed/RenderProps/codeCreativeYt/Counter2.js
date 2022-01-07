const Counter2 = (props) => {
    return (
        <>
        <button onClick={ props.incCount } 
            style={{ 
                    padding: '5px', 
                    margin:'0px 2px', 
                    color:'white', 
                    background:'darkOrange ', 
                    fontSize:'1.5em' 
                }}>{ props.count }</button>
        </>
    )
}

export default Counter2;
import React, { Component } from 'react';
import WithForwardingRef from './WithForwardingRef';

class ForwardingRefBtn extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <button 
                ref={ this.props.btnRef }
                className='bg-green-600 text-white px-2 py-2'>button</button>
            </div>
        )
    }

}

// export default React.forwardRef((props, ref) => {
//     return <ForwardingRefBtn btnRef={ref} {...props} />;
// });


// With HOC 
export default WithForwardingRef(
    React.forwardRef((props, ref) => {
        return <ForwardingRefBtn btnRef={ref} {...props} />;
    })
)
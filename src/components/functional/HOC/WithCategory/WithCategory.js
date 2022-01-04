import {Component} from 'react'

const WithCategory = (WrappedComponent) => {
    return class extends Component {

        //custom props
        constructor(props) {
            super(props)
            this.state = {
                hocCustomProp : 'From HOC Custom Props'
            }
        }

        render() {
            return (
                <div>
                    <i>{this.props.subtitle} <small> - extra injection</small></i>
                    <WrappedComponent {...this.props} {...this.state} />
                </div>
            )
        }
    }
}

export default WithCategory;
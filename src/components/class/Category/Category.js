import { Component } from "react";
import WithCategory from "../../functional/HOC/WithCategory/WithCategory";

class Category extends Component {
    render() { 
        return (
            <div>
                <h5 className="text-2xl font-semibold text-green-500">
                    
                    {this.props.title} {' '}
                    
                    RCC {' '}
                    
                    <small>
                        {this.props.hocCustomProp}
                    </small>

                </h5>
            </div>
        );
    }
}
 
export default WithCategory(Category);
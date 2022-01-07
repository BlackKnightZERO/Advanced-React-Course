import react from "react";
import { Component } from "react";
import PropTypes from 'prop-types';

class TableRow extends Component {

    constructor(props) {
        super(props)
    }

    styleClass = (data) => {
        if(data) {
            return 'text-center border border-gray-300 text-indigo-600';
        } else {
            return 'text-center border border-gray-300 text-orange-600';
        }
    }

    render() {
        return (
            <>
                <tr>
                    <td className="text-center border border-gray-300">{ this.props.id }</td>
                    <td className="text-center border border-gray-300">{ this.props.name }</td>
                    <td className={ this.styleClass(this.props.member) }>{ (this.props.member) ? 'Yes' : 'No' }</td>
                </tr>
            </>
        )
    }
}

TableRow.propTypes = {
    id      : PropTypes.number.isRequired,
    name    : PropTypes.string,
    member  : PropTypes.bool
}

export default TableRow;
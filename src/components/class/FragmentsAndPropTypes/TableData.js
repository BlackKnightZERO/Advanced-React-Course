import React, { Component } from "react";
import PropTypes from 'prop-types';

class TableData extends Component {

    styleClass = (data) => {
        if(data) {
            return 'text-center border border-gray-300 text-green-600';
        } else {
            return 'text-center border border-gray-300 text-red-600';
        }
    }

    render() {
        // console.log(this.props.tableData)
        return (
            <>
            {
                this.props.tableData && (
                    this.props.tableData.map((element, index) => (
                        <React.Fragment key={ index }>
                            <tr>
                                <td className="text-center border border-gray-300">{ element.id }</td>
                                <td className="text-center border border-gray-300">{ element.name }</td>
                                <td className={ this.styleClass(element.member) }>{ (element.member) ? 'Yes' : 'No' }</td>
                            </tr>
                        </React.Fragment>
                    ))
                )
                
            }
            
            </>
        )
    }
}

TableData.propTypes = {
    tableData: PropTypes.arrayOf(
        PropTypes.shape({
            id      : PropTypes.number.isRequired,
            name    : PropTypes.string,
            member  : PropTypes.bool,
        })
      ),
}

export default TableData;
import React, { Component } from "react";

class TableData extends Component {

    styleClass = (data) => {
        if(data) {
            return 'text-center border border-gray-300 text-green-600';
        } else {
            return 'text-center border border-gray-300 text-red-600';
        }
    }

    render() {
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

export default TableData;
import React, { Component } from "react";

class TableData extends Component {

    render() {
        return (
            <>
            {
                this.props.tableData && (
                    this.props.tableData.map((element, index) => (
                        <React.Fragment key={ index }>
                            <tr>
                                <td className="text-center border border-gray-300">{ index }</td>
                                <td className="text-center border border-gray-300">{ element.name }</td>
                                <td className="text-center border border-gray-300">{ (element.name) ? 'Yes' : 'No' }</td>
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
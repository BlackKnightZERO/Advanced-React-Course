import React, { Component } from "react";
import TableData from "./TableData";
import TableRow from "./TableRow";

class Table extends Component{

    constructor(props) {
        super(props)
        this.state = {
            user: [
                { id:1, name:'Arif', member:true },
                { id:2, name:'Faysal', member:false },
                { id:3, name:'Ayon', member:true },
            ]
        }
    }

    render() {
        return (
            <>
            <table className="table-auto border-collapse border border-gray-400">
            <thead>
                <tr>
                    <th className="w-24 text-center border border-gray-300">#</th>
                    <th className="w-24 text-center border border-gray-300">Name</th>
                    <th className="w-24 text-center border border-gray-300">Member</th>
                </tr>
            </thead>

            <tbody>
                <TableData tableData={this.state.user} />
                {
                    this.state.user && (
                        this.state.user.map( (m, index) => (
                            <React.Fragment key={index} >
                                <TableRow id={m.id} name={m.name} member={m.member} />
                            </React.Fragment>
                        ) )
                    )
                }

            </tbody>
            </table>
            </>
        )
    }
}

export default Table;
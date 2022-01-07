import { Component } from "react";
import TableData from "./TableData";
import { useEffect } from "react";

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
            </tbody>
            </table>
            </>
        )
    }
}

export default Table;
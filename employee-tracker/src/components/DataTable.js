import React from "react";
import DataBody from "./DataBody"


function DataTable({ employees, sortByName }) {

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th onClick={() => sortByName()} scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>
            <tbody>
                {employees.map(employee => (
                    <DataBody
                        key={employee.cell}
                        image={employee.picture}
                        firstName={employee.name.first}
                        lastName={employee.name.last}
                        phone={employee.cell}
                        email={employee.email}
                        dob={employee.dob.date}
                    />
                ))}
            </tbody>
        </table>
    )
}


export default DataTable;
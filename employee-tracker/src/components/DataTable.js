import React, { Component } from "react";
import DataBody from "./DataBody"
import API from "../utils/API"


class DataTable extends Component {

    state = {
        results: []
    }

    componentDidMount() {
        this.searchEmployees();
    }

    randomEmployee = employees => {
        let randomEmployee = Math.floor(Math.random() * employees.length)
        return randomEmployee;
    }

    searchEmployees = () => {
        API.getUsers()
            .then(res => {
                this.setState({ results: res.data.results });
            })
            .catch(err => console.log(err));
    }

    sortByName = () => {
        const employees = this.state.results
        employees.sort((employee1, employee2) => {
            if(employee1.name.first > employee2.name.first) return 1
            else return -1
        })
        this.setState({ results: employees })
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th onClick={() => this.sortByName()} scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.results.map(result => (
                        <DataBody
                            key={result.cell}
                            image={result.picture}
                            firstName={result.name.first}
                            lastName={result.name.last}
                            phone={result.cell}
                            email={result.email}
                            dob={result.dob.date}
                        />
                    ))}
                </tbody>
            </table>
        )
    }

}

export default DataTable;
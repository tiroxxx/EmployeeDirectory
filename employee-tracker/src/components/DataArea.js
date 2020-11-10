import React, { Component } from "react";
import Nav from "./Nav";
import DataTable from "./DataTable";
import API from "../utils/API"

class DataArea extends Component {
    state = {
        search: "",
        results: [],
        searchedEmployees: []
    }

    componentDidMount() {
        this.searchEmployees();
    }

    handleInputChange = (event) => {
        const search = event.target.value;
        const foundEmployees = this.state.results.filter(name => {
            let values = name.name.first.toLowerCase();
            return values.indexOf(search.toLowerCase()) !== -1;
        });

        this.setState({ searchedEmployees: foundEmployees });
    };


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
            if (employee1.name.first > employee2.name.first) return 1
            else return -1
        })
        this.setState({ results: employees })
    }

    render() {
        return (
            <div>
                <Nav handleInputChange={this.handleInputChange}/>
                <DataTable sortByName={this.sortByName} employees={this.state.results} />
            </div >
        )
    }
}


export default DataArea;
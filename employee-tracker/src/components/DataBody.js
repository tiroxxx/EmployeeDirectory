import React from "react";
import Moment from "moment"

function DataBody({ image, firstName, lastName, phone, email, dob }) {
    return (
        <tr>
            <th scope="row">
                <img src={image.thumbnail} alt={firstName + " " + lastName} />
            </th>
            <td>{firstName + " " + lastName}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{Moment(dob).format("MM/DD/YYYY")}</td>
        </tr>
    )
}

export default DataBody;




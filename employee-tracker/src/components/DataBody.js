import React from "react";

function DataBody({ image, firstName, lastName, phone, email, dob }) {
    console.log("this is the props");
    console.log(image);
    return (
        <tr>
            <th scope="row">
                <img src={image.thumbnail} alt={firstName + " " + lastName} />
            </th>
            <td>{firstName + " " + lastName}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{dob}</td>
        </tr>
    )
}

export default DataBody;




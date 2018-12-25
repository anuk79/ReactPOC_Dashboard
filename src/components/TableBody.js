import React from 'react';

const TableBody = (props) => {
    return (
        <tr>
            {/*<td> { props.userData.id } </td>
            <td> { props.userData.login } </td>
            <td> { props.userData.avatar_url } </td>
            <td> { props.userData.repos_url } </td>
            <td> { props.userData.followers_url } </td>*/}
            <td> userData.id  </td>
            <td>  userData.login  </td>
            <td>  userData.avatar_url</td>
            <td>  userData.repos_url  </td>
            <td>  userData.followers_url </td>
        </tr>
    );
}

export default TableBody;
import React from 'react'
import {Link} from 'react-router-dom'
function Nav() {
    return (
        <div>
            <table>
                <tr>
                    <td> <Link to='/'> HOME </Link> </td>
                    <td> <Link to='/about'> ABOUT </Link> </td>
                    <td> <Link to='/shop'> SHOP </Link> </td>
                </tr>
            </table> 
        </div>
    )
}

export default Nav
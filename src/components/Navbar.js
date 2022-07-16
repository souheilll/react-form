import React from 'react'

function CustomNavbar() {
    let firstName = 'Souheil Mansouri';
    let tab = firstName.split(' ')
    const firstCh = tab[0][0];
    const secCh = tab[1][0];
    return (
        <div className="nav">
            <button className='btn acc'>Acceuil</button>
            <button className='btn name'>{`${firstCh}.${secCh}`}</button>
        </div>
    )
}
export default CustomNavbar
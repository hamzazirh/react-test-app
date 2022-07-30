import { useState, useEffect } from 'react';
import './style.css'
import Form from './Form'
import List from './List'

function Contacts() {
    const [contacts, setContact] = useState([
        {
            fullName: "Hamza",
            phone: 121212
        },
        {
            fullName: "Mehmet",
            phone: 565656
        },
        {
            fullName: "Ayşe",
            phone: 2243545
        },
        {
            fullName: "Şakir",
            phone : 4555
        }
    ]);

    useEffect(() => {
        console.log(contacts)
    }, [contacts])

    return (
        <div className='container'>
            <List contacts={contacts} />
            <Form addContack={setContact} contacts={contacts} />
            <div>Contacts</div>
        </div>
    )
}

export default Contacts;

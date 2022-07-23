import { useState } from "react";

function StateComp() {
    const [form, setForm] = useState({ name: "Hamza", surname: "Zırh" })
    const changeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    return (
        <>
            <input name="name" value={form.name} placeholder="Ad" onChange={changeInput} />
            <br />
            <hr />
            <input name="surname" value={form.surname} placeholder="Soyad" onChange={changeInput} />
            <br />
            {form.name} - {form.surname}
        </>
    )
}

export default StateComp;
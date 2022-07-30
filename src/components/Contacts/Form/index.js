import { useState, useEffect } from "react";

const inputAttrs = { fullName: "", phone: "" }

function Form({ addContack, contacts }) {

  const [form, setInputValue] = useState(inputAttrs)

  useEffect(() => {
    setInputValue(inputAttrs)
  }, [contacts])


  const changeInput = (e) => {
    setInputValue({ ...form, [e.target.name]: e.target.value })
  }

  const formSubmit = (e) => {
    e.preventDefault()
    if (form.fullName === "" || form.phone === "") {
      return;
    }

    addContack([...contacts, form]);
  }

  return (
    <form onSubmit={formSubmit}>
      <div>
        <input placeholder="fullName" value={form.fullName} name="fullName" onChange={changeInput} />
      </div>
      <div>
        <input placeholder="Phone Number" value={form.phone} name="phone" onChange={changeInput} />
      </div>
      <div>
        <button>Gönder</button>
      </div>
    </form>
  )
}

export default Form;
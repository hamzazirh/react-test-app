import { useState } from "react";


function List({ contacts }) {
  const [filterText, setFilterText] = useState('')

  const filtered = contacts.filter((item) =>{
    return Object.keys(item).some((key)=> 
      item[key]
      .toString()
      .toLowerCase()
      .includes(filterText.toLocaleLowerCase())
    )

  })


  const filterChange = (e) => {
    setFilterText(e.target.value)
  }


  return (
    <div>
      <div>
        <input placeholder='Filtrele' value={filterText} onChange={filterChange} />
      </div>
      <ul>
        {
          filtered.map((contact, id) =>
            <li key={id}>{contact.fullName} - Tel: {contact.phone} </li>
          )
        }
      </ul>
    </div>
  )
}

export default List;
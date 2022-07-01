import React, {useState} from 'react'

function Search(props) {
const [search, setsearch] = useState("")

const submitSearch=(e)=>{
    e.preventDefault();
    console.log(search)
    props.searchTerm(search)
}

  return (
    <div className='container'>  
    <form onSubmit={submitSearch}>
    <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Search Video</label>
  <input type="text" className="form-control" id="search" placeholder="" value={search} onChange={e=>setsearch(e.target.value)} />
</div>
</form>  
    </div>
  )
}

export default Search
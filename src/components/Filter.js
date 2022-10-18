import React,{useState} from "react"

const Filter = ({onFilter}) => {

    const [greased, setGreased] = useState(false)
    const [filter, setFilter] = useState("name")

    const handleGreased = () => {
        setGreased(!greased)
        onFilter(!greased, filter)
    }
    const handleFilter = event => {
        setFilter(event.target.value)
        onFilter(greased, event.target.value)
    }

    return (
        <div className="filterWrapper">
            <label>
                Show only Greased
                <input type="checkbox" onChange={handleGreased}/>
            </label>
            <label>
                sort by: 
                <select onChange={handleFilter}>
                    <option value="name">name</option>
                    <option value="weight">weight</option>
                </select>
                    
            </label>
        </div>
    )
}

export default Filter
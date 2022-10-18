import React, {useState, useEffect} from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import PigTile from "./PigTile"
import Filter from "./Filter";

function App() {

	const [shownHogs, setHogs] = useState(hogs)

	const handleFilter = (greased, sortBy) => {
		let filterHogs = hogs
		if (greased) filterHogs = hogs.filter(hog => hog.greased)
		if (sortBy === "name") {
			setHogs([...filterHogs.sort((a, b) => {
				if (a.name > b.name) return 1
				if (a.name < b.name) return -1
				else return 0
			})])
		}
		else if (sortBy === "weight") {
			setHogs([...filterHogs.sort((a, b) => b.weight-a.weight)])
		}
	}

	useEffect(() => {
		handleFilter(false, "name")}
		, [])

	return (
		<div className="App">
			<Nav />
			<Filter onFilter={handleFilter} /> 
			<div className="ui grid container">
				{shownHogs.map(hog => <PigTile key={hog.name} hog={hog}/>)}
			</div>
		</div>
		
	);
}

export default App;

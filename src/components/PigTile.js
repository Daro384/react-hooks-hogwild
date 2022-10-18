import React, {useState} from "react"
import PigDetails from "./PigDetails"

const PigTile = ({hog}) => {

    const [showDetails, setDetails] = useState(false)
    const handleClick = () => {
        setDetails(!showDetails)
    }

    const pigDetails = showDetails ? 
        (<PigDetails
            specialty={hog.specialty}
            greased={hog.greased}
            weight={hog.weight}
            highestMedal={hog["highest medal achieved"]}
        />)
        :
        (<></>)

    return (
        <div onClick={handleClick} className="pigTile">
            <h3>{hog.name}</h3>
            <img src={hog.image} width={"200px"} alt="pig"/>
            {pigDetails}
        </div>
    )
}

export default PigTile
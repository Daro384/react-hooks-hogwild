import React from "react"

const PigDetails = ({specialty, weight, greased, highestMedal}) => {
    return (
        <div>
            <p>{`Specialty: ${specialty}`}</p>
            <p>{`Weight: ${weight}`}</p>
            <p>{`Greased: ${greased}`}</p>
            <p>{`Highest medal ever achieved: ${highestMedal}`}</p>
        </div>
    )
}

export default PigDetails
import React from 'react'
import { useInfo } from './context/info'

const Result = () => {
    const [infoDetails, setInfoDetails] = useInfo()
    return (
        <h1>{`You have selected ${infoDetails.cityName}, ${infoDetails.stateName}`}</h1>
    )
}

export default Result
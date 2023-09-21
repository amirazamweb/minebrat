import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useInfo } from './context/info';

const CitiesList = ({ id }) => {
    const [cities, setCities] = useState([]);
    const [infoDetails, setInfoDetails] = useInfo()

    // get cityList
    const getCityList = async () => {
        try {
            const { data } = await axios.get(`https://api.minebrat.com/api/v1/states/cities/${id}`);
            setCities(data);
        } catch (error) {
            console.log(error);
        }
    }
    const changeHandler = (e) => {
        setInfoDetails({ ...infoDetails, cityName: e.target.value })
    }

    // useEffect
    useEffect(() => {
        getCityList();
    }, [])
    return (
        <select onChange={changeHandler}>
            {cities.map((c, i) => {
                return <option value={c.cityName} key={i}>{c.cityName}</option>
            })}
        </select>
    )
}

export default CitiesList
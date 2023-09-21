import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CitiesList from './CitiesList';
import { useInfo } from './context/info';
import { useNavigate } from 'react-router-dom'

const List = () => {
    const [states, setStates] = useState([]);
    const [stateId, setStateId] = useState('');
    const [infoDetails, setInfoDetails] = useInfo();
    const navigate = useNavigate();

    const getStateList = async () => {
        try {
            const { data } = await axios.get('http://api.minebrat.com/api/v1/states');
            setStates(data);
        } catch (error) {
            console.log(error);
        }
    }

    // changeHandler
    const changeHandler = (e) => {
        setStateId(e.target.stateId);
        setInfoDetails({ ...infoDetails, stateName: e.target.value })
    }

    // submitHandler
    const submitHandler = () => {
        navigate('/result')
    }

    // useEffect
    useEffect(() => {
        getStateList()
    }, [])

    return (
        <>
            <select onChange={changeHandler}>
                {states.map((s, i) => {
                    return <option value={s.stateName} key={i} stateId={s.stateId}>{s.stateName}</option>
                })}
            </select>
            <br />
            <CitiesList id={stateId} />
            <br />
            <button onClick={submitHandler}>Submit</button>
        </>
    )
}

export default List
import React from 'react'
import { useState, useEffect } from 'react';
import Latest from '../Latest/Latest';
import Latestheading from '../Latestheading/Latestheading';
import axios from 'axios';
import Tech from '../../Tech/Tech';
import maintech from './maintech.css';
import { NavLink } from 'react-router-dom';
function MainTech() {
    const [tech, settech] = useState([]);
    useEffect(() => {
        const getdata = async () => {
            const res = await axios.get("https://first-blog123.herokuapp.com/api/top")
            settech(res.data);
            console.log(res.data);
        }
        getdata();
    }, [])

    return (
        <div className='adjust-all'>
            <Latestheading data={{ name1: "Technology" }} />
            <div className='main-tech'>

                <NavLink to={`/lateststories/${tech._id}`} className="Nav1" >
                    {
                        tech.map((item)=>{
                            return <Tech data={item}/>
                        })
                    }
                </NavLink>
                <Latest />
            </div>
        </div>
    )
}

export default MainTech

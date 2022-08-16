import React, { useEffect, useState } from 'react';
import Activity from './Activity';

const Home = () => {

    const[volunteers,setVolunteers]=useState([])
    const[search,setSearch]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setVolunteers(data))

    },[])

    const handleChange=(e)=>{
        const searchText=(e.target.value)
        const match=volunteers.filter((volunteer)=>volunteer.title.toLowerCase().includes(searchText));
        setSearch(match)


    }
    return (
        <div>
            <div  className='m-20'>
                <input onChange={handleChange} placeholder='Enter data' type="text" />
            </div>

            <div className='grid grid-cols-5 gap-4 mt-5'>
            {
                search.map(volunteer=><Activity key={volunteer.taskId} volunteer={volunteer} ></Activity>)
             }
             
            </div>
             
             

            
             
        </div>
    );
};

export default Home;


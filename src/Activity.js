import React from 'react';

const Activity = ({volunteer}) => {
    const{img,title}=volunteer;
    return (
        <div className='border flex-col items-center justify-center'>
            <img className='w-[300px] h-50' src={img} alt="" />
            <h1>{title}</h1>
            
        </div>
    );
};

export default Activity;
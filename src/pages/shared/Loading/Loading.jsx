import React from 'react';
import { CircleLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='min-h-[60vh] flex items-center justify-center'>
            <CircleLoader color='#CAEB66'/>
        </div>
    );
};

export default Loading;
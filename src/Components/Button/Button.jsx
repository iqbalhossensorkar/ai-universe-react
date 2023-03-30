import React from 'react';

const Button = ({children}) => {
    return (
        <div className='text-center'>
            <button className='btn btn-error font-bold text-white mb-6'>{children}</button>
        </div>
    );
};

export default Button;
import React from 'react';

const Container = ({children}:{children: React.ReactNode}) => (
    <div className="container">
        {children}
    </div>
)

export default Container;
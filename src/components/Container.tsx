import React from 'react'

const Container: React.FC = ({children}) => {
    return(
        <div className="px-8 py-4 lg:px-16">
            {children}
        </div>
    )
}

export default Container
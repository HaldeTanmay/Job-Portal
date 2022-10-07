import React from 'react'

export const Footer = () => {
    let style1 = {
        position: "relative",
        width: "100%",
        border: "3px solid blue",
    }
    return (
        <div className='bg-dark text-light py-3' style={style1}>
            <p className='text-center'>
                Copyright &copy; JobPortal.com
            </p>
        </div>
    )
}

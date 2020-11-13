import React from 'react'
import { useDispatch } from "react-redux";

import './header.css'

const Header = () => {
    const dispatch = useDispatch()
    return (
        <div className="header">
            <button onClick={()=>dispatch({type: 'SET_TYPES'})}>
                Toggle Types
            </button>
        </div>
    )
}

export default Header
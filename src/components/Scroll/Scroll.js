import React from 'react'
import './Scroll.scss'
import { Link } from 'react-router-dom'

function Scroll(props) {
    return (
        <div className="scroll-button">
            <Link to={props.page} />
            <span>scroll</span>
            <div className="line-container">
                <div className="line"></div>
            </div>
        </div>
    )
}

export default Scroll
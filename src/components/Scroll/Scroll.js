import React from 'react'
import './Scroll.scss'
import { Link } from 'react-router-dom'

const scrollButtonClass = white => white ? 'scroll-button white' : 'scroll-button'
const scrollLineClass = white => white ? 'line white' : 'line'

function Scroll(props) {
    const white = props.white

    return (
        <div className={scrollButtonClass(white)}>
            <Link to={props.page} />
            <span>scroll</span>
            <div className="line-container">
                <div className={scrollLineClass(white)}></div>
            </div>
        </div>
    )
}

export default Scroll
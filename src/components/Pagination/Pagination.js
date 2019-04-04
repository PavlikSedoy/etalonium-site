import React, {Component} from 'react';
import './Pagination.scss'

import { Link } from 'react-router-dom'

function Pagination(props) {
    return (
        <div className="Pagination">
            <Link to="/" className={ props.activePage === 1 ? "Pagination__item active" : "Pagination__item" }>
                <div className="Pagination__item-in"></div>
            </Link>
            <Link to="/whatpreloader" className={ props.activePage === 2 ? "Pagination__item active" : "Pagination__item" }>
                <div className="Pagination__item-in"></div>
            </Link>
            <Link to="/whopreloader" className={ props.activePage === 3 ? "Pagination__item active" : "Pagination__item" }>
                <div className="Pagination__item-in"></div>
            </Link>
        </div>
    )
}

export default Pagination;

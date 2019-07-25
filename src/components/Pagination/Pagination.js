import React, {Component} from 'react';
import './Pagination.scss'

import { Link } from 'react-router-dom'

const paginationClass = ( linkPage, activePage, white ) => {
    let paginationClassName = "Pagination__item"
    const activeClass = ' active'
    const whiteClass = ' white'

    if ( linkPage === activePage ) paginationClassName = paginationClassName.concat(activeClass)
    if ( white ) paginationClassName = paginationClassName.concat(whiteClass)

    return paginationClassName
}

const paginationLink = ( page, pageNumber) => pageNumber.concat(page)

function Pagination(props) {
    const activePage = props.activePage
    const white = props.white

    const firsPage = '/'
    const secondPage = '/whatpreloader'
    const thirdPage = '/whopreloader'

    const page = props.page ? props.page : ''

    return (
        <div className="Pagination">
            <Link to={ paginationLink(page, firsPage) } className={ paginationClass(1, activePage, white) }>
                <div className="Pagination__item-in"></div>
            </Link>
            <Link to={ paginationLink(page, secondPage) } className={ paginationClass(2, activePage, white) }>
                <div className="Pagination__item-in"></div>
            </Link>
            <Link to={ paginationLink(page, thirdPage) } className={ paginationClass(3, activePage, white) }>
                <div className="Pagination__item-in"></div>
            </Link>
        </div>
    )
}

export default Pagination;

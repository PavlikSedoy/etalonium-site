import React, {Component} from 'react';
import './What.scss'

// import { CSSTransition } from 'react-transition-group'

class What extends Component {
    
    openWhatItem = (e) => {
        var whoItems = this.props.whatItems
        const id = e.target.id

        var whoItemsR = whoItems.map((item) => {
            return item.isOpen = false
        })

        this.props.updateItems(whoItemsR)

        whoItems[id].isOpen = !this.props.whatItems[id].isOpen
        this.props.updateItems(whoItems)
    }
    
    render() {
        return (
            <main className="What">
                <div className="What__left-side">
                    <div className="What__container">
                        <div className="What__title">
                            <h1>Preference:</h1>
                        </div>
                        <div className="What__content">
                            { this.props.whatItems.map((whoItem, index) => {
                                return (
                                    <article className={ whoItem.isOpen ? 'What__item active' : 'What__item disable' } key={index}>
                                        <div className="What__item_header">
                                            <div className={ whoItem.isOpen ? 'What__item_title-img active' : 'What__item_title-img' }>
                                                {whoItem.icon}
                                            </div>
                                            <div className="What__item-title_wr">
                                                <h3 className={ whoItem.isOpen ? 'What__item-title' : 'What__item-title disactive' } onClick={this.openWhatItem} key={index} id={index}>{whoItem.title}</h3>
                                            </div>
                                            <div className={ whoItem.isOpen ? 'What__item_title-arrow active' : 'What__item_title-arrow' }>
                                                <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.2056 0.00339905C14.1756 0.0271924 14.149 0.0509857 14.1223 0.0781781L8 6.32903L1.87432 0.07138C1.84769 0.0441876 1.82439 0.0203943 1.79442 0L0 1.83209C0.0233042 1.85928 0.0466084 1.88647 0.0699126 1.91366L7.36413 9.36098C7.3841 9.38137 7.40741 9.40177 7.43071 9.42216L7.99667 10L8.53932 9.44596C8.57262 9.41876 8.60591 9.39157 8.63587 9.36098L15.9268 1.92046C15.9534 1.89327 15.9767 1.86608 16 1.83549L14.2056 0.00339905Z" fill="#929292"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16" height="10" fill="white"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                        </div>
                                        {/*<CSSTransition*/}
                                            {/*classNames="what"*/}
                                            {/*transitionEnterTimeout={900}*/}
                                            {/*transitionLeaveTimeout={600}*/}
                                        {/*>*/}
                                            <div className='What__item_text'>
                                                <div className="What__item_text-content">
                                                    {whoItem.text}
                                                </div>
                                            </div>
                                        {/*</CSSTransition>*/}
                                    </article>
                                )}
                            )}
                        </div>
                    </div>
                </div>
                <div className="What__right-side"></div>
            </main>
        );
    }
}

export default What;

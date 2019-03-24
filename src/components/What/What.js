import React, {Component} from 'react';
import './What.scss'

import { CSSTransitionGroup } from 'react-transition-group'

class What extends Component {
    state = {
        whoItems: [
            {
                title: 'Blockchain',
                icon: '',
                text: 'Share of transactions on mobile platforms is also growing steadily. According to “The State of Fashion 2018”, the brands more often focuses on e-commerce.',
                isOpen: true
            },
            {
                title: 'Verifications',
                icon: '',
                text: 'Share of transactions on mobile platforms is also growing steadily. According to “The State of Fashion 2018”, the brands more often focuses on e-commerce.',
                isOpen: false
            },
            {
                title: 'Rating system of competitions',
                icon: '',
                text: 'Share of transactions on mobile platforms is also growing steadily. According to “The State of Fashion 2018”, the brands more often focuses on e-commerce.',
                isOpen: false
            },
            {
                title: 'Stayble coin',
                icon: '',
                text: 'Share of transactions on mobile platforms is also growing steadily. According to “The State of Fashion 2018”, the brands more often focuses on e-commerce.',
                isOpen: false
            },

        ]
    }
    
    openWhatItem = (e) => {
        var { whoItems } = this.state
        const id = e.target.id

        var whoItemsR = this.state.whoItems.map((item) => {
            item.isOpen = false
        })
        this.setState({ whoItems, whoItemsR })

        whoItems[id].isOpen = !this.state.whoItems[id].isOpen
        this.setState({ whoItems })
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
                            {/*<CSSTransitionGroup*/}
                                {/*transitionName="what"*/}
                                {/*transitionEnterTimeOut={300}*/}
                                {/*transitionLeaveTimeOut={300}*/}
                            {/*>*/}
                                { this.state.whoItems.map((whoItem, index) => {
                                    return (
                                        <article className="What__item">
                                            <div className="What__item_header">
                                                <h3 className="What__item-title" onClick={this.openWhatItem} key={index} id={index}>{whoItem.title}</h3>
                                            </div>
                                            <CSSTransitionGroup
                                                transitionName="what"
                                                transitionEnterTimeOut={300}
                                                transitionLeaveTimeOut={300}
                                            >
                                            { whoItem.isOpen ? (
                                                <div className="What__item_text">
                                                    {whoItem.text}
                                                </div>
                                            ) : null }
                                            </CSSTransitionGroup>
                                        </article>
                                    )}
                                )}
                            {/*</CSSTransitionGroup>*/}
                        </div>
                    </div>
                </div>
                <div className="What__right-side"></div>
            </main>
        );
    }
}

export default What;

import React, {Component} from 'react';
import './What.scss'

class What extends Component {
    state = {
        whoItem: [
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
    
    openWhatItem = () => {
        this.setState({
            isOpen: !this.state.whoItem.isOpen
        })
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
                            { this.state.whoItem.map((item, index) => {
                                return (
                                    <article className="What__item" key={index}>
                                        <div className="What__item_header" onClick={this.openWhatItem}>
                                            <h3 className="What__item-title">{item.title}</h3>
                                        </div>
                                        { item.isOpen ? (
                                            <div className="What__item_text">
                                                {item.text}
                                            </div>
                                        ) : null }
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

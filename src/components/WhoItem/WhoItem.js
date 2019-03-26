import React, {Component} from 'react';

class WhoItem extends Component {
    render() {
        return (
            <article className={"Who__item " + this.props.classes} id={this.props.classes} onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave}>
                <div className="Who__roule-name">{this.props.name}</div>
                <img src={this.props.shadow} className="Who__shadow" alt=""/>
                <img src={this.props.img} className="Who__img" alt=""/>
                <div className="Who__content">
                    <div className="Who__content_title">{this.props.oneLineName}</div>
                    <div className="Who__content_desc">{this.props.children}</div>
                    <div className="Who__content_more-info">
                        <a href="/" className="Who__content_more-info_link">More info</a>
                    </div>
                </div>
            </article>
        );
    }
}

export default WhoItem;

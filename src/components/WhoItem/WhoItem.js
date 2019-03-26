import React, {Component} from 'react';

class WhoItem extends Component {
    render() {
        return (
            <article className={"Who__item " + this.props.classes} id={this.props.classes} onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave}>
                <div className="Who__roule-name">{this.props.name}</div>
                <img src={this.props.shadow} className="Who__shadow" alt=""/>
                <img src={this.props.img} className="Who__img" alt=""/>
            </article>
        );
    }
}

export default WhoItem;

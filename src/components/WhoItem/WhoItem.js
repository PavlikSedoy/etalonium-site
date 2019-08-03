import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import arrow from '../../img/Arrow-2.svg'

class WhoItem extends Component {
    render() {
        return (
            <article className={"Who__item " + this.props.classes} id={this.props.classes} onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave}>
                <div className="Who__roule-name">{this.props.name}</div>
                <img src={this.props.shadow} className="Who__shadow" alt=""/>
                <img src={this.props.img} className="Who__img" alt=""/>
                <div className="Who__content">
                    <div className="Who__content_title">
                        <div className="Who__content_title-in">
                            {this.props.name}
                        </div>
                    </div>
                    <div className="Who__content_desc">
                        <div className="Who__content_desc-in">
                            {this.props.children}
                        </div>
                    </div>
                    <div className="Who__content_more-info hover-bg">
                        <div className="Who__content_more-info-in">
                            <div className="hover-bg__bg bg-white"></div>
                            <img src={arrow} alt="" className="Who__content_more-info_img"/>
                            <Link to={this.props.link} className="Who__content_more-info_link">More info</Link>
                        </div>
                    </div>
                </div>
            </article>
        );
    }
}

export default WhoItem;

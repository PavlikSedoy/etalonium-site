import React, {Component} from 'react';
import './Who.scss'

//  Components
import WhoItem from '../WhoItem/WhoItem'

class Who extends Component {

    mouseHoverItem = e => {
        const item = e.currentTarget.id
        document.getElementById("model").classList.add('disactive')
        document.getElementById("fashion-maker").classList.add('disactive')
        document.getElementById("agent").classList.add('disactive')
        document.getElementById("producer").classList.add('disactive')
        document.getElementById(item).classList.add('active')
    }

    mouseOverItem = e => {
        const item = e.currentTarget.id
        document.getElementById("model").classList.remove('disactive')
        document.getElementById("fashion-maker").classList.remove('disactive')
        document.getElementById("agent").classList.remove('disactive')
        document.getElementById("producer").classList.remove('disactive')
        document.getElementById(item).classList.remove('active')
    }


    render() {
        return (
            <main
                className="Who"
                id="who-container"
            >
                <WhoItem
                    key={0}
                    name="model"
                    oneLineName="model"
                    classes={[
                        'model'
                    ]}
                    img="../../img/who/model.png"
                    shadow="../../img/who/model-shadow.png"
                    onMouseEnter={this.mouseHoverItem.bind(this)}
                    onMouseLeave={this.mouseOverItem.bind(this)}
                >
                    Share of transactions on mobile platforms is also
                    growing steadily. According to “The State of
                    Fashion 2018”, the brands more often focuses
                    on e-commerce.
                </WhoItem>
                <WhoItem
                    key={1}
                    name={["fashion", <br/>, "maker"]}
                    oneLineName="fashion maker"
                    classes={[
                        'fashion-maker'
                    ]}
                    img="../../img/who/fashionmaker.png"
                    shadow="../../img/who/fashionmaker-shadow.png"
                    onMouseEnter={this.mouseHoverItem.bind(this)}
                    onMouseLeave={this.mouseOverItem.bind(this)}
                >
                    Share of transactions on mobile platforms is also
                    growing steadily. According to “The State of
                    Fashion 2018”, the brands more often focuses
                    on e-commerce.
                </WhoItem>
                <WhoItem
                    key={2}
                    name="agent"
                    oneLineName="agent"
                    classes={[
                        'agent'
                    ]}
                    img="../../img/who/agent.png"
                    shadow="../../img/who/agent-shadow.png"
                    onMouseEnter={this.mouseHoverItem.bind(this)}
                    onMouseLeave={this.mouseOverItem.bind(this)}
                >
                    Share of transactions on mobile platforms is also
                    growing steadily. According to “The State of
                    Fashion 2018”, the brands more often focuses
                    on e-commerce.
                </WhoItem>
                <WhoItem
                    key={3}
                    name="Producer"
                    oneLineName="Producer"
                    classes={[
                        'producer'
                    ]}
                    img="../../img/who/producer.png"
                    shadow="../../img/who/producer-shadow.png"
                    onMouseEnter={this.mouseHoverItem.bind(this)}
                    onMouseLeave={this.mouseOverItem.bind(this)}
                >
                    {"\n"} {"\n"} {"\n"}
                    Share of transactions on mobile platforms is also
                    growing steadily. According to “The State of
                    Fashion 2018”, the brands more often focuses
                    on e-commerce.
                </WhoItem>
            </main>
        );
    }
}

export default Who;

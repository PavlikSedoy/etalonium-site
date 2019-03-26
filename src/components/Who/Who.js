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

    // mouseHoverContainer = e => {
    //     // const item = e.currentTarget.id
    //     document.getElementById("model").classList.add('disactive')
    //     document.getElementById("fashion-maker").classList.add('disactive')
    //     document.getElementById("agent").classList.add('disactive')
    //     document.getElementById("producer").classList.add('disactive')
    // }
    //
    // mouseOverContainer = e => {
    //     // const item = e.currentTarget.id
    //     document.getElementById("model").classList.remove('disactive')
    //     document.getElementById("fashion-maker").classList.remove('disactive')
    //     document.getElementById("agent").classList.remove('disactive')
    //     document.getElementById("producer").classList.remove('disactive')
    // }

    render() {
        return (
            <main
                className="Who"
                id="who-container"
                // onMouseEnter={this.mouseHoverContainer}
                // onMouseLeave={this.mouseOverContainer}
            >
                <WhoItem
                    key={0}
                    name="model"
                    classes={[
                        'model'
                    ]}
                    img="../../img/who/model.png"
                    shadow="../../img/who/model-shadow.png"
                    onMouseEnter={this.mouseHoverItem.bind(this)}
                    onMouseLeave={this.mouseOverItem.bind(this)}
                />
                <WhoItem
                    key={1}
                    name={["fashion", <br/>, "maker"]}
                    classes={[
                        'fashion-maker'
                    ]}
                    img="../../img/who/fashionmaker.png"
                    shadow="../../img/who/fashionmaker-shadow.png"
                    onMouseEnter={this.mouseHoverItem.bind(this)}
                    onMouseLeave={this.mouseOverItem.bind(this)}
                />
                <WhoItem
                    key={2}
                    name="agent"
                    classes={[
                        'agent'
                    ]}
                    img="../../img/who/agent.png"
                    shadow="../../img/who/agent-shadow.png"
                    onMouseEnter={this.mouseHoverItem.bind(this)}
                    onMouseLeave={this.mouseOverItem.bind(this)}
                />
                <WhoItem
                    key={3}
                    name="Producer"
                    classes={[
                        'producer'
                    ]}
                    img="../../img/who/producer.png"
                    shadow="../../img/who/producer-shadow.png"
                    onMouseEnter={this.mouseHoverItem.bind(this)}
                    onMouseLeave={this.mouseOverItem.bind(this)}
                />
            </main>
        );
    }
}

export default Who;

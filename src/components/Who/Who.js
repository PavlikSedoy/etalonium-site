import React, {Component} from 'react';
import './Who.scss'

//  Components
import WhoItem from '../WhoItem/WhoItem'
import BgTextEtal from "../BgTextEtal/BgTextEtal";

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
                <BgTextEtal/>
                <WhoItem
                    key={0}
                    name="Models"
                    classes={[
                        'model'
                    ]}
                    img="../../img/who/model.png"
                    shadow="../../img/who/model-shadow.png"
                    onMouseEnter={this.mouseHoverItem.bind(this)}
                    onMouseLeave={this.mouseOverItem.bind(this)}
                >
                    Use Etalonium for career growth, find and communicate with lead photographers, designers and agents from around the world, share your success in the news feed and inspire millions of beginner models by your example.
                </WhoItem>
                <WhoItem
                    key={1}
                    name="Creatives"
                    classes={[
                        'fashion-maker'
                    ]}
                    img="../../img/who/fashionmaker.png"
                    shadow="../../img/who/fashionmaker-shadow.png"
                    onMouseEnter={this.mouseHoverItem.bind(this)}
                    onMouseLeave={this.mouseOverItem.bind(this)}
                >
                    Your talent as a fashion designer, photographer, stylist or makeup artist will be appreciated by customers from all around the world, so follow your dream, sell your services and demonstrate your creativity to the whole world.
                </WhoItem>
                <WhoItem
                    key={2}
                    name="Agents"
                    classes={[
                        'agent'
                    ]}
                    img="../../img/who/agent.png"
                    shadow="../../img/who/agent-shadow.png"
                    onMouseEnter={this.mouseHoverItem.bind(this)}
                    onMouseLeave={this.mouseOverItem.bind(this)}
                >
                    Find beginner Models and fashion makers, become an agent who supports at the start, creates a star and gets a percentage of successful orders. Your contacts in real life, taste and experience, will help you consistently make money.
                </WhoItem>
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
                >
                    If you have a dollar - you are a Producer(you can be a producer). Support and invest in growing models, getting a percentage of completed orders and a constantly growing asset in the form of a token.
                </WhoItem>
            </main>
        );
    }
}

export default Who;

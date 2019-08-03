import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'
import './Who.scss'

//  Components
import WhoItem from '../WhoItem/WhoItem'
import BgTextEtal from "../BgTextEtal/BgTextEtal";

class Who extends Component {
    state = {
        redirect: false,
        mouseWheelDirection: ''
    }

    componentDidMount() {
        document.addEventListener('wheel', () => {
            this.setRedirect()
        })
    }

    wheel(e) {
        e.preventDefault()

        document.getElementById("model").classList.remove('disactive')
        document.getElementById("fashion-maker").classList.remove('disactive')
        document.getElementById("agent").classList.remove('disactive')
        document.getElementById("producer").classList.remove('disactive')

        var directionWheel = e.deltaY > 0 ? 'down' : 'up'

        this.setState({
            mouseWheelDirection: directionWheel
        })
    }

    setRedirect = () => {
        setTimeout( () => this.setState({
            redirect: true
        }), 500 )
    }

    renderRedirect = () => {
        if ( this.state.redirect && this.state.mouseWheelDirection === 'up' ) return <Redirect to='/whatpreloader' />
    }

    mouseHoverItem = e => {
        if (this.state.mouseWheelDirection === '') {
            const item = e.currentTarget.id
            document.getElementById("model").classList.add('disactive')
            document.getElementById("fashion-maker").classList.add('disactive')
            document.getElementById("agent").classList.add('disactive')
            document.getElementById("producer").classList.add('disactive')
            document.getElementById(item).classList.add('active')
        } else return       
    }

    mouseOverItem = e => {
        if (this.state.mouseWheelDirection === '') {
            const item = e.currentTarget.id
            document.getElementById("model").classList.remove('disactive')
            document.getElementById("fashion-maker").classList.remove('disactive')
            document.getElementById("agent").classList.remove('disactive')
            document.getElementById("producer").classList.remove('disactive')
            document.getElementById(item).classList.remove('active')
        } else return
    }


    render() {
        return (
            <main
                className="Who"
                id="who-container"
                onWheel = {(e) => this.wheel(e)}
            >
                {this.renderRedirect()}
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
                    link="model"
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
                    link="creative"
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
                    link="agent"
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
                    link="producer"
                >
                    If you have a dollar - you are a Producer(you can be a producer). Support and invest in growing models, getting a percentage of completed orders and a constantly growing asset in the form of a token.
                </WhoItem>
            </main>
        );
    }
}

export default Who;

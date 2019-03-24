import React from 'react'
import './Home.scss'

import Messenger from '../Messenger/Messenger'

const Home = () => {
    return (
        <div>
            <Messenger news={[
                'Welcome to Decentrilize Fashion World',
                'Choose your creatives and promote them',
                'Become a producer in world of fashion',
                'Make Dream profitable'
            ]}/>
        </div>
    )
}

export default Home
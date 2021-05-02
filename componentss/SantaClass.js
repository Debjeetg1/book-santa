import React from 'react';
import LottieView from 'lottie-react-native';


class SantaAnimation extends React.Component{
    render()
    {
        return(
            <LottieView src={require('../assets/4887-book.gif')}
            style={{width:'60%'}} autoPlay loop/>
        )
    }
}

export default SantaAnimation;
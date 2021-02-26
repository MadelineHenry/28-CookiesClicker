import React from 'react';
import imgCookie from '../imgs/imgCookie.svg';

class Cookie extends React.Component {

    render() {
        return ( 
            <div className="cookieCount">
                <p>{this.props.getCount.toFixed(0)}</p>
                <p>{this.props.getCookiesPerSec.toFixed(0)} Cookies /sec</p>
                <img onClick={() => this.props.onUpdateCookies(1)} id="imgCookie" src={imgCookie}/>
            </div>
        )
    }
}

export default Cookie;
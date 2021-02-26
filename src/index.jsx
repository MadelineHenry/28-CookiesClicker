import React from 'react';
import ReactDOM from 'react-dom';
import Cookie from './components/Cookie'
import SideBar from './components/SideBar';
import Buildings from './components/Buildings';
import './style.css';

class App extends React.Component {
    state = {
        cookies: 0,
        cookiesPerSec: 0,
    }

    incrementCookie = (x) => {
        let count = this.state.cookies;
        count = count + x;
        this.setState({ cookies: count});

    }

    updateCookiesPerSec = (x) => {
        let cookiesPerSec = this.state.cookiesPerSec;
        cookiesPerSec =+ x;
        this.setState({ cookiesPerSec});
    }
    setIterval = setInterval(() =>{
    this.incrementCookie(this.state.cookiesPerSec)}, 1000);

    render() {
        return (
            <>
                <h1>Welcome to Cookies Cliker</h1>
                <main id="main">
                    <Cookie 
                    onUpdateCookies={this.incrementCookie} 
                    getCount={this.state.cookies}
                    getCookiesPerSec = {this.state. cookiesPerSec}/>
                    
                    <SideBar>
                        <Buildings 
                        onUpdateCookies={this.incrementCookie} 
                        getCount={this.state.cookies}
                        onUpdatePerSec={this.updateCookiesPerSec}/>
                    </SideBar>
                </main>
            </>
        )
    }
}
ReactDOM.render(<App />, document.querySelector('#root'))
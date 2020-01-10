import React, {Component} from 'react';
import NavBar from './navbar.jsx';
import Coffee from './coffee.jsx';
import Order from './order.jsx';

class App extends Component {

    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <div className="container">
                    <div className="row">
                        <Coffee />
                        <Order />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default App;
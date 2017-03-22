import React from 'react';
import NavBar from './NavBar';

const App = React.createClass({
    render: function () {
        return (
            <div>
                <NavBar />
                <h1 className="title is-1">NorthCoders News</h1>
                {this.props.children}
                </div>
        );
    }
});

export default App;
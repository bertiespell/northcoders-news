import React from 'react';
import NavBar from './NavBar';

const App = React.createClass({
    render: function () {
        return (
            <div>
                <NavBar />
                <nav className='level'>
                <nav className='level-item has-text-centered' id='titleBox'>
                <h1 className="title is-1" id='titlee'><strong>NORTHCODERS NEWS</strong></h1>
                </nav>
                </nav>
                {this.props.children}
                </div>
        );
    }
});

export default App;
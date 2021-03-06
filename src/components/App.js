import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

const App = React.createClass({
    render: function () {
        return (
            <div>
                <NavBar />
                <nav className='level'>
                    <nav className='level-item has-text-centered' >
                        <div className='box' id='titleBox'>
                            <h1 className="title is-1 is-hidden-mobile" id='titlee'><strong>NORTHCODERS NEWS</strong></h1>
                        </div>
                    </nav>
                </nav>
                {this.props.children}
                <Footer />
            </div>
        );
    }
});

export default App;
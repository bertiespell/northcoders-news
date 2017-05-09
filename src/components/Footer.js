import React from 'react';

function Footer() {
    return (
        <div className='Footer'>
            <footer className="footer">
                <div className="container">
                    <div className="content has-text-centered">
                        <p>
                            <strong>Northcoders News</strong> by <a href="http://jgthms.com">Bertie Spell</a>. The source code for this project can be found on Github
        <a href="https://github.com/bertiespell/northcoders-news"> here</a>.
      </p>
                        <p>
                            <a className="icon" href="https://github.com/bertiespell">
                                <i className="fa fa-github"></i>
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
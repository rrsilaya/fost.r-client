import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router-dom';

import Navigation from './components/Navigation';
import Logo from './components/Logo';
import Feature from './components/Feature';
import Footer from './components/Footer';

class Home extends Component {
  render() {
    return (
      <DocumentTitle title="fost.r">
        <div>
          <div
            className="uk-background-secondary uk-width-1-1 uk-background-cover uk-background-blend-overlay full-splash uk-light"
            style={{
              backgroundImage: `url('http://loremflickr.com/g/1080/720/wildlife')`
            }}>
            <Navigation />

            <Logo />
          </div>

          <Feature />
          <Footer />
        </div>
      </DocumentTitle>
    );
  }
}

export default Home;

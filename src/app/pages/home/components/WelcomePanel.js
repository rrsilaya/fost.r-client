import React, { Component } from 'react';

class WelcomePanel extends Component {
  render() {
    return (
      <div>
        <div className="uk-position-relative uk-light">
          <img
            src="https://s-media-cache-ak0.pinimg.com/736x/85/03/0d/85030dacda1b1f91b92ff77056b17648--funny-animal-pics-animal-funnies.jpg"
            alt="Image"
          />
          <div className="uk-position-bottom-center uk-position-medium">
            <ul className="uk-dotnav uk-flex-nowrap">
              <li className="uk-active"><a href="#">Item 1</a></li>
              <li><a href="#">Item 2</a></li>
              <li><a href="#">Item 3</a></li>
              <li><a href="#">Item 4</a></li>
              <li><a href="#">Item 5</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default WelcomePanel;

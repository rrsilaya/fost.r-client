import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class Panel extends Component {
  render() {
    return (
      <div>
        <ul
          classname="uk-tab-right"
          data-uk-tab
          data-uk-switcher="{connect:'#my-id'}">
          <li><a href="">Profile</a></li>
          <li><a href="">Privacy</a></li>
          <li><a href="">Muted Shelters</a></li>
          <li><a href="">Transactions</a></li>
        </ul>

        <ul id="my-id" className="uk-switcher">
          <li>Content 1</li>
          <li>Content 2</li>
          <li>Content 3</li>
          <li>Content 4</li>
        </ul>
      </div>
    );
  }
}

export default Panel;

<div>
  <ul class="uk-tab-right" uk-tab>
    <li class="uk-active"><a href="#">Right</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
  </ul>
</div>;

import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Switch, Route, Redirect } from 'react-router-dom';

import links from './components/routes'; // change the routes here if you're adding components
import Tabs from './components/Tabs';

class Settings extends Component {
  render() {
    return (
      <DocumentTitle title="fost.r • Account Settings">
        <div
          className="uk-container settings-container uk-margin-auto uk-margin-medium-top uk-grid-medium"
          data-uk-grid>
          <div><Tabs /></div>
          <div className="uk-width-expand">
            <Switch>
              {links.map((tab, key) =>
                <Route exact path={tab.route} component={tab.component} />
              )}
              <Redirect to={links[0].route} />
            </Switch>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default Settings;

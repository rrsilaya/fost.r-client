import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router-dom';

import FullLoader from '../../components/FullLoader';
import PetPage from './components/PetPage';
import Adopt from './components/Adopt';
import Date from './components/DateContainer';

class PetProfile extends Component {
  componentWillMount() {
    this.props.loadProfile(this.props.match.params.id);
  }

  render() {
    return (
      <DocumentTitle
        title={
          'fost.r' + (this.props.data ? ` • ${this.props.data.name}` : '')
        }>
        {this.props.isLoading
          ? <FullLoader />
          : <div className="uk-container uk-container-small uk-margin-medium-top">
              <ul className="uk-breadcrumb">
                <li><Link to="/feed">Feed</Link></li>
                <li>
                  {this.props.match.params.page === 'profile'
                    ? <span>{this.props.data.name}</span>
                    : <Link to={`/feed/${this.props.data._id}/profile`}>
                        {this.props.data.name}
                      </Link>}
                </li>
                {this.props.match.params.page === 'profile'
                  ? ''
                  : <li>
                      <span>
                        {this.props.match.params.page.charAt(0).toUpperCase() +
                          this.props.match.params.page.substr(1)}
                      </span>
                    </li>}
              </ul>

              {this.props.match.params.page === 'profile'
                ? <PetPage petData={this.props.data} />
                : this.props.match.params.page === 'adopt'
                  ? <Adopt
                      name={this.props.data.name}
                      house={this.props.data.location}
                      id={this.props.data._id}
                    />
                  : <Date
                      id={this.props.data._id}
                      name={this.props.data.name}
                    />}
            </div>}
      </DocumentTitle>
    );
  }
}

export default PetProfile;

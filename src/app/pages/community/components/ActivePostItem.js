import React from 'react';

const ActivePostItem = () => {
  return (
    <li className="uk-grid-match uk-grid-collapse" data-uk-grid>
      <div className="uk-flex uk-flex-middle uk-margin-right">
        <div className="uk-text-success uk-text-large">
          <span data-uk-icon="icon: triangle-up" />&nbsp;5
        </div>
      </div>
      <div className="uk-width-expand uk-text-small uk-flex uk-flex-middle">
        <div>
          <h5 className="uk-text-bold uk-margin-remove">
            lorem ipsum - dolor sit amet
          </h5>
          How to time delay submit button with JQuery in Wordpress Avada Theme?
        </div>
      </div>
    </li>
  );
};

export default ActivePostItem;

import React from 'react';

const Tabs = ({ activeTab, changeTab, getPets }) => {
  const tabs = ['Dates', 'Requests', 'Pets'];

  const handleTabChange = e => {
    e.preventDefault();
    changeTab(e.target.name);

    switch (e.target.name) {
      case 'pets':
        getPets();
    }
  };

  return (
    <ul className="uk-flex uk-flex-center" data-uk-tab>
      {tabs.map((tab, key) =>
        <li
          className={activeTab === tab.toLowerCase() ? 'uk-active' : ''}
          key={key}>
          <a href="#" name={tab.toLowerCase()} onClick={handleTabChange}>
            {tab}
          </a>
        </li>
      )}
    </ul>
  );
};

export default Tabs;

// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ButtonIcon from '../';

export const Context = props => (
  <div style={{ padding: '0.5rem', backgroundColor: '#16325C' }}>
    {props.children}
  </div>
);

export default (
  <ButtonIcon
    assistiveText="Search"
    title="Search"
    theme="inverse"
    symbol="search"
  />
);

export let states = [
  {
    id: 'disabled',
    label: 'Disabled',
    element: (
      <ButtonIcon
        assistiveText="Search"
        title="Search"
        theme="inverse"
        symbol="search"
        disabled
      />
    )
  }
];

export let examples = [
  {
    id: 'with-dropdown',
    label: 'With dropdown',
    element: (
      <ButtonIcon
        hasDropdown
        theme="transparent"
        className="slds-button_icon-inverse"
        assistiveText="More options"
        title="More Options"
      />
    )
  },
  {
    id: 'hint-hover',
    label: 'Hint on hover',
    element: (
      <div className="slds-hint-parent">
        <ButtonIcon
          theme="inverse"
          iconClassName="slds-button__icon_inverse-hint"
          assistiveText="More options"
          title="More Options"
        />
      </div>
    )
  }
];

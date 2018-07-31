/* eslint-disable no-console */
import React from 'react';
import colors from '../../../shared/defaults/colors';
import { UITheme } from '../../../shared/enums';
import { StyledApp } from './styles';

import Dropdown from '../../../shared/components/Dropdown';

export interface IState {
  darkTheme: boolean;
}

export default class App extends React.Component<{}, IState> {
  public state: IState = {
    darkTheme: false,
  };

  private onIconClick = () => {
    console.log('icon click');
  };

  public render() {
    const { darkTheme } = this.state;
    const theme: UITheme = darkTheme ? UITheme.Dark : UITheme.Light;

    return (
      <StyledApp theme={theme}>
        <Dropdown>
          <Dropdown.Item value="item-1">Item 1</Dropdown.Item>
          <Dropdown.Item value="item-2">Item 2</Dropdown.Item>
          <Dropdown.Item value="item-3">Item 3</Dropdown.Item>
          <Dropdown.Item value="item-4">Item 4</Dropdown.Item>
        </Dropdown>
      </StyledApp>
    );
  }
}
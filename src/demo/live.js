import React from 'react';
import { Link } from 'react-router-dom';

import {
  Block, Button, ButtonGroup, Heading, Text
} from '../Components';

import '../Styles/foundation.scss';

const H_PADDING = [4, 5, 6, 7];

class Live extends React.Component {
  renderPageTitle = () => (
    <Block flex alignItems="center" justify="between" paddingVertical="5" paddingHorizontal={H_PADDING}>
      <Heading element="1">Live</Heading>
      <Button primary icon="add-bold">new live&hellip;</Button>
    </Block>
  )

  renderFilterBar = () => (
    <Block flex paddingHorizontal={H_PADDING}>
      <Block flex background="neutral-300" paddingHorizontal={[2, 3]} paddingVertical="3">
        <input type="text" placeholder="filter events" />
        <ButtonGroup>
          <Button icon="arrow-small-down" iconAfterText>
            2019/3/5
            <Text className="pl-4 pl-5-ns">10:30 UTC</Text>
          </Button>
          <Button icon="arrow-small-down" iconAfterText>type</Button>
          <Button icon="arrow-small-down" iconAfterText>status</Button>
        </ButtonGroup>
      </Block>
    </Block>
  )

  render() {
    return (
      <>
        {this.renderPageTitle()}
        {this.renderFilterBar()}
        <ul>
          <li><Link to="/live/event">NBA 2019 All-Star Game</Link></li>
          <li><Link to="/live/event">NBA 2019 All-Star Game</Link></li>
          <li><Link to="/live/event">NBA 2019 All-Star Game</Link></li>
        </ul>
      </>
    );
  }
}

export default Live;

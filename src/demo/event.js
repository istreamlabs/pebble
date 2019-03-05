import React from 'react';

import {
  Badge,
  Card,
  Block,
  Button,
  ButtonGroup,
  Heading,
  Tabs,
  Text,
} from '../Components';

import '../Styles/foundation.scss';

const H_PADDING = [4, 5, 6, 7];

const TAB_CONTENT = [
  {
    id: 'overview',
    content: 'Overview'
  },
  {
    id: 'metadata',
    content: 'Metadata'
  },
  {
    id: 'slates',
    content: 'Slates'
  },
  {
    id: 'scte35',
    content: 'SCTE-35 History'
  },
  {
    id: 'change-log',
    content: 'Change Log'
  }
];

class Event extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedTabId: 'overview',
    };
  }

  handleTabSelect = (newSelectedTab) => {
    this.setState({ selectedTabId: newSelectedTab });
  }

  renderPageTitle = () => (
    <Block direction="column" background="white" paddingVertical="6" paddingHorizontal={H_PADDING}>
      <Block justify="between" alignItems="center">
        <div>
          <Heading element="6" className="neutral-500">LIVE COMPETITION</Heading>
          <Heading element="1">NBA 2019 All-Star Game</Heading>
          <Text bold>Sunday, Feb 17, 2019 at 5:00 PM</Text>
        </div>
        <div>
          <Button danger icon="remove-circle" className="shadow-1">delete</Button>
        </div>
      </Block>
    </Block>
  );

  renderTabs = () => {
    const {
      selectedTabId
    } = this.state;

    return (
      <Block background="white" paddingHorizontal={H_PADDING}>
        <Tabs tabs={TAB_CONTENT} selectedId={selectedTabId} onSelect={this.handleTabSelect} />
      </Block>
    );
  }

  renderControls = () => (
    <Block direction="column" paddingVertical="6" paddingHorizontal={H_PADDING}>
      <ButtonGroup fullWidth toolbar className="shadow-1" size="large">
        <Button className="pv-4 ph-5" icon="arrow-small-down" iconAfterText>
          <div className="mb-1">
            <Text size="7" className="neutral-500">STATUS</Text>
          </div>
          <Badge size="large" type="danger" icon="circle">LIVE</Badge>
        </Button>
        <Button className="pv-4 ph-5" icon="arrow-small-down" iconAfterText>
          <div className="mb-1">
            <Text size="7" className="neutral-500">CHANNEL</Text>
          </div>
          <Badge size="large" type="success" icon="circle">On</Badge>
        </Button>
        <Button className="pv-4 ph-5">
          <div className="mb-1">
            <Text size="7" className="neutral-500">PROGRAM MARKER</Text>
          </div>
          <div>Slate Off</div>
        </Button>
      </ButtonGroup>
    </Block>
  );

  renderOverview = () => (
    <Block itemSpacing="6" paddingHorizontal={H_PADDING} styles={{ overflow: 'auto' }}>
      <Block basis="3/4">
        <Card>
          <Block width="100%" className="video-responsive">
            <iframe title="test video" width="100%" height="auto" src="https://www.youtube.com/embed/F0GOy4xAF2A" frameBorder="0" allowFullScreen />
          </Block>
          <Block direction="column" padding="6">
            <Heading element="6" className="neutral-500">Playback Assets</Heading>
            <Block itemSpacing="4" marginTop="4">
              <Block width="150px">HLS Primary</Block>
              <Block flex>
                <Text size="6">https://dtvlatam-vod.akamaized.net/directv/003/0fd0054e-30d1-4b78-9ba8-cc99964fafb4/hls/001/0fd0054e-30d1-4b78-9ba8-cc99964fafb4.m3u8</Text>
              </Block>
            </Block>
            <Block itemSpacing="4" marginTop="5">
              <Block width="150px">HLS Primary</Block>
              <Block flex>
                <Text size="6">https://dtvlatam-vod.akamaized.net/directv/003/0fd0054e-30d1-4b78-9ba8-cc99964fafb4/hls/001/0fd0054e-30d1-4b78-9ba8-cc99964fafb4.m3u8</Text>
              </Block>
            </Block>
            <Block itemSpacing="4" marginTop="5">
              <Block width="150px">DASH Primary</Block>
              <Block flex>
                <Text size="6">https://dtvlatam-vod.akamaized.net/directv/003/0fd0054e-30d1-4b78-9ba8-cc99964fafb4/dash/001/0fd0054e-30d1-4b78-9ba8-cc99964fafb4.mpd</Text>
              </Block>
            </Block>
            <Block itemSpacing="4" marginTop="5">
              <Block width="150px">DASH Primary</Block>
              <Block flex>
                <Text size="6">https://dtvlatam-vod.akamaized.net/directv/003/0fd0054e-30d1-4b78-9ba8-cc99964fafb4/dash/001/0fd0054e-30d1-4b78-9ba8-cc99964fafb4.mpd</Text>
              </Block>
            </Block>
          </Block>
        </Card>
      </Block>
      <Block direction="column" basis="1/4" itemSpacing="5">
        <div>
          <Heading element="6" className="neutral-600 mb-1">BLUEPRINT</Heading>
          <div className="mb-1">turner_nba_blueprint</div>
          <Text size="7" appearance="muted">version 3</Text>
        </div>
        <div>
          <Heading element="6" className="neutral-600 mb-1">SOURCE</Heading>
          <div>turner.nbalp</div>
        </div>
        <div>
          <Heading element="6" className="neutral-600 mb-1">VIDEO ENCODING PROFILE</Heading>
          <div>1920x1080 @ 60fps (7 layers)</div>
        </div>
        <div>
          <Heading element="6" className="neutral-600 mb-1">AUDIO ENCODING PROFILE</Heading>
          <div>
            64 kbps 44.1 kHz 2 channels
            <br />
            2 languages, 1 bitrate
          </div>
        </div>
        <div>
          <Heading element="6" className="neutral-600 mb-1">SLATE ON ADS</Heading>
          <div>disabled</div>
        </div>
        <div>
          <Heading element="6" className="neutral-600 mb-1">FULL EVENT REPLAY</Heading>
          <div>
            NBA 2019 All Star Game
            {' '}
            <Badge type="default" size="small">unavailable</Badge>
          </div>
        </div>
      </Block>
    </Block>
  );

  render() {
    return (
      <div>
        {this.renderPageTitle()}
        {this.renderTabs()}
        {this.renderControls()}
        {this.renderOverview()}
      </div>
    );
  }
}

export default Event;

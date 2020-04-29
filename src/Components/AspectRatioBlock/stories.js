import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';
import Block from '../Block/Block';
import AspectRatioBlock from './AspectRatioBlock';

storiesOf('AspectRatioBlock', module)
  .addParameters({
    chromatic: { viewports: [479, 959, 1439] },
  })
  .add('common aspect ratios', () => (
    <Block className="mw7" displayBlock itemSpacing="5">
      <Block displayBlock itemSpacing="2">
        <AspectRatioBlock ratio={4 / 3} background="blue" />
        <p>4/3</p>
      </Block>
      <Block displayBlock itemSpacing="2">
        <AspectRatioBlock ratio={16 / 9} background="blue" />
        <p>16/9</p>
      </Block>
      <Block displayBlock itemSpacing="2">
        <AspectRatioBlock ratio={3 / 4} background="blue" />
        <p>3/4</p>
      </Block>
      <Block displayBlock itemSpacing="2">
        <AspectRatioBlock ratio={2 / 3} background="blue" />
        <p>2/3</p>
      </Block>
    </Block>
  ))
  .add('media', () => (
    <Block className="mw7" displayBlock itemSpacing="5">
      <Block displayBlock itemSpacing="2">
        <AspectRatioBlock background="blue">
          <img
            src="https://m.media-amazon.com/images/M/MV5BM2IxNjBiODUtNTE3MS00NzU0LTgyZTAtYmM1MzQzMTcxYjI5XkEyXkFqcGdeQXVyNTA2MDAzNjA@._V1_SY1000_CR0,0,1333,1000_AL_.jpg"
            alt="The Lego Batman Movie"
            width="100%"
            height="100%"
          />
        </AspectRatioBlock>
        <p>4/3 image</p>
      </Block>
      <Block displayBlock itemSpacing="2">
        <AspectRatioBlock ratio={16 / 9} background="blue">
          <iframe
            title="demoVideoEmbed"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/rGQUKzSDhrg"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </AspectRatioBlock>
        <p>16/9 Youtube video</p>
      </Block>
      <Block displayBlock itemSpacing="2">
        <AspectRatioBlock ratio={3 / 4} background="blue">
          <iframe
            title="demoMap"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.4951260930097!2d-122.3347066476433!3d47.616505979083016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54900d53afa0675f%3A0x6c9f8e26f08a6438!2siStreamPlanet!5e0!3m2!1sen!2sus!4v1587487328910!5m2!1sen!2sus"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
          />
        </AspectRatioBlock>
        <p>3/4 map</p>
      </Block>
      <Block displayBlock itemSpacing="2">
        <AspectRatioBlock ratio={2 / 3} background="blue">
          <img
            src="https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
            alt="The Lego Movie"
            width="100%"
            height="100%"
          />
        </AspectRatioBlock>
        <p>2/3 image</p>
      </Block>
    </Block>
  ));

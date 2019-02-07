```js
const menu = [
  {
    id: '93b7f09e-264d-4728-a4be-12c4307d3f37',
    label: 'Dashboard',
    description: 'The main page of the site',
    href: '/',
    icon: ''
  },
  {
    id: '83b7f09e-264d-4728-a4be-12c4307d3f37',
    label: 'Content',
    description: '',
    icon: '',
    items: [
      {
        id: '73b7f09e-264d-4728-a4be-12c4307d3f37',
        label: 'Channels',
        description: '',
        href: '/content/channels',
        icon: '',
      },
      {
        id: '63b7f09e-264d-4728-a4be-12c4307d3f37',
        label: 'Live',
        description: '',
        href: '/content/live',
        icon: '',
      },
      {
        id: '53b7f09e-264d-4728-a4be-12c4307d3f37',
        label: 'Schedule',
        description: '',
        href: '/content/schedule',
        icon: '',
      },
      {
        id: '43b7f09e-264d-4728-a4be-12c4307d3f37',
        label: 'VOD',
        description: '',
        href: '/content/vod',
        icon: '',
      },
    ]
  },
  {
    id: '13b7f09e-264d-4728-a4be-12c4307d3f37',
    label: 'Promotions',
    description: '',
    icon: '',
    items: [
      {
        id: '72b7f09e-264d-4728-a4be-12c4307d3f37',
        label: 'Collections',
        description: '',
        href: '/content/collections/',
        icon: '',
      }
    ]
  }
];
const auxMenu = [
  {
    id: '33b7f09e-264d-4728-a4be-12c4307d3f37',
    label: 'Support',
    description: 'Get support for our products',
    href: '#support',
    icon: ''
  },
  {
    id: '23b7f09e-264d-4728-a4be-12c4307d3f37',
    label: 'Trent Anderson',
    description: 'View your profile stuffs',
    href: '#support',
    icon: ''
  }
];
initialState = { activeItem: "63b7f09e-264d-4728-a4be-12c4307d3f37" };

<div className="styleguide__mainmenu">
  <button className="btn" onClick={() => { setState({ activeItem: "43b7f09e-264d-4728-a4be-12c4307d3f37" }); }}>VOD</button>
  <button className="btn" onClick={() => { setState({ activeItem: "63b7f09e-264d-4728-a4be-12c4307d3f37" }); }}>LIVE</button>
  <MainMenu menu={menu} auxMenu={auxMenu} activeItem={state.activeItem}/>
</div>
```

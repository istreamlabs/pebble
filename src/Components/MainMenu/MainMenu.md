```js
const menu = [
  {
    id: '1',
    label: 'Item link',
    description: 'Item that links to a page',
    href: '/#/Components/MainMenu',
    icon: 'dashboard'
  },
  {
    id: '2',
    label: 'Item with sub-items',
    description: '',
    icon: 'player',
    items: [
      {
        id: '2a',
        label: 'Sub-item 1',
        description: '',
        href: '/#/Components/MainMenu',
        icon: '',
      },
      {
        id: '2b',
        label: 'Sub-item 2',
        description: '',
        href: '/#/Components/MainMenu',
        icon: '',
      },
      {
        id: '2c',
        label: 'Sub-item 3',
        description: '',
        href: '/#/Components/MainMenu',
        icon: '',
      }
    ]
  },
];
const auxMenu = [
  {
    id: '7',
    label: 'Support',
    description: 'Get support for our products',
    href: '/#/Components/MainMenu',
    icon: 'ticket'
  },
  {
    id: '8',
    label: 'Trent Anderson',
    description: 'View your profile stuffs',
    icon: 'profile-circle',
    items: [
      {
        id: '8a',
        label: 'Profile',
        description: '',
        href: '/#/Components/MainMenu',
        icon: '',
      },
      {
        id: '8b',
        label: 'Sign Out',
        description: '',
        href: '/#/Components/MainMenu',
        icon: '',
      },
    ]
  }
];

initialState = { activeItem: "1", showMenu: false };

<div class="styleguide__frame">
  <div className="styleguide__mainmenu">
    <MainMenu menu={menu} auxMenu={auxMenu} activeItem={state.activeItem} showOnSmallScreen={state.showMenu} />
  </div>
  <div>
    <ButtonGroup className="styleguide__menubutton">
      <Button className="styleguide__menubutton" onClick={() => { setState({ activeItem: "1" }); }}>Select Item Link</Button>
      <Button className="styleguide__menubutton" onClick={() => { setState({ activeItem: "2b" }); }}>Select Sub-Item 2</Button>
    </ButtonGroup>
    <ButtonGroup className="styleguide__menubutton">
      <Button onClick={() => { setState(prevState => ({ showMenu: !prevState.showMenu })); }}>Open Menu on Mobile</Button> (when viewport is less than 480px)
    </ButtonGroup>
  </div>
</div>
```

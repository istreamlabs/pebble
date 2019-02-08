```js
const menu = [
  {
    id: '1',
    label: 'Dashboard',
    description: 'The main page of the site',
    href: '/',
    icon: 'dashboard'
  },
  {
    id: '2',
    label: 'Content',
    description: '',
    icon: 'player',
    items: [
      {
        id: '2a',
        label: 'Channels',
        description: '',
        href: '/content/channels',
        icon: '',
      },
      {
        id: '2b',
        label: 'Live',
        description: '',
        href: '/content/live',
        icon: '',
      },
      {
        id: '2c',
        label: 'Schedule',
        description: '',
        href: '/content/schedule',
        icon: '',
      },
      {
        id: '2d',
        label: 'VOD',
        description: '',
        href: '/content/vod',
        icon: '',
      },
    ]
  },
  {
    id: '3',
    label: 'Store',
    description: '',
    icon: 'shop',
    items: [
      {
        id: '3a',
        label: 'Products',
        description: '',
        href: '/billing/products/',
        icon: '',
      },
      {
        id: '3b',
        label: 'Billing Plans',
        description: '',
        href: '/billing/plans/',
        icon: '',
      },
      {
        id: '3c',
        label: 'Packages',
        description: '',
        href: '/content/packages/',
        icon: '',
      },
    ]
  },
  {
    id: '4',
    label: 'Promotions',
    description: '',
    icon: 'carousel',
    items: [
      {
        id: '4a',
        label: 'Collections',
        description: '',
        href: '/promotion/collections/',
        icon: '',
      },
      {
        id: '4b',
        label: 'Banners',
        description: '',
        href: '/promotion/banners/',
        icon: '',
      },
    ]
  },
  {
    id: '5',
    label: 'Subscribers',
    description: 'Manage subscriber accounts',
    href: '/users',
    icon: 'users'
  },

  {
    id: '7',
    label: 'Sports',
    description: '',
    icon: 'sports',
    items: [
      {
        id: '7a',
        label: 'Sports Schedule',
        description: '',
        href: '/sports/schedule/',
        icon: '',
      },
      {
        id: '7a',
        label: 'Sports',
        description: '',
        href: '/sports/',
        icon: '',
      },
    ]
  },
  {
    id: '6',
    label: 'Settings',
    description: '',
    icon: 'settings-gear',
    items: [
      {
        id: '6a',
        label: 'General',
        description: '',
        href: '/settings/custom/',
        icon: '',
      },
      {
        id: '6b',
        label: 'Accounts',
        description: '',
        href: '/accounts/',
        icon: '',
      },

      {
        id: '6c',
        label: 'Roles',
        description: '',
        href: '/roles/',
        icon: '',
      },
      {
        id: '6d',
        label: 'Regions',
        description: '',
        href: '/cofiguration/regions/',
        icon: '',
      },
      {
        id: '6e',
        label: 'Providers',
        description: '',
        href: '/configuration/providers/',
        icon: '',
      },
      {
        id: '6f',
        label: 'Custom Attributes',
        description: '',
        href: '/settings/custom/',
        icon: '',
      },

    ]
  },
];
const auxMenu = [
  {
    id: '7',
    label: 'Support',
    description: 'Get support for our products',
    href: '/support',
    icon: 'ticket'
  },
  {
    id: '8',
    label: 'Trent Anderson',
    description: 'View your profile stuffs',
    href: '/profile',
    icon: 'profile-circle'
  }
];
initialState = { activeItem: "1" };

<div style={{display:'flex', flexDirection: 'row'}}>
  <div className="styleguide__mainmenu">
    <MainMenu menu={menu} auxMenu={auxMenu} activeItem={state.activeItem}/>
  </div>
  <ButtonGroup>
    <Button onClick={() => { setState({ activeItem: "1" }); }}>select Dashboard</Button>
    <Button onClick={() => { setState({ activeItem: "2b" }); }}>select Content/Live</Button>
  </ButtonGroup>
</div>
```

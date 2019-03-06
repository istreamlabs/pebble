export const menu = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    description: 'Links to a page',
    href: '/dashboard',
    icon: 'dashboard'
  },
  {
    id: 'content',
    label: 'Content',
    description: 'Does not link to a page but has sub-items',
    icon: 'player',
    items: [
      {
        id: 'channels',
        label: 'Channels',
        description: '',
        href: '/channels',
        icon: '',
      },
      {
        id: 'live',
        label: 'Live',
        description: '',
        href: '/live',
        icon: '',
      },
      {
        id: 'schedule',
        label: 'Schedule',
        description: '',
        href: '/schedule',
        icon: '',
      },
      {
        id: 'vod-catalog',
        label: 'VOD Catalog',
        description: '',
        href: '/vod',
        icon: '',
      }
    ]
  },
  {
    id: '3',
    label: 'Store',
    description: 'Links to a page and has sub-items',
    icon: 'shop',
    items: [
      {
        id: 'products',
        label: 'Products',
        description: '',
        href: '/products',
        icon: '',
      },
      {
        id: 'billing-plans',
        label: 'Billing Plans',
        description: '',
        href: '/billing-plans',
        icon: '',
      },
      {
        id: 'asset-packages',
        label: 'Asset Packages',
        description: '',
        href: '/asset-packages',
        icon: '',
      },
    ]
  },
  {
    id: 'promotion',
    label: 'Promotion',
    description: '',
    icon: 'carousel',
    items: [
      {
        id: 'pages',
        label: 'Pages',
        description: '',
        href: '/promotion/pages',
        icon: '',
      },
      {
        id: 'collections',
        label: 'Collections',
        description: '',
        href: '/promotion/collections',
        icon: '',
      },
      {
        id: 'banners',
        label: 'Banners',
        description: '',
        href: '/promotion/banners',
        icon: '',
      },
    ]
  },

  {
    id: 'sports',
    label: 'Sports',
    description: 'Schedules and sports',
    icon: 'sports',
    items: [
      {
        id: 'sports-schedule',
        label: 'Schedule',
        description: '',
        href: '/sports/schedule',
        icon: '',
      },
      {
        id: 'leagues',
        label: 'Leagues',
        description: '',
        href: '/sports/leagues',
        icon: '',
      },
    ]
  },
  {
    id: 'subscribers',
    label: 'Subscribers',
    description: '',
    icon: 'users',
    href: '/subscribers/',
  },
  {
    id: '6',
    label: 'Settings',
    description: '',
    icon: 'settings',
    items: [
      {
        id: 'general-settings',
        label: 'General',
        description: '',
        href: '/settings/general',
        icon: '',
      },
      {
        id: 'administrators',
        label: 'Administrators',
        description: '',
        href: '/settings/admins',
        icon: '',
      },
      {
        id: 'roles',
        label: 'Roles',
        description: '',
        href: '/settings/roles',
        icon: '',
      },
      {
        id: 'regions',
        label: 'Regions',
        description: '',
        href: '/settings/regions',
        icon: '',
      },
      {
        id: 'providers',
        label: 'Providers',
        description: '',
        href: '/settings/providers',
        icon: '',
      },
      {
        id: 'custom-attributes',
        label: 'Custom Attributes',
        description: '',
        href: '/settings/custom-attributes',
        icon: '',
      },
    ]
  },
];
export const auxMenu = [
  {
    id: 'support',
    label: 'Support',
    description: 'Get support for our products',
    href: '/support',
    icon: 'ticket'
  },
  {
    id: 'trent-anderson',
    label: 'Trent Anderson',
    description: 'View your profile stuffs',
    icon: 'profile-circle',
    items: [
      {
        id: 'trent-anderson-profile',
        label: 'Profile',
        description: '',
        href: '/profile',
        icon: '',
      },
      {
        id: 'sign-out',
        label: 'Sign Out',
        description: '',
        href: '/sign-out',
        icon: '',
      },
    ]
  }
];

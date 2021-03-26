export const MAIN_MENU = [
  {
    label: 'Link',
    href: '/#/Components/MainMenu',
    aliases: [
      '/iframe.html',
      '/?path=/story/mainmenu--with-multiple-tenants',
      '/?path=/story/mainmenu--start-expanded',
    ],
    icon: 'dashboard',
  },
  {
    label: 'Subs Only',
    icon: 'player',
    items: [
      {
        label: 'Sub-item 1',
        href: '/#',
        exact: true,
      },
      {
        label: 'Sub-item 2',
        href: '/#',
        exact: true,
      },
      {
        label: 'Sub-item 3',
        href: '/#',
        exact: true,
      },
    ],
  },
  {
    label: 'Link & Sub',
    icon: 'settings',
    href: '/#/Components/MainMenu',
    exact: true,
    items: [
      {
        label: 'Sub-item 1',
        href: '/#/Components/MainMenu',
        exact: true,
      },
      {
        label: 'Sub-item 2',
        href: '/#/Components/MainMenu',
        exact: true,
      },
    ],
  },
];

export const TENANTS = [
  {
    name: 'Acme Corporation',
    id: 'acme-prod',
    realm: 'production',
    url: 'https://www.istreamplanet.com',
  },
  {
    name: 'Cyberdyne Systems',
    id: 'cyberdyne-dev',
    realm: 'dev',
    url: 'https://www.istreamplanet.com',
  },
  {
    name: 'Cyberdyne Systems',
    id: 'cyberdyne-stage',
    realm: 'stage',
    url: 'https://www.istreamplanet.com',
  },
  {
    name: 'Cyberdyne Systems',
    id: 'cyberdyne-prod',
    realm: 'production',
    url: 'https://www.istreamplanet.com',
  },
  {
    name: 'Gekko & Co.',
    id: 'gekko-stage',
    realm: 'stage',
    url: 'https://www.istreamplanet.com',
  },
  {
    name: 'Gekko & Co.',
    id: 'gekko-prod',
    realm: 'production',
    url: 'https://www.istreamplanet.com',
  },
  {
    name: 'Genco Pura Olive Oil Company',
    id: 'genco-prod',
    realm: 'production',
    url: 'https://www.istreamplanet.com',
  },
  {
    name: 'Stark Industries',
    id: 'stark-dev',
    realm: 'dev',
    url: 'https://www.istreamplanet.com',
  },
  {
    name: 'Stark Industries',
    id: 'stark-stage',
    realm: 'stage',
    url: 'https://www.istreamplanet.com',
  },
  {
    name: 'Stark Industries',
    id: 'stark-prod',
    realm: 'production',
    url: 'https://www.istreamplanet.com',
  },
  {
    name: 'Wayne Enterprises',
    id: 'wayne-stage',
    realm: 'stage',
    url: 'https://www.istreamplanet.com',
  },
  {
    name: 'Wayne Enterprises',
    id: 'wayne-prod',
    realm: 'production',
    url: 'https://www.istreamplanet.com',
  },
  {
    name: 'Wonka Industries',
    id: 'wonka-prod',
    realm: 'production',
    url: 'https://www.istreamplanet.com',
  },
];

export const PEOPLE_DATA_2 = [
  {
    name: 'Kelley Roxbee',
    email: 'kroxbee0@example.com',
    phone: '555-555-5555',
    age: 26,
  },
  {
    name: 'Loralie Archibould',
    email: 'larchibould1@example.com',
    age: 54,
  },
  {
    name: 'Gene Regorz',
    email: 'gregorz2@example.com',
    phone: '555-555-5555',
    age: 72,
  },
  {
    name: 'Stan Clarkin',
    email: 'sclarkin3@example.com',
    phone: '555-555-5555',
    age: 19,
  },
  {
    name: 'Carolyne Juden',
    email: 'cjuden4@example.com',
    phone: '555-555-5555',
    age: 33,
  },
];

export const PEOPLE_DATA = [
  {
    name: 'Vicki Rohlfs',
    job_title: 'VP Marketing',
    email: 'vrohlfs0@example.com',
    company: 'Weimann Group',
  },
  {
    name: 'Nicol Tanslie',
    job_title: 'Systems Administrator III',
    email: 'ntanslie1@example.com',
    company: 'Jakubowski Inc',
  },
  {
    name: 'Stacia Mardlin',
    job_title: 'Senior Cost Accountant',
    email: 'smardlin2@example.com',
    company: 'Jacobs, Kirlin and Runte',
  },
  {
    name: 'Carlos St Leger',
    job_title: 'Assistant Manager',
    email: 'cst3@example.com',
    company: 'Torp Inc',
  },
  {
    name: 'Kaye Swabey',
    job_title: 'Data Coordiator',
    email: 'kswabey4@example.com',
    company: 'Lesch Group',
  },
  {
    name: 'Jose McGahy',
    job_title: 'Systems Administrator I',
    email: 'jmcgahy5@example.com',
    company: 'Runolfsdottir, Simonis and Bednar',
  },
  {
    name: 'Emalia Warnes',
    job_title: 'Quality Engineer',
    email: 'ewarnes6@example.com',
    company: 'Gusikowski-Glover',
  },
  {
    name: 'Tera Huffa',
    job_title: 'Project Manager',
    email: 'thuffa7@example.com',
    company: 'Stiedemann Inc',
  },
  {
    name: 'Maudie Paireman',
    job_title: 'VP Sales',
    email: 'mpaireman8@example.com',
    company: 'Runolfsdottir-Mraz',
  },
  {
    name: 'Blake Cossans',
    job_title: 'Account Coordinator',
    email: 'bcossans9@example.com',
    company: 'Frami LLC',
  },
];

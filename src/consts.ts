// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Friedrich Nietzsche';
export const SITE_DESCRIPTION = 'The academic portfolio of Friedrich Nietzsche.';

export const CV_URL = 'https://shravangoswami.com/resume.pdf';

export const CONTACT = {
  organization: 'Shravan Goswami',
  addressLines: [
    'Creator of Academic Portfolio',
  ],
  emails: [
    'contact@shravangoswami.com',
  ],
};

export type SocialIcon = 'website' | 'scholar' | 'email' | 'github' | 'linkedin' | 'twitter';

export const SOCIAL_LINKS: ReadonlyArray<{
  label: string;
  href: string;
  icon: SocialIcon;
}> = [
  {
    label: 'GitHub',
    href: 'https://github.com/shravanngoswamii',
    icon: 'github',
  },
  {
    label: 'Email',
    href: 'mailto:contact@shravangoswami.com',
    icon: 'email',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shravangoswami/',
    icon: 'linkedin',
  },
  {
    label: 'X',
    href: 'https://x.com/shravangoswamii',
    icon: 'twitter',
  },
];

export const FOOTER_CREDIT = {
  designerName: 'Shravan Goswami',
  designerUrl: 'https://shravangoswami.com',
  sourceLabel: 'Open Source',
  sourceUrl: 'https://github.com/shravanngoswamii/Academic-Portfolio',
};

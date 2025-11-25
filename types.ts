
export type Page = 'Home' | 'The Why' | 'The DNA' | 'NEKO 19' | 'Investors' | 'Enquire' | 'Privacy Policy' | 'Cookie Policy' | 'Terms and Conditions' | 'Disclaimer' | 'Supplier Partnerships';

export type Language = 'en' | 'fr';

export interface NavLink {
  name: Page;
  href: string;
}

export type Page = 'Home' | 'The Why' | 'The DNA' | 'NEKO 62' | 'Investors' | 'Contact';

export interface NavLink {
  name: Page;
  href: string;
}
interface NavigationItem {
  path: string;
  label: string;
  description: string;
}

export const navigationItems: NavigationItem[] = [
  {
    path: '/',
    label: 'Home',
    description: 'Startseite der Kinderarztpraxis Dr. Menz-von Studnitz in Witten'
  },
  {
    path: '/team',
    label: 'Unser Team',
    description: 'Lernen Sie unser erfahrenes Team der Kinderarztpraxis kennen'
  },
  {
    path: '/services',
    label: 'Leistungen',
    description: 'Unsere umfassenden kinderärztlichen Leistungen'
  },
  {
    path: '/contact',
    label: 'Kontakt',
    description: 'Kontaktieren Sie die Kinderarztpraxis in Witten'
  }
];
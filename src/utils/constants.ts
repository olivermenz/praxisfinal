export const PRACTICE_INFO = {
  name: 'Dr. med. Kyra Menz-von Studnitz',
  title: 'Fachärztin für Kinder- und Jugendmedizin',
  phone: '02302 59234',
  fax: '02302 2790073',
  email: 'info@kinderarztpraxis-menz.de',
  address: {
    street: 'Bahnhofstr. 35',
    city: 'Witten',
    zip: '58452',
    country: 'Deutschland'
  },
  openingHours: {
    fullDays: 'Mo. Di. Do.: 08:00 - 11:00 & 15:00 - 17:00',
    halfDays: 'Mi. & Fr.: 08:00 - 11:00'
  },
  socialLinks: {
    google: 'https://g.co/kgs/tvwmqYm',
    jameda: 'https://www.jameda.de/kyra-menz-von-studnitz/kinder-und-jugendarzt/witten'
  }
} as const;

export const EMERGENCY_NUMBERS = {
  practice: '02302 59234',
  emergency: '116117',
  urgent: '112',
  hospitals: {
    witten: {
      name: 'Kinderklinik Witten',
      address: 'Marienplatz 2, 58452 Witten',
      phone: '02302-17 30'
    },
    herdecke: {
      name: 'Gemeinschaftskrankenhaus Herdecke',
      address: 'Gerhard-Kienle-Weg 4, 58313 Herdecke',
      phone: '02330 62-0'
    }
  }
} as const;
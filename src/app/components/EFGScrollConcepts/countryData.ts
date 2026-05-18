export interface CountryCompany {
  name: string;
  sector: string;
}

export interface CoveredCountry {
  code: string;
  name: string;
  companies: number;
  stocks: number;
  mcap: string;
  mcapShare: string;
  sectors: CountryCompany[];
}

export function slugifyCountryName(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export const COVERED: Record<number, CoveredCountry> = {
  818: {
    code: 'EGY',
    name: 'Egypt',
    companies: 18,
    stocks: 109,
    mcap: '$42B',
    mcapShare: '68%',
    sectors: [
      { name: 'Commercial International Bank', sector: 'Financial Services' },
      { name: 'Eastern Company', sector: 'Consumer Staples' },
      { name: 'Telecom Egypt', sector: 'Telecommunications' },
      { name: 'Fawry for Banking', sector: 'Fintech' },
    ],
  },
  682: {
    code: 'KSA',
    name: 'Saudi Arabia',
    companies: 42,
    stocks: 249,
    mcap: '$680B',
    mcapShare: '92%',
    sectors: [
      { name: 'Saudi Aramco', sector: 'Energy' },
      { name: 'Al Rajhi Bank', sector: 'Banking' },
      { name: 'SABIC', sector: 'Materials' },
      { name: 'STC', sector: 'Telecommunications' },
      { name: 'ACWA Power', sector: 'Mining / Utility' },
    ],
  },
  414: {
    code: 'KWT',
    name: 'Kuwait',
    companies: 14,
    stocks: 68,
    mcap: '$118B',
    mcapShare: '74%',
    sectors: [
      { name: 'Kuwait Finance House', sector: 'Financial Services' },
      { name: 'National Bank of Kuwait', sector: 'Financial Services' },
    ],
  },
  634: {
    code: 'QAT',
    name: 'Qatar',
    companies: 12,
    stocks: 51,
    mcap: '$165B',
    mcapShare: '71%',
    sectors: [
      { name: 'Qatar National Bank', sector: 'Financial Services' },
      { name: 'Industries Qatar', sector: 'Industrials' },
    ],
  },
  784: {
    code: 'UAE',
    name: 'UAE',
    companies: 24,
    stocks: 124,
    mcap: '$340B',
    mcapShare: '88%',
    sectors: [
      { name: 'Emirates NBD', sector: 'Financial Services' },
      { name: 'Emaar Properties', sector: 'Real Estate' },
      { name: 'DP World', sector: 'Industrials' },
    ],
  },
  512: {
    code: 'OMN',
    name: 'Oman',
    companies: 9,
    stocks: 36,
    mcap: '$28B',
    mcapShare: '53%',
    sectors: [
      { name: 'Bank Muscat', sector: 'Financial Services' },
      { name: 'Oman Telecom', sector: 'Telecommunications' },
    ],
  },
};

export const COUNTRIES_BY_SLUG = Object.values(COVERED).reduce<Record<string, CoveredCountry>>(
  (acc, country) => {
    acc[slugifyCountryName(country.name)] = country;
    return acc;
  },
  {}
);

export function getCountryBySlug(slug = '') {
  return COUNTRIES_BY_SLUG[slug];
}

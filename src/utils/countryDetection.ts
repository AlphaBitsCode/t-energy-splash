
export const detectCountryFromIP = async (): Promise<string> => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    return data.country_name || 'Unknown';
  } catch (error) {
    console.log('Failed to detect country:', error);
    return 'Unknown';
  }
};

export const getCountryList = () => [
  'Afghanistan', 'Albania', 'Algeria', 'Argentina', 'Armenia', 'Australia',
  'Austria', 'Azerbaijan', 'Bahrain', 'Bangladesh', 'Belarus', 'Belgium',
  'Bolivia', 'Bosnia and Herzegovina', 'Brazil', 'Bulgaria', 'Cambodia',
  'Canada', 'Chile', 'China', 'Colombia', 'Croatia', 'Czech Republic',
  'Denmark', 'Egypt', 'Estonia', 'Finland', 'France', 'Georgia', 'Germany',
  'Ghana', 'Greece', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran',
  'Iraq', 'Ireland', 'Israel', 'Italy', 'Japan', 'Jordan', 'Kazakhstan',
  'Kenya', 'Kuwait', 'Latvia', 'Lebanon', 'Lithuania', 'Luxembourg',
  'Malaysia', 'Mexico', 'Morocco', 'Netherlands', 'New Zealand', 'Nigeria',
  'Norway', 'Pakistan', 'Philippines', 'Poland', 'Portugal', 'Qatar',
  'Romania', 'Russia', 'Saudi Arabia', 'Singapore', 'Slovakia', 'Slovenia',
  'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'Sweden', 'Switzerland',
  'Thailand', 'Turkey', 'Ukraine', 'United Arab Emirates', 'United Kingdom',
  'United States', 'Vietnam', 'Other'
];

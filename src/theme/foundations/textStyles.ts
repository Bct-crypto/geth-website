export const textStyles = {
  h1: {
    fontFamily: 'heading',
    fontWeight: 700,
    fontSize: '2.75rem',
    lineHeight: '3.375rem',
    letterSpacing: '5%',
    color: 'body'
  },
  h2: {
    fontFamily: 'heading',
    fontWeight: 400,
    fontSize: '1.5rem',
    lineHeight: 'auto',
    letterSpacing: '4%',
    color: 'body'
  },
  'header-font': {
    fontFamily: 'heading',
    fontWeight: 700,
    fontSize: { base: '0.86rem', sm: '1rem' }
  },
  'homepage-description': {
    fontFamily: 'heading',
    fontWeight: 700,
    lineHeight: '21px',
    letterSpacing: '0.05em',
    textAlign: { base: 'center', md: 'left' }
  },
  'homepage-primary-label': {
    fontFamily: 'heading',
    color: 'bg',
    fontWeight: 700,
    textTransform: 'uppercase'
  },
  'home-section-link-label': {
    fontFamily: 'heading',
    fontWeight: 700,
    textTransform: 'uppercase',
    textAlign: 'center',
    p: 4
  },
  'quick-link-text': {
    fontFamily: 'body',
    lineHeight: '26px'
  },
  'quick-link-label': {
    fontFamily: 'heading',
    fontWeight: 700,
    textTransform: 'uppercase',
    textAlign: 'center',
    color: 'primary',
    _groupHover: { color: 'bg' },
    _groupActive: { color: 'bg' },
    _groupFocus: { color: 'bg' }
  },
  'hero-text-small': {
    fontSize: '13px',
    fontFamily: 'body'
  },
  'footer-text': {
    fontFamily: 'body',
    lineHeight: '22px',
    fontWeight: 400,
    fontSize: '12px'
  },
  'downloads-button-label': {
    fontFamily: 'heading',
    color: 'bg',
    fontSize: { base: 'md', lg: 'xl' },
    textTransform: 'uppercase'
  },
  'downloads-button-sublabel': {
    fontFamily: 'heading',
    color: 'bg',
    fontSize: { base: 'xs', lg: 'sm' },
    textTransform: 'uppercase'
  },
  'download-tab-label': {
    fontFamily: 'heading',
    fontWeight: 700,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 'sm'
  },
  // TODO: refactor w/ semantic tokens for light/dark mode
  'link-light': {},
  // TODO: refactor w/ semantic tokens for light/dark mode
  'text-light': {}
};

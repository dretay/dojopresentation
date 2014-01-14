window.slidesConfig = window.slidesConfig || {
  // Slide settings
  settings: {
    useBuilds: true,
    useGDDBranding: true,
    showCWS: true,
    showIAP: true,
    showDart: false
  },
  info: {
    // Personal info
    name: 'Drew Tayman',
    pic: 'images/author-image.jpeg',
    gplus: 'http://www.facebook.com/people/Drew-Tayman/5718725',
    yahooId: 'drew.tayman',
    email: 'atayman@potomacfusion.com',

    slides: 'http://bit.ly/nrjLs7',
    feedback: '',
    djbpDemo: 'http://localhost:5103/',
    djbpSrc: 'http://bit.ly/quyPMZ',
    ioreaderDemo: 'http://www.io-reader.com/',
    ioreaderSrc: 'http://bit.ly/nlWNrZ',

    // GDD info
    location: 'Potomac Fusion',
    country: '',
    date: new Date('Mar 8 2012 14:00'),
    logo: '/static/gdd11-modern-web-apps/images/chrome-logo.png'
  }
};


window.timerConfig = window.timerConfig || {
  settings : {
    date: window.slidesConfig.info.date,
    minutes: 45,
    warnAt: 10
  }
};
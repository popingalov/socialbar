export const theme = {
  colors: {
    lightText: '#ebebeb', // white text color on blue bg
    mainText: '#0f0f0f', // main dark black color // 333333
    secondaryText: '#303030', // lighter grey text color

    accent: 'rgba(43, 122, 120, 0.5)', // dark green-blue color -- for hover // #2B7A78
    secondaryAccent: '#074342', // the most dark -- additional color / just in case
    accentBackgroundColor: 'rgba(58, 175, 169, 0.5)', // header-navigation color // #3AAFA9
    mainBackgroundColor: 'rgba(245, 244, 250, 0.5)', // very light white color // #f5f4fa
    modal: '#f5f4fa',
    secondaryBackgroundColor: 'rgba(205,247,245,0.5)', // very light blue color // rgba(205,247,245,0.5)

    backdropColor: ' rgba(0, 0, 0, 0.2)', // backdrop grey shadow color
    inputError: ' rgba(142, 22, 0, 0.08)', // red input error color
    borderBottom: 'rgba(0, 0, 0, 0.13)',
    link: '#1155bb',
    hoverLinkBackgroundColor: 'rgba(43,122,120,0.5)',
    activeLinkBackgroundColor: 'rgba(58,175,169,0.2)',
    white: '#ffffff',
    extraMessageBgColor: 'rgba(0, 0, 0, 0.04)',
    placeholder: 'rgba(235, 235, 235, 0.8)',
  },

  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  fontFamily: "'Montserrat', sans- serif",

  fontWeight: {
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  fontSizes: {
    xs: '12px',
    s: '16px',
    m: '20px',
    l: '24px',
    xl: '32px',
  },

  transitionTiming: 'cubic-bezier(0.4, 0, 0.2, 1)',
};

// accent: '#254E58',
// secondaryAccent: '#4F4A41',
// accentBackgroundColor: '#88BDBC',

const data = {
  "02-26-2012": {
    android: {
      pageViews: 100,
      uniques: 50,
    },
    web: {
      pageViews: 500,
      uniques: 200,
    },
    ios: {
      pageViews: 600,
      uniques: 300,
    },
  },
  "02-27-2012": {
    android: {
      pageViews: 900,
      uniques: 500,
    },
    web: {
      pageViews: 400,
      uniques: 200,
    },
    ios: {
      pageViews: 1000,
      uniques: 500,
    },
  },
  "02-29-2012": {
    android: {
      pageViews: 1000,
      uniques: 600,
    },
    web: {
      pageViews: 200,
      uniques: 100,
    },
    ios: {
      pageViews: 600,
      uniques: 400,
    },
  },
  "02-30-2012": {
    android: {
      pageViews: 1000,
      uniques: 121,
    },
    web: {
      pageViews: 400,
      uniques: 20,
    },
    ios: {
      pageViews: 500,
      uniques: 10,
    },
  },
  "02-31-2012": {
    android: {
      pageViews: 300,
      uniques: 200,
    },
    web: {
      pageViews: 500,
      uniques: 300,
    },
    ios: {
      pageViews: 1000,
      uniques: 400,
    },
  },
  "03-01-2012": {
    android: {
      pageViews: 200,
      uniques: 100,
    },
    web: {
      pageViews: 500,
      uniques: 200,
    },
    ios: {
      pageViews: 800,
      uniques: 500,
    },
  },
  "03-02-2012": {
    android: {
      pageViews: 400,
      uniques: 200,
    },
    web: {
      pageViews: 600,
      uniques: 500,
    },
    ios: {
      pageViews: 700,
      uniques: 500,
    },
  },
  "03-04-2012": {
    android: {
      pageViews: 500,
      uniques: 300,
    },
    web: {
      pageViews: 400,
      uniques: 300,
    },
    ios: {
      pageViews: 1000,
      uniques: 600,
    },
  },
  "03-05-2012": {
    android: {
      pageViews: 600,
      uniques: 200,
    },
    web: {
      pageViews: 1000,
      uniques: 600,
    },
    ios: {
      pageViews: 400,
      uniques: 200,
    },
  },
  "03-06-2012": {
    android: {
      pageViews: 1000,
      uniques: 500,
    },
    web: {
      pageViews: 300,
      uniques: 200,
    },
    ios: {
      pageViews: 400,
      uniques: 200,
    },
  },
  "03-07-2012": {
    android: {
      pageViews: 300,
      uniques: 200,
    },
    web: {
      pageViews: 1000,
      uniques: 500,
    },
    ios: {
      pageViews: 500,
      uniques: 100,
    },
  },
  "03-08-2012": {
    android: {
      pageViews: 600,
      uniques: 500,
    },
    web: {
      pageViews: 800,
      uniques: 400,
    },
    ios: {
      pageViews: 600,
      uniques: 400,
    },
  },
  "03-09-2012": {
    android: {
      pageViews: 1000,
      uniques: 600,
    },
    web: {
      pageViews: 800,
      uniques: 600,
    },
    ios: {
      pageViews: 600,
      uniques: 400,
    },
  },
  "03-10-2012": {
    android: {
      pageViews: 400,
      uniques: 200,
    },
    web: {
      pageViews: 800,
      uniques: 600,
    },
    ios: {
      pageViews: 800,
      uniques: 400,
    },
  },
};

// calculate min and max page view
const getMinMaxPageViews = (data) => {
  let minPageViews = Number.MAX_SAFE_INTEGER;
  let maxPageViews = Number.MIN_SAFE_INTEGER;
  let minPageViewsPlatform = "";
  let maxPageViewsPlatform = "";
  let totalPageViews = 0;
  const totalPageViewsPerPlatform = {};

  for (const date of Object.values(data)) {
    for (const [platform, platformData] of Object.entries(date)) {
      const pageViews = platformData.pageViews;

      if (!totalPageViewsPerPlatform[platform]) {
        totalPageViewsPerPlatform[platform] = 0;
      }
      totalPageViewsPerPlatform[platform] += pageViews;
      totalPageViews += pageViews;

      if (pageViews < minPageViews) {
        minPageViews = pageViews;
        minPageViewsPlatform = platform;
      }
      if (pageViews > maxPageViews) {
        maxPageViews = pageViews;
        maxPageViewsPlatform = platform;
      }
    }
  }

  let minTotalPageViews = Number.MAX_SAFE_INTEGER;
  let maxTotalPageViews = Number.MIN_SAFE_INTEGER;
  let minTotalPageViewsPlatform = "";
  let maxTotalPageViewsPlatform = "";

  for (const [platform, totalViews] of Object.entries(
    totalPageViewsPerPlatform
  )) {
    if (totalViews < minTotalPageViews) {
      minTotalPageViews = totalViews;
      minTotalPageViewsPlatform = platform;
    }
    if (totalViews > maxTotalPageViews) {
      maxTotalPageViews = totalViews;
      maxTotalPageViewsPlatform = platform;
    }
  }

  return {
    minPageViews,
    maxPageViews,
    minPageViewsPlatform,
    maxPageViewsPlatform,
    minTotalPageViews,
    maxTotalPageViews,
    minTotalPageViewsPlatform,
    maxTotalPageViewsPlatform,
    totalPageViews,
  };
};

// find the smallest and biggest window
const findBiggestAndSmallestWindow = (data, windowSize) => {
  const dates = Object.keys(data);
  let biggestWindow = null;
  let smallestWindow = null;
  let biggestWindowTotal = 0;
  let smallestWindowTotal = Infinity;
  for (let i = 0; i <= dates.length - windowSize; i++) {
    const windowDates = dates.slice(i, i + windowSize);
    let windowTotal = 0;
    for (const date of windowDates) {
      const platforms = Object.values(data[date]);
      for (const platform of platforms) {
        windowTotal += platform.pageViews;
      }
    }
    if (windowTotal > biggestWindowTotal) {
      biggestWindowTotal = windowTotal;
      biggestWindow = windowDates;
    }
    if (windowTotal < smallestWindowTotal) {
      smallestWindowTotal = windowTotal;
      smallestWindow = windowDates;
    }
  }
  return {
    biggestWindow,
    smallestWindow,
    biggestWindowTotal,
    smallestWindowTotal,
  };
};

// windows size is set to 3
const windowSize = 3;

const {
  minPageViews,
  maxPageViews,
  minPageViewsPlatform,
  maxPageViewsPlatform,
  minTotalPageViews,
  maxTotalPageViews,
  minTotalPageViewsPlatform,
  maxTotalPageViewsPlatform,
  totalPageViews,
} = getMinMaxPageViews(data);

const {
  biggestWindow,
  smallestWindow,
  biggestWindowTotal,
  smallestWindowTotal,
} = findBiggestAndSmallestWindow(data, windowSize);

console.log(`Total page views: ${totalPageViews}`);
console.log(`########################`);
console.log(
  `Minimum page view: ${minPageViews} for platform: ${minPageViewsPlatform}`
);
console.log(
  `Maximum page view: ${maxPageViews} for platform: ${maxPageViewsPlatform}`
);
console.log(`########################`);
console.log(
  `Minimum total page view: ${minTotalPageViews} for platform: ${minTotalPageViewsPlatform}`
);
console.log(
  `Maximum total page view: ${maxTotalPageViews} for platform: ${maxTotalPageViewsPlatform}`
);
console.log(`########################`);
console.log(
  `Window with biggest page views: [${biggestWindow}] with biggest total: ${biggestWindowTotal}`
);
console.log(
  `Window with smallest page views: [${smallestWindow}] with smallest total: ${smallestWindowTotal}`
);

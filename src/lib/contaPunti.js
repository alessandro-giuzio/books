const points = {
  libro: 5,
  comic: 3,
  libroMalen: 5,
};

const extras = {
  extra400: 2,
  extra600: 4,
  malen: {
    extra120: 2,
    extra180: 4,
    extra240: 6,
    extra400: 8,
  }
};

export function calculatePoints(type, extrasApplied) {
  let totalPoints = points[type] || 0;

  // Apply generic extras if applicable
  if (extrasApplied.includes('extra400')) {
    totalPoints += extras.extra400;
  }
  if (extrasApplied.includes('extra600')) {
    totalPoints += extras.extra600;
  }

  // Specific checks for 'libroMalen' type
  if (type === 'libroMalen') {
    extrasApplied.forEach(extraKey => {
      if (extras.malen[extraKey]) {
        totalPoints += extras.malen[extraKey];
      }
    });
  }

  return totalPoints;
}

// Example usage
let totalPointsForComic = calculatePoints('comic', []);
let totalPointsForLibroMalen = calculatePoints('libroMalen', ['extra120', 'extra400']);


console.log("Total points for Comic:", totalPointsForComic); // Expected: 3
console.log("Total points for Libro Malen:", totalPointsForLibroMalen); // Expected: 5 (base) + 2 (extra120) + 8 (extra400) = 15

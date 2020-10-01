const compareKey = key =>
  (a, b) => {
    if (a[key] < b[key]) {
      return -1
    }
    if (a[key] > b[key]) {
      return 1
    }
    return 0
  }

export const mostPopular = (arr) =>
  arr.sort((a, b) => parseInt(b.rating) - parseInt(a.rating));
export const AZ = (arr) => arr.sort(compareKey("name"));
export const lowestFirst = (arr) =>
  arr.sort((a, b) => parseInt(a.price) - parseInt(b.price));
export const highestFirst = (arr) =>
  arr.sort((a, b) => parseInt(b.price) - parseInt(a.price));

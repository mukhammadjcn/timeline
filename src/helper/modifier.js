// importing json data
import data from "../assets/data.json";

// Custom variables for getting month in short hand
const months = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec",
};

// Filtered data by date
const filtered = data.sort(
  (a, b) => new Date(a.registered) - new Date(b.registered)
);

// Date modified function
const modified = filtered.map(
  (el) =>
    (el.registered = `${new Date(el.registered).getDate()} ${
      months[new Date(el.registered).getMonth()]
    }, ${new Date(el.registered).getFullYear()}`)
);

export default filtered;

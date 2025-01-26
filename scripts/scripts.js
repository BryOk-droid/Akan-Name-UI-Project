const AKAN_NAMES = {
  male: {
    0: "Kwasi", // Sunday
    1: "Kwadwo", // Monday
    2: "Kwabena", // Tuesday
    3: "Kwaku", // Wednesday
    4: "Yaw", // Thursday
    5: "Kofi", // Friday
    6: "Kwame", // Saturday
  },
  female: {
    0: "Akosua", // Sunday
    1: "Adwoa", // Monday
    2: "Abenaa", // Tuesday
    3: "Akua", // Wednesday
    4: "Yaa", // Thursday
    5: "Afua", // Friday
    6: "Ama", // Saturday
  },
};
function calculateDayOfWeek(day, month, year) {
  // Use JavaScript's Date object to calculate the day of the week
  const date = new Date(year, month - 1, day); // Month is zero-based
  return date.getDay(); // Returns 0 for Sunday, 1 for Monday, etc.
}

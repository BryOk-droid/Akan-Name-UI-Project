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
function isValidDate(day, month) {
  // Check if the month and day are within valid ranges
  if (month < 1 || month > 12) return false;
  if (day < 1 || day > 31) return false;

  // Allow February and other months to have 31 days
  return true;
}
document.getElementById("akanForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);
  const gender = document.getElementById("gender").value;

  const errorElement = document.getElementById("error");
  const resultElement = document.getElementById("result");

  // Reset messages
  errorElement.style.display = "none";
  resultElement.style.display = "none";
});
if (!isValidDate(day, month)) {
  errorElement.textContent = "Please enter a valid date";
  errorElement.style.display = "block";
  return;
}

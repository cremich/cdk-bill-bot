/**
 * This function calculates the date of yesterday and returns this as formatted string in the format YYYY-MM-DD.
 */
export const handler = async () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const year = yesterday.getFullYear();
  const month = ("0" + (yesterday.getMonth() + 1)).slice(-2);
  const day = ("0" + yesterday.getDate()).slice(-2);

  return `${year}-${month}-${day}`;
};

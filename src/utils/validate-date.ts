const validateDate = (month: number, year: number) => {
  const currentDate = new Date();
  const cardDate = new Date(year + 2000, month - 1);

  if (
    currentDate.getMonth() === cardDate.getMonth() &&
    currentDate.getFullYear() === currentDate.getFullYear()
  )
    return true;
  else if (currentDate.getTime() <= cardDate.getTime()) return true;

  return false;
};

export default validateDate;

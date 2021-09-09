import { useState, useEffect } from "react";

const DatePicker = () => {
  const [day, setDay] = useState("");

  useEffect(() => {
    const today = new Date();

    const day = today.getDate() <= 9 ? `0${today.getDate()}` : today.getDate();
    const month =
      today.getMonth() + 1 <= 9
        ? `0${today.getMonth() + 1}`
        : today.getMonth() + 1;

    const fullYear = today.getFullYear();

    const data = `${day}-${month}-${fullYear}`;
    setDay(data);
  }, []);

  return { day };
};

export default DatePicker;

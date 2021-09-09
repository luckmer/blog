import DatePicker from "../../hooks/DatePicker";
import styled from "styled-components";

const SmallCalendar = styled.small`
  margin: 20px;
  color: #7f82cf;
`;

const Calendar = () => {
  const { day } = DatePicker();

  return <SmallCalendar>{day}</SmallCalendar>;
};

export default Calendar;

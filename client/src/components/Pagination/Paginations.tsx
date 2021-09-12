import * as P from "../../css/PaginationContainer";
import Firmware from "./Firmware";

const Paginations = ({ pageNumbers }: { pageNumbers: number[] }) => {
  const firmware = Firmware(pageNumbers);

  return (
    <P.PaginationContainer>
      <P.NextPages>
        <P.Btn onClick={() => firmware.prev()}>&lt;</P.Btn>
      </P.NextPages>
      {pageNumbers.map((number) => {
        if (number < firmware.maxPage + 1 && number > firmware.minPage) {
          return (
            <P.Pages key={number}>
              <P.ActiveBtn
                onClick={firmware.setNumber}
                value={number}
                active={firmware.page === number ? true : false}
              >
                {number}
              </P.ActiveBtn>
            </P.Pages>
          );
        }
        return "";
      })}
      <P.NextPages>
        <P.Btn onClick={() => firmware.next()}> &gt; </P.Btn>
      </P.NextPages>
    </P.PaginationContainer>
  );
};

export default Paginations;

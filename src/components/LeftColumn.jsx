import { CardComponent } from "./CardComponent";
import { LineChart } from "./LineChart";
import { TableComponent } from "./TableComponent";

export const LeftColumn = () => {
  return (
    <div
      className=" w-full flex flex-col justify-between
     p-2"
    >
      <div
        className=" flex flex-col lg:flex-row gap-2 
      w-full"
      >
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
      <div className="flex-auto w-full">
        <LineChart />
        <TableComponent />
      </div>
    </div>
  );
};

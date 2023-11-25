import { SalesItem } from "./SalesItem";
import { WebAnalytics } from "./WebAnalytics";

export const RightColumn = () => {
  return (
    <div className=" w-full p-2">
      <SalesItem />
      <WebAnalytics />
    </div>
  );
};

import { DataProvider } from "../states/UseContext";
import { useContext } from "react";
type BorderT = {
  monthly_amount_due: string;
  _id: string;
};
const Revenue = () => {
  const { borderData } = useContext(DataProvider);
  const data: BorderT[] = borderData;
  return (
    <section className="w-full h-full">
      <div className="grid grid-cols-2">
        <div className="bg-green-700">
          {data?.map((b) => (
            <div key={b._id} className="flex flex-col">
              {b.monthly_amount_due}
            </div>
          ))}
        </div>
        <div className="bg-orange-600">grid-2</div>
      </div>
    </section>
  );
};

export { Revenue };

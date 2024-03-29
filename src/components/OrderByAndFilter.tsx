import React from "react";
export interface OrderBy {
  id: number;
  value: string;
  label: string;
}
const arrOfOrderBy: OrderBy[] = [
  { id: 1, value: "last_active", label: "Last Active" },
  { id: 2, value: "available_from", label: "Available From" },
  { id: 3, value: "publish_date", label: "Publish Date" },
];

const OrderByAndFilter = () => {
  return (
    <div>
      <div className=" px-1 mx-auto flex lg:flex-row-reverse justify-between items-center">
        <div className="flex flex-wrap items-center justify-center gap-1">
          <span className="capitalize text-blue-900 font-bold hidden sm:block">order by :</span>
          <select
            //  value={orderByValue}
            //  onChange={(e: any) => {
            //    handleOrderValue(e.target.value);
            //  }}
            className="border border-gray-300 outline-[0.1rem] outline-blue-500/50 p-1 px-3 "
          >
            {arrOfOrderBy.map((opation) => (
              <option key={opation.id} className="capitalize text-sm" value={opation.value}>
                {opation.label}
              </option>
            ))}
          </select>
        </div>
        {/* filter button show when mobile view */}
        {/* <button
           onClick={() => handleOpenFilterModal(true)}
           className="btn-style bg-blue-900 flex items-center justify-center gap-x-2 lg:hidden"
         >
           <span>
             <FaFilter />
           </span>
           Filter
         </button> */}
      </div>
    </div>
  );
};

export default OrderByAndFilter;

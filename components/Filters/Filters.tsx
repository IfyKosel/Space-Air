// import React, { useState } from "react";
// import FilterIcon from "@/components/Filters/assets/Filter.svg";
// import Image from "next/image";
// import Date from "./Date/Date";
// import Export from "./Export/Export";
// import FlightAmount from "./FlightAmount/FlightAmount";
// import Name from "./Name/Name";
// import NewUser from "./NewUser/NewUser";
// import Reset from "./Reset/Reset";

// type Props = {
//   filters: FilterObject | null;
//   setFilters: React.Dispatch<React.SetStateAction<FilterObject | null>>;
//   defaultFilters?: {
//     id: number;
//     name: string;
//     Img: any;
//   }[];
// };

// interface FilterObject {
//   [key: string]: any;
// }

// const Filter = ({ filters, setFilters, defaultFilters }: Props) => {
//   const [key, setKey] = useState<string | undefined>(
//     defaultFilters?.[0].name.toLocaleLowerCase()
//   );

//   const stepToRender = (key: string | undefined) => {
//     switch (key) {
//       case "date":
//         return <Date filters={filters} setFilters={setFilters} />;
//       case "export":
//         return <Export filters={filters} setFilters={setFilters} />;
//       case "flight amount":
//         return <FlightAmount filters={filters} setFilters={setFilters} />;
//       case "name":
//         return <Name filters={filters} setFilters={setFilters} />;
//       case "new user":
//         return <NewUser filters={filters} setFilters={setFilters} />;
//       case "reset":
//         return <Reset filters={filters} setFilters={setFilters} />;

//       default:
//         break;
//     }
//   };

//   return (
//     <div className="flex items-center justify-center rounded-[8px] bg-white border-[0.6px] border-[#D5D5D5] h-[4rem] w-fit">
//       <div className="flex items-center justify-center h-full px-3 border-r-[0.6px] border-[#D5D5D5]">
//         <Image src={FilterIcon} alt="filter" width={19} height={22} />
//         <div className="flex gap-3">
//           {defaultFilters &&
//             defaultFilters.map((filter) => {
//               const isActive = filter.name.toLocaleLowerCase() === key;

//               return (
//                 <div
//                   key={filter.id}
//                   onClick={() => setKey(filter.name.toLocaleLowerCase())}
//                   className={`w-full flex items-center justify-between px-3 py-2 rounded-md cursor-pointer ${
//                     isActive ? "bg-white" : "bg-[#DDE2FD]"
//                   }`}
//                 >
//                   {stepToRender(key)}
//                   <div className="flex gap-2">
//                     <Image src={filter.Img} alt={filter.Img} />
//                     <button className="text-lg whitespace-nowrap px-2">
//                       {filter.name}
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//         </div>
//         <div className="flex-[3]">{stepToRender(key)}</div>
//       </div>
//     </div>
//   );
// };

// export default Filter;
import React from "react";
import DatePicker from "./Date/Date";
import Name from "./Name/Name";
import FlightAmount from "./FlightAmount/FlightAmount";
import Reset from "../Reset/Reset";
import Cabin from "./Cabin/Cabin";
import Payment from "./Payment/Payment";
import Flight from "./Flight/Flight";
import FilterIcon from "@/components/Filters/assets/Filter.svg";
import Image from "next/image";

type Props = {
  defaultFilters: {
    date?: string;
    name?: string;
    flightAmount?: string;
    cabin?: string;
    flight?: string;
    payment?: string;
  }[];
};
2;

const Filters = ({ defaultFilters }: Props) => {
  const stepToRender = (key: string | undefined) => {
    switch (key) {
      case "date":
        return <DatePicker />;
      case "flightAmount":
        return <FlightAmount />;
      case "name":
        return <Name />;
      case "cabin":
        return <Cabin />;
      case "flight":
        return <Flight />;
      case "payment":
        return <Payment />;

      default:
        break;
    }
  };
  return (
    <main>
      <div className="flex rounded-[6px] border-[0.6px] border-[#D5D5D5] w-fit h-16 items-center bg-[#F9F9FB]">
        <div className="px-2">
          <Image src={FilterIcon} alt="filter" width={19} height={22} />
        </div>
        {defaultFilters &&
          defaultFilters.map((filter, index) => {
            return (
              <div
                key={index}
                className="border-l-[0.6px] border-[#D5D5D5] h-full flex items-center"
              >
                {stepToRender(filter.name)}
              </div>
            );
          })}
        <Reset />
      </div>
    </main>
  );
};

export default Filters;

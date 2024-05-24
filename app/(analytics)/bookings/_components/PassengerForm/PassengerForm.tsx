import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PassengerAmountProps } from "@/types/types";
import { generateYears, getDaysInMonth, months } from "@/Utils/monthDays";

const PassengerForm = () => {
  const currentDate = new Date();

  const monthNumber = currentDate.getMonth() + 1;

  const days = getDaysInMonth(2024, monthNumber);
  const years = generateYears();

  const passengerAmount: PassengerAmountProps[] = [
    {
      text: "Passenger 1: Adult",
    },
    {
      text: "Passenger 2: Adult",
    },
    {
      text: "Passenger 3: Adult",
    },
  ];

  return (
    <main className="max-w-screen-lg mx-auto">
      {passengerAmount.map((passenger, index) => {
        return (
          <div key={index} className="mt-10">
            <h2 className="text-sm text-[#404040] mb-1">{passenger.text}</h2>
            <section className="flex flex-wrap md:flex-nowrap gap-4 items-end w-full  h-full">
              <div className="w-full">
                <label htmlFor="Username" className="relative block rounded-md">
                  <input
                    type="text"
                    id="Username"
                    className="peer w-full border-[0.8px] border-[#ADADAD] rounded-[6px] py-1.5 px-2.5 bg-transparent placeholder-transparent outline-none focus:border-[#1D91CC] focus:text-[#1D91CC]"
                    placeholder="Username"
                  />

                  <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-[#868686] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#1D91CC]">
                    Username
                  </span>
                </label>
              </div>

              <div className="w-full">
                <label htmlFor="LastName" className="relative block rounded-md">
                  <input
                    type="text"
                    id="Username"
                    className="peer w-full border-[0.8px] border-[#ADADAD] rounded-[6px] py-1.5 px-2.5 bg-transparent placeholder-transparent outline-none focus:border-[#1D91CC] focus:text-[#1D91CC]"
                    placeholder="Lastname"
                  />

                  <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-[#868686] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#1D91CC]">
                    Lastname
                  </span>
                </label>
              </div>

              <div className="w-full">
                <Select>
                  <SelectTrigger className="peer w-full lg:w-[200px] text-[#868686] border-[0.8px] border-[#ADADAD] rounded-[6px] py-1.5 px-2.5 bg-transparent placeholder-transparent outline-none focus:border-[#1D91CC] focus:text-[#1D91CC]">
                    <SelectValue
                      placeholder="Gender"
                      className="peer-focus:text-[#1D91CC] text-xs"
                    />
                  </SelectTrigger>
                  <SelectContent className="text-xs text-[#868686]">
                    <SelectItem value="light">Male</SelectItem>
                    <SelectItem value="dark">Femail</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* date of birth */}
              <div className="w-full">
                <p className="text-sm text-[#868686] mb-1">Date of Birth</p>
                <div className="flex peer border-[0.8px] border-[#ADADAD] rounded-[6px] w-full md:min-w-[22rem] ">
                  <div className="w-full">
                    <Select>
                      <SelectTrigger className="w-full rounded-none border-none text-[#868686] px-4">
                        <SelectValue placeholder="Day" className="" />
                      </SelectTrigger>
                      <SelectContent className="rounded-none border-none ">
                        {days.map((day: any) => (
                          <SelectItem key={day} value={day ?? "days"}>
                            {day}
                          </SelectItem>
                        ))}
                        {/* <SelectItem value="dark">Femail</SelectItem> */}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="w-full border-x-[0.8px] border-[#ADADAD]">
                    <Select>
                      <SelectTrigger className="w-full rounded-none border-none text-[#868686] px-4">
                        <SelectValue placeholder="Month" className="px-3" />
                      </SelectTrigger>
                      <SelectContent className="rounded-none border-none">
                        {months.map((month: any) => (
                          <SelectItem key={month} value={month}>
                            {month}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="w-full">
                    <Select>
                      <SelectTrigger className="w-full rounded-none border-none text-[#868686] px-4">
                        <SelectValue placeholder="Year" />
                      </SelectTrigger>
                      <SelectContent className="rounded-none border-none w-full flex-[2]">
                        {years.map((year: any) => (
                          <SelectItem key={year} value={year}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              {/* day month and year */}
            </section>

            <section className="mt-8">
              <div className="flex flex-wrap md:flex-nowrap items-end justify-end gap-4">
                <div className="w-full md:w-fit flex flex-col md:flex-row justify-end gap-4">
                  <div className=" w-full ">
                    <Select>
                      <SelectTrigger className="peer w-full md:w-[200px] text-[#868686] border-[0.8px] border-[#ADADAD] rounded-[6px] py-1.5 px-2.5 bg-transparent placeholder-transparent outline-none focus:border-[#1D91CC] focus:text-[#1D91CC]">
                        <SelectValue
                          placeholder="Nationality"
                          className="text-xs peer-focus:text-[#1D91CC]"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Nigerian</SelectItem>
                        <SelectItem value="dark">Ghanaian</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="w-full flex justify-end ">
                    <label
                      htmlFor="Username"
                      className="relative w-full block rounded-md"
                    >
                      <input
                        type="text"
                        id="PassportNO"
                        className="peer w-full lg:w-[200px] border-[0.8px] border-[#ADADAD] rounded-[6px] py-1.5 px-2.5 bg-transparent placeholder-transparent outline-none focus:border-[#1D91CC] focus:text-[#1D91CC]"
                        placeholder="PassportNo"
                        //   className="peer w-full border-none py-1.5 bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                      />

                      <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-[#868686] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#1D91CC]">
                        Passport No
                      </span>
                    </label>
                  </div>
                </div>

                <div className="w-full md:w-fit">
                  <p className="text-sm text-[#868686] mb-1">
                    Expiry Date of Passport
                  </p>
                  <div className="flex peer border-[0.8px] border-[#ADADAD] rounded-[6px] w-full md:min-w-[22rem]">
                    <div className="w-full">
                      <Select>
                        <SelectTrigger className="w-full rounded-none border-none text-[#868686] px-4">
                          <SelectValue
                            placeholder="Day"
                            className="text-xs text-[#868686]"
                          />
                        </SelectTrigger>
                        <SelectContent className="rounded-none border-none">
                          {days.map((day: any) => (
                            <SelectItem key={day} value={day ?? "days"}>
                              {day}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="w-full border-x-[0.8px] border-[#ADADAD]">
                      <Select>
                        <SelectTrigger className="w-full rounded-none border-none text-[#868686] px-4">
                          <SelectValue
                            placeholder="Month"
                            className="px-3 text-xs text-[#868686]"
                          />
                        </SelectTrigger>
                        <SelectContent className="rounded-none border-none">
                          {months.map((month: any) => (
                            <SelectItem key={month} value={month}>
                              {month}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="w-full">
                      <Select>
                        <SelectTrigger className="w-full rounded-none border-none text-[#868686] px-4">
                          <SelectValue
                            placeholder="Year"
                            className="text-xs text-[#868686]"
                          />
                        </SelectTrigger>
                        <SelectContent className="rounded-none border-none w-full flex-[2]">
                          {years.map((year: any) => (
                            <SelectItem key={year} value={year}>
                              {year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                {/* day month and year */}
              </div>
            </section>
            <hr className="border-b-[0.8px] border-[#EDEDED] w-[200px] mt-4" />
          </div>
        );
      })}
    </main>
  );
};

export default PassengerForm;

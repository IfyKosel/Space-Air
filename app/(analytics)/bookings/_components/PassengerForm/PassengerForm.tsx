"use client";
import { useEffect, useState } from "react";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { getDaysInMonth, months } from "@/Utils/monthDays";
import { countries } from "countries-list";
import { PassengerFormData, countryList } from "@/types/types";
import { FieldErrors } from "react-hook-form";

type PassengerFormProps = {
  //   index: number;
  //   register: any;
  //   fields: any;
  //   errors: FieldErrors<PassengerFormData>;
};

const PassengerForm = (props: PassengerFormProps) => {
  const [list, setList] = useState<countryList[]>([]);
  const currentDate = new Date();

  const monthNumber = currentDate.getMonth() + 1;

  const days = getDaysInMonth(2024, monthNumber);

  const validatePhoneNumber = (value: string) => {
    const parsedNumber = parsePhoneNumberFromString(value);
    return parsedNumber && parsedNumber.isValid()
      ? true
      : "Invalid phone number";
  };

  useEffect(() => {
    const countryList = Object.keys(countries).map((countryCode) => ({
      value: countryCode,
      label: countries[countryCode as keyof typeof countries].name,
    }));

    setList(countryList);
  }, []);

  return (
    <main className="max-w-screen-xl mx-auto mb-8 mt-10 ">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:flex flex-nowrap items-end  gap-4  justify-between w-full">
        <div className="w-full">
          <label htmlFor="first_name" className="relative block rounded-md">
            <input
              type="text"
              id="first_name"
              className="peer w-full border-[0.8px] border-[#ADADAD] rounded-[6px] py-1.5 px-2.5 bg-transparent placeholder-transparent outline-none focus:border-[#1D91CC] focus:text-[#1D91CC]"
              placeholder="First Name"
            />

            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-[#868686] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#1D91CC]">
              First Name
            </span>
          </label>
        </div>

        <div className="w-full">
          <label htmlFor="last_name" className="relative block rounded-md">
            <input
              type="text"
              id="last_name"
              className="peer w-full border-[0.8px] border-[#ADADAD] rounded-[6px] py-1.5 px-2.5 bg-transparent placeholder-transparent outline-none focus:border-[#1D91CC] focus:text-[#1D91CC]"
              placeholder="Last Name"
            />

            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-[#868686] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#1D91CC]">
              Last Name
            </span>
          </label>
        </div>

        <div className="w-full">
          <label
            htmlFor="first_name"
            className="relative rounded-md flex flex-col-reverse"
          >
            <select
              name=""
              id=""
              className="peer w-full text-[#868686] border-[0.8px] border-[#ADADAD] rounded-[6px] py-2 px-2.5 bg-transparent outline-none focus:border-[#1D91CC] focus:text-[#1D91CC]"
            >
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
            </select>
            <span className="bg-white text-sm text-[#868686] peer-focus:text-sm peer-focus:text-[#1D91CC]">
              Gender
            </span>
          </label>
        </div>

        {/* date of birth */}
        <div className="w-full">
          <p className="bg-white text-sm text-[#868686] peer-focus:text-sm peer-focus:text-[#1D91CC]">
            Date of Birth {" (DD-MM-YYYY)"}
          </p>
          <div className="flex border-[0.8px] border-[#ADADAD] rounded-[6px] w-full md:min-w-[28vw] xl:min-w-[22rem] bg-white ">
            <div className="w-[70%] px-2">
              <select
                name=""
                id=""
                className="peer w-full text-[#868686] py-2 px-2.5 bg-transparent outline-none focus:text-[#1D91CC] flex items-center"
              >
                {days.map((day: any) => (
                  <option key={day} value={day ?? "days"}>
                    {day}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full border-x-[0.8px] border-[#ADADAD] pr-2 bg-white ">
              <select
                name=""
                id=""
                className="peer w-full text-[#868686] py-2 px-2.5 bg-transparent outline-none focus:text-[#1D91CC] flex items-center"
              >
                {months.map((month: any) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full px-2">
              <label htmlFor="year" className="relative w-full block">
                <input
                  type="text"
                  id="year"
                  className="peer w-full text-[#868686] py-2 px-2.5 bg-transparent outline-none focus:text-[#1D91CC] focus:ring-0 flex items-center"
                  placeholder="2024"
                />
              </label>
            </div>
          </div>
        </div>
        {/* day month and year */}
      </section>

      <section className="mt-8 flex sm:justify-end">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:flex flex-nowrap items-end  gap-4  justify-between w-full">
          <div className="w-full">
            <label htmlFor="phone_number" className="relative block rounded-md">
              <input
                type="text"
                id="phone_number"
                className="peer w-full border-[0.8px] border-[#ADADAD] rounded-[6px] py-1.5 px-2.5 bg-transparent placeholder-transparent outline-none focus:border-[#1D91CC] focus:text-[#1D91CC]"
                placeholder="+2348134650533"
              />

              <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-[#868686] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#1D91CC]">
                Phone Number
              </span>
            </label>
          </div>

          <div className="w-full">
            <label htmlFor="passport" className="relative block rounded-md">
              <input
                type="text"
                id="passport"
                className="peer w-full border-[0.8px] border-[#ADADAD] rounded-[6px] py-1.5 px-2.5 bg-transparent placeholder-transparent outline-none focus:border-[#1D91CC] focus:text-[#1D91CC]"
                placeholder=""
              />

              <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-[#868686] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#1D91CC]">
                Passport
              </span>
            </label>
          </div>

          <div className="w-full">
            <label
              htmlFor="country"
              className="relative rounded-md flex flex-col-reverse"
            >
              <select
                name=""
                id="country"
                defaultValue="Nigeria"
                className="peer w-full text-[#868686] border-[0.8px] border-[#ADADAD] rounded-[6px] py-2 px-2.5 bg-transparent outline-none focus:border-[#1D91CC] focus:text-[#1D91CC]"
              >
                {list.map((item: any) => (
                  <option key={item.value} value={item.label ?? "days"}>
                    {item.label}
                  </option>
                ))}
              </select>
              <span className="bg-white text-sm text-[#868686] peer-focus:text-sm peer-focus:text-[#1D91CC]">
                Nationality
              </span>
            </label>
          </div>

          <div className="w-full md:w-fit">
            <p className="bg-white text-sm text-[#868686] peer-focus:text-sm peer-focus:text-[#1D91CC]">
              Issuance Date {" (DD-MM-YYYY)"}
            </p>
            <div className="flex border-[0.8px] border-[#ADADAD] rounded-[6px] w-full md:min-w-[28vw] xl:min-w-[22rem] bg-white ">
              <div className="w-[70%] px-2">
                <select
                  name=""
                  id=""
                  className="peer w-full text-[#868686] py-2 px-2.5 bg-transparent outline-none focus:text-[#1D91CC] flex items-center"
                >
                  {days.map((day: any) => (
                    <option key={day} value={day ?? "days"}>
                      {day}
                    </option>
                  ))}
                </select>
              </div>

              <div className="w-full pr-2 border-x-[0.8px] border-[#ADADAD] bg-white ">
                <select
                  name=""
                  id=""
                  className="peer w-full text-[#868686] py-2 px-2.5 bg-transparent outline-none focus:text-[#1D91CC] flex items-center"
                >
                  {months.map((month: any) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>

              <div className="w-full px-2">
                <label htmlFor="year" className="relative w-full block">
                  <input
                    type="text"
                    id="year"
                    className="peer w-full text-[#868686] py-2 px-2.5 bg-transparent outline-none focus:text-[#1D91CC] focus:ring-0 flex items-center"
                    placeholder="2024"
                  />
                </label>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="mt-8 flex sm:justify-end">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex flex-nowrap items-end  gap-4  justify-between w-full">
          <div className="w-full">
            <label htmlFor="email" className="relative block rounded-md">
              <input
                type="email"
                id="email"
                className="peer w-full border-[0.8px] border-[#ADADAD] rounded-[6px] py-1.5 px-2.5 bg-transparent placeholder-transparent outline-none focus:border-[#1D91CC] focus:text-[#1D91CC]"
                placeholder=""
              />

              <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-[#868686] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#1D91CC]">
                Email
              </span>
            </label>
          </div>

          <div className="w-full">
            <label htmlFor="inssuance" className="relative block rounded-md">
              <input
                type="text"
                id="inssuance"
                className="peer w-full border-[0.8px] border-[#ADADAD] rounded-[6px] py-1.5 px-2.5 bg-transparent placeholder-transparent outline-none focus:border-[#1D91CC] focus:text-[#1D91CC]"
                placeholder="+2348134650533"
              />

              <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-[#868686] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#1D91CC]">
                Place of Issuance
              </span>
            </label>
          </div>

          <div className="w-full">
            <label htmlFor="birth_place" className="relative block rounded-md">
              <input
                type="text"
                id="birth_place"
                className="peer w-full border-[0.8px] border-[#ADADAD] rounded-[6px] py-1.5 px-2.5 bg-transparent placeholder-transparent outline-none focus:border-[#1D91CC] focus:text-[#1D91CC]"
                placeholder=""
              />

              <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-[#868686] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#1D91CC]">
                Place of Birth
              </span>
            </label>
          </div>

          <div className="w-full md:w-fit">
            <p className="bg-white text-sm text-[#868686] peer-focus:text-sm peer-focus:text-[#1D91CC]">
              Expiry Date of Passport {" (DD-MM-YYYY)"}
            </p>
            <div className="flex border-[0.8px] border-[#ADADAD] rounded-[6px] w-full md:min-w-[28vw] xl:min-w-[22rem] bg-white ">
              <div className="w-[70%] px-2">
                <select
                  name=""
                  id=""
                  className="peer w-full text-[#868686] py-2 px-2.5 bg-transparent outline-none focus:text-[#1D91CC] flex items-center"
                >
                  {days.map((day: any) => (
                    <option key={day} value={day ?? "days"}>
                      {day}
                    </option>
                  ))}
                </select>
              </div>

              <div className="w-full pr-2 border-x-[0.8px] border-[#ADADAD] bg-white ">
                <select
                  name=""
                  id=""
                  className="peer w-full text-[#868686] py-2 px-2.5 bg-transparent outline-none focus:text-[#1D91CC] flex items-center"
                >
                  {months.map((month: any) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>

              <div className="w-full px-2">
                <label htmlFor="year" className="relative w-full block">
                  <input
                    type="text"
                    id="year"
                    className="peer w-full text-[#868686] py-2 px-2.5 bg-transparent outline-none focus:text-[#1D91CC] focus:ring-0 flex items-center"
                    placeholder="2024"
                  />
                </label>
              </div>
            </div>
          </div>
          {/* day month and year */}
        </div>
      </section>
    </main>
  );
};

export default PassengerForm;

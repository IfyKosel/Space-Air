import { dashboardRow, userRow } from "@/Utils/constant";
import { StaticImageData } from "next/image";
import { JSXElementConstructor } from "react";

export type SidebarItemProps = {
	title: string;
	href: string;
};

export type HeaderStatProps ={
	title: string;
	amount: string;
	icon: string;
	percent: string;
}

// export type TableCol = { tableHead: string };

// export type TablePage = {pageContent: () => JSX.Element}

export type DashboardRowProps = (typeof dashboardRow)[number]

export type UserRowProps = {
	date: string;
    userID: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    bookings: string;
}

export type ChartOption = {
	title?: {
	  text: string;
	  subtext: string;
	};
	tooltip?: {
	  trigger: string;
	  overflowX?: string;
	  axisPointer?: {
		type: string;
	  };
	};
	legend?: {
	  data: string[];
	  icon: string;
	  textStyle: {};
	  bottom: string;
	  left: string;
	};
	toolbox?: {
	  show: boolean;
	  feature: {
		dataView: {
		  show: boolean;
		  readOnly: boolean;
		};
		magicType: {
		  show: boolean;
		  type: string[];
		};
		restore: {
		  show: boolean;
		};
		saveAsImage: {
		  show: boolean;
		};
	  };
	};
	calculable?: boolean;
	xAxis: {
	  type: string;
	  data: string[];
	  axisTick?: {
		alignWithLabel?: Boolean;
	  };
	  axisLabel: {};
	  axisLine: {}
	}[];
  
	yAxis: {
	  type?: string;
	  value?: Boolean;
	  axisLabel: {};
	//   min: number;
	//   max: number;
	}[];
	series: {
	  itemStyle?: {};
	  name: string;
	  type: string;
	  data: number[];
	  barWidth?: string;
	}[];
	[key: string]: any;
  };

  export type OptionSelectProps = {
	key: string;
	text: string;
  };

  export type YearProps = {
	id: string;
	title: string;
  };

  export type AvailableFlightProps = {
	id: string;
	airline: string;
	departureTime: string;
	arrivalTime: string;
	departure: string;
	destination: string;
	estimatedTime: string;
	desc: string;
	price: string;
	reservationNumber: string;
	ticketNumber: string;
	bookingDate: string;
	flightTime: string;
	status: string;
  }[];

  export type FlightDetailsProps = {
      id: string;
      passportNumber: string;
      dob: string;
      passengerName: string;
    }[];

  export interface FilterObject {
	[key: string]: any;
  }
  
  export type CabinOptionProps = {
	key: string;
	text: string;
  };
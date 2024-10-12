import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ProjectType } from "./types";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const colors = ["#98d7fc", "#fceffe", "#ecccff", "#FFA5A1", "#b5aaf9"];

const getDividedData = (data: ProjectType[], type: string) => {
  const totalLength = data.length;
  const dividedWouldBe = totalLength / 2;
  const firstHalf = data.slice(0, dividedWouldBe);
  const secondHalf = data.slice(dividedWouldBe, totalLength);
  let dataTrimmed = [];
  if (type === "1st") {
    dataTrimmed = firstHalf;
  } else {
    dataTrimmed = secondHalf;
  }
  return dataTrimmed;
};

const getSortByTransactionDate = (a: any, b: any) => {
  if (a && b) {
    return (
      new Date(b.transaction_date).valueOf() -
      new Date(a.transaction_date).valueOf()
    );
  } else {
    console.log(
      "Did not get array of objects to sorting data check your data and also sorting method....",
    );

    return 0;
  }
};

export { cn, colors, getDividedData, getSortByTransactionDate };

import { Color } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export default getColors;

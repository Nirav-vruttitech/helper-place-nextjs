export const GetHelpContent = async (lang: string, type: "Job" | "resume", id: number) => {
  let url = `https://api2.helperplace.com/mobile/masterdata/GetHelpContent?location_id=${id}&type=${type}&lang=${lang}`;
  let res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = await res.json();
  return data?.data;
};
export default GetHelpContent;

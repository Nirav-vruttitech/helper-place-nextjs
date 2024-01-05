export default async (language: string) => {
  const response = await fetch(
    `https://api2.helperplace.com/mobile/masterdata/GetAllMasterDataJson?country=9&lang=${language}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Lang: language,
      },
    }
  );
  const data = await response.json();
  return data?.data;
};

export default async (query: string, language: string) => {
  const response = await fetch(
    `https://api2.helperplace.com/mobile/candidate/FindCandidate${query}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Lang: language,
      },
    }
  );
  const data = await response.json();
  return data;
};

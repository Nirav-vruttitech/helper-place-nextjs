const getJobDetails = async (url: string) => {
  const response = await fetch(
    `https://api2.helperplace.com/mobile/jobfilter/GetJobByUrl?job_post_url=${url}&lang=en`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Lang: "en",
      },
    }
  );
  const data = await response.json();
  return data.data.job_detail;
};
export default getJobDetails;

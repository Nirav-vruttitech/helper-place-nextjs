// "use client";
import Profile from "@/components/Profile";
import SectionHeader from "@/components/SectionHeader";
import colors from "@/constant/colors";
import masterDataJsonService from "@/services/masterDataJsonService";
import { JobType } from "@/types/job-interface";
import React, { useEffect, useState } from "react";

export const getJobData = async (url: string) => {
  const response = await fetch(
    `https://api2.helperplace.com/mobile/jobfilter/GetJobByUrl?job_post_url=${url}&lang=en`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Lang: "en",
      },
      cache: "no-cache",
    }
  );
  const data = await response.json();
  return data.data.job_detail;
};
const JobPage = async ({ params }: any) => {
  const url = params.job.join("/").toString().replace("job/", "");
  const jobData = await getJobData(url);
  //   const masterData = await masterDataJsonService("en");

  //   client side code
  //   const [jobData, setJobData] = useState<any>();

  //     useEffect(() => {
  //       (async () => {
  //         const response = await fetch(
  //           `https://api2.helperplace.com/mobile/jobfilter/GetJobByUrl?job_post_url=${url}&lang=en`,
  //           {
  //             method: "GET",
  //             headers: {
  //               "Content-Type": "application/json",
  //               Lang: "en",
  //             },
  //           }
  //         );
  //         const data = await response.json();
  //         setJobData(data.data.job_detail);
  //       })();
  //     }, [url]);

  return (
    <div>
      <div
        style={{
          paddingLeft: 10,
          //     paddingRight: isLangArabic ? 20 : 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: colors.primaryText,
        }}
        aria-label={`job-description`}
      >
        <Profile
          type="job"
          familyDescription={"hasfhasl"}
          post_manager={jobData?.post_manager}
          very_active={jobData?.very_active}
          title={jobData?.title}
          //     publish_date={convertToHoursAndMinutes(jobData?.job_detail?.publish_date)}
          image={jobData?.icon_thumbnail}
          locationId={jobData?.job_location_id}
        />
        <div
          style={{
            paddingLeft: 10,
            //     paddingRight: isLangArabic ? 20 : 10,
            display: "flex",
            alignItems: "center",
            color: colors.primaryText,
          }}
          aria-label={`job-description`}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: jobData?.job_description,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default JobPage;

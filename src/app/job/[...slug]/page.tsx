"use client";
import Profile from "@/components/Profile";
import colors from "@/constant/colors";
import React, { Suspense, useEffect, useState } from "react";

interface PropsType {
  params: { slug: string[] };
}

const JobDetails: React.FC<PropsType> = ({ params }) => {
  const url = params.slug.join("/").toString();

  //   client side code
  const [jobData, setJobData] = useState<any>();

  useEffect(() => {
    (async () => {
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
      setJobData(data.data.job_detail);
    })();
  }, [url]);
  return (
    <div>
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
          <Suspense fallback={null}>
            <Profile
              type="job"
              familyDescription={"Nirav"}
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
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

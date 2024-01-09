"use client";
import React, { useEffect, useState } from "react";

import colors from "@/constant/colors";
import getJobDetails from "@/services/getJobDetails";

import dynamic from "next/dynamic";
const Profile = dynamic(() => import("@/components/Profile"), { ssr: true });

export interface PropsType {
  params: { slug: string[] };
  children: React.ReactNode;
}

const JobDetails: React.FC<PropsType> = ({ params }) => {
  const url: string = params?.slug.join("/").toString();
  const [jobData, setJobData] = useState<any>();
  useEffect(() => {
    (async () => {
      const jobData = await getJobDetails(url);
      setJobData(jobData);
    })();
  }, []);

  return (
    <div>
      <div
        style={{
          paddingLeft: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: colors.primaryText,
        }}
        aria-label={`job-description`}
      >
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
      </div>
    </div>
  );
};

export default JobDetails;

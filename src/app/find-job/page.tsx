import HeaderBanner from "@/components/HeaderBanner";
import React from "react";

import OrderByAndFilter from "@/components/OrderByAndFilter";
import FilterSection from "@/components/FilterSection";
import CandidateCart from "@/components/CandidateCart";
import { MasterDataJsonType } from "@/types/masterDataJson";
import GetHelpContent from "@/services/GetHelpContent";
import { HelpContentType } from "@/types/HelpContentType";
import masterDataJsonService from "@/services/masterDataJsonService";
import { MasterDataInstance } from "@/utils/MasterDataInstance";
import { FindJobType } from "@/types/dataTypes";
import findJobService from "@/services/findJobService";

const FindJob = async ({ searchParams }: any) => {
  const lang = "en";
  const helpContent: HelpContentType = await GetHelpContent(lang, "Job", 0);
  const masterData: MasterDataJsonType = await masterDataJsonService(lang);
  const masterDataInstance = new MasterDataInstance(masterData);
  const query = masterDataInstance.getQuery(searchParams);
  const data: any = await findJobService(query, lang);
  const findJobData: FindJobType[] = data?.data;

  return (
    <div>
      <HeaderBanner description={helpContent.header_description} title={helpContent.header_title} />
      <OrderByAndFilter />
      <div className="flex gap-x-10">
        <FilterSection masterData={masterData} />

        {findJobData.length > 0 && (
          <div className="flex flex-col w-10/12">
            {findJobData.map((data: FindJobType, i) => (
              <CandidateCart
                key={i}
                type="JOB"
                language="en"
                titleName={data.job_title}
                profileImage={data.icon_thumbnail}
                resumeManager={data.post_manager}
                veryActive={data.very_active}
                metaData={data.meta_data}
                subTitle={
                  data.family_type_id
                    ? masterDataInstance.getDataByNames(
                        "family_type",
                        "family_type_id",
                        "family_type_name",
                        data.family_type_id
                      )
                    : "company"
                }
                nationality={masterDataInstance.getDataByNames(
                  "nationality",
                  "nationality_id",
                  "nationality_name",
                  data.employer_nationality_id
                )}
                locationName={masterDataInstance.getDataByNames(
                  "job_location",
                  "job_location_id",
                  "location_name",
                  data.job_location_id
                )}
                position={masterDataInstance.getDataByNames(
                  "job_position",
                  "job_position_id",
                  "position_name",
                  data.job_position_id
                )}
                jobType={masterDataInstance.getDataByNames(
                  "job_type",
                  "job_type_id",
                  "job_type_name",
                  data.job_type_id
                )}
                startDate={data.start_date}
                startDateFlexiblity={data.start_date_flexiblity}
                postUrl={`/job/${data.job_post_url}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FindJob;

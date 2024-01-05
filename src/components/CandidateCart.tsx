"use client";
import colors from "@/constant/colors";
import { Calendar, CircleIcon, HomeUserIcon, Location } from "@/constant/icons";
import moment from "moment";
import Link from "next/link";
import React from "react";
interface PropsType {
  type: "JOB" | "CANDIDATE";
  language: string;
  postUrl: string;
  jobType: string;
  metaData: string;
  locationName: string;
  profileImage: string;
  resumeManager: string;
  veryActive: number;
  startDate: string;
  titleName: string;
  subTitle: string;
  nationality?: string;
  position?: string;
  startDateFlexiblity?: number;
  contractStatus?: string;
  expricence?: string;
}

const CandidateCart: React.FC<PropsType> = ({
  postUrl,
  jobType,
  locationName,
  profileImage,
  resumeManager,
  veryActive,
  startDate,
  titleName,
  subTitle,
  nationality,
  metaData,
  position,
  startDateFlexiblity,
  contractStatus,
  expricence,
}) => {
  return (
    <Link href={postUrl}>
      <div className="lg:w-full flex  pb-3  gap-x-3 lg:gap-x-5 mt-10 border shadow rounded-lg shadow-black-50/20">
        <div className="flex flex-col items-center lg:justify-between lg:px-2 pt-5 gap-y-5">
          <img
            src={profileImage}
            alt="candidate-image"
            width={100}
            height={100}
            className="lg:w-[120px] lg:h-[120px] border border-gray-300 rounded-full aspect-square object-cover"
          />
          <div
            id="pointer"
            className="w-[100px] lg:w-[120px] h-[30px] border-b-2 self-end border-yellowbtn  flex justify-around items-center text-white font-semibold"
          >
            <span>{resumeManager}</span>
          </div>
        </div>
        <div className="pt-5 pr-2 flex flex-col lg:px-1">
          <p className="text-blue-900 font-bold lg:font-semibold text-lg lg:text-2xl">
            {titleName}
          </p>

          <div className="flex flex-col mt-2 lg:flex gap-x-1">
            <div className="flex items-center space-x-2 text-gray-500 font-semibold lg:text-lg">
              <span>{subTitle}</span>
              <span>-</span>
              <span>{nationality}</span>
              <Location width={16} height={16} />
              <span>{locationName}</span>
            </div>
          </div>
          <p className="hidden sm:inline-block text-gray-500 mt-2 pr-2">{metaData}</p>

          <div className="flex items-center flex-wrap lg:mt-11 gap-x-3">
            <div className="text-style">
              <HomeUserIcon width={18} height={18} />
              <span>
                {position} | {jobType}
              </span>
            </div>

            <div className="text-style">
              {<Calendar />}

              {startDateFlexiblity! > 0 ? (
                <>
                  Before {moment(startDate).add(startDateFlexiblity, "days").format("DD MMM YYYY")}
                </>
              ) : (
                <>From {moment(startDate).format("DD MMM YYYY")}</>
              )}
            </div>
            {veryActive === 1 && (
              <div className="text-style">
                <CircleIcon width={17} height={17} />
                <span className="text-greenbtn">Very Active</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CandidateCart;

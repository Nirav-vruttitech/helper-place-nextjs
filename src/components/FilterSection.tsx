"use client";
import resume_type, { ResumeType } from "@/data/PostManager";
import { ResumeDetail } from "@/types/dataTypes";
import {
  ContractStatus,
  JobLocation,
  JobPostion,
  JobType,
  MasterDataJsonType,
  Skill,
  SkillCategory,
} from "@/types/masterDataJson";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useState } from "react";
import Select, { components } from "react-select";
import { RxCross2 } from "react-icons/rx";
import { BiReset } from "react-icons/bi";
import { get } from "http";
import path from "path";

interface PropsType {
  masterData: MasterDataJsonType;
}

const FilterSection: React.FC<PropsType> = ({ masterData }) => {
  const InputOption = ({
    getStyles,
    Icon,
    isDisabled,
    isFocused,
    isSelected,
    children,
    innerProps,
    ...rest
  }: any) => {
    const [isActive, setIsActive] = useState(false);
    const onMouseDown = () => setIsActive(true);
    const onMouseUp = () => setIsActive(false);
    const onMouseLeave = () => setIsActive(false);

    // styles
    let bg = "transparent";
    if (isFocused) bg = "#eee";
    if (isActive) bg = "#B2D4FF";

    const style = {
      alignItems: "center",
      backgroundColor: bg,
      color: "inherit",
      display: "flex",
      rowGap: "3",
      fontSize: "0.85rem",
    };

    // prop assignment
    const props = {
      ...innerProps,
      onMouseDown,
      onMouseUp,
      onMouseLeave,
      style,
    };

    return (
      <components.Option
        {...rest}
        isDisabled={isDisabled}
        isFocused={isFocused}
        isSelected={isSelected}
        getStyles={getStyles}
        innerProps={props}
      >
        <input className="mr-2" type="checkbox" checked={isSelected} />
        {children}
      </components.Option>
    );
  };

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;
  const [filterOpenModal, setFilterOpenModal] = useState(false);

  // create a query
  const createQueryString = useCallback(
    (key: string, value: string) => {
      if (value) {
        let params = new URLSearchParams(searchParams);
        params.set(key, value);
        return params.toString();
      } else {
        let params = new URLSearchParams(searchParams);
        params.delete(key);
        return params.toString();
      }
    },
    [searchParams]
  );

  // getSearchParams
  const getQueryString = useCallback(
    (key: string) => {
      let value = searchParams.get(key);
      if (value) return value;
    },
    [searchParams]
  );

  // handle reset
  const handleReset = () => {
    router.push(pathname);
  };

  const skillOption = (skillName: string) => {
    return masterData.skill_category
      .filter((category: SkillCategory) => category.skill_category_name === skillName)
      .map((category: SkillCategory) => {
        return masterData.skills
          .filter((skill: Skill) => skill.skill_category_id === category.skill_category_id)
          .map((skill: Skill) => {
            return {
              label: skill.skill_name,
              value: skill.skill_name,
            };
          });
      })
      .flat();
  };

  return (
    <div>
      <div className="w-full flex gap-x-5 relative">
        <div
          className={`${
            filterOpenModal
              ? "py-10 fixed inset-0 !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-5 backdrop-blur-sm z-[1000]"
              : "hidden lg:block"
          }`}
        >
          <div
            className={`${
              filterOpenModal
                ? `sm:w-[500px] w-[320px]  shadow rounded-lg bg-white p-5 px-7 lg:px-5 border border-gray-400`
                : "p-5 border border-gray-400 lg:w-[350px] my-10 shadow rounded-lg bg-bannerBgColor"
            }`}
          >
            {filterOpenModal && (
              <div className="h-[40px] flex items-center justify-between  mb-4 font-semibold text-2xl border-b-[.2rem] border-yellowbtn">
                <h1 className="text-blue-900">Filter</h1>
                {/* <span onClick={() => handleOpenFilterModal(false)}>
                  <RxCross2 />
                </span> */}
              </div>
            )}

            <h1 className="text-2xl text-blue-900">I'm Looking For</h1>
            {!filterOpenModal && (
              <div className="flex justify-between mt-5 text-lg font-semibold">
                <p className="text-blue-900">Filter</p>
                <button
                  onClick={handleReset}
                  className="flex items-center justify-center gap-1 text-greenbtn "
                >
                  <span>
                    <BiReset />
                  </span>
                  Reset
                </button>
              </div>
            )}

            <div className="mt-2">
              {/* JOB LOCATION */}
              <div>
                <h2 className="text-blue-900 font-semibold">Job Location</h2>
                <div className="my-2">
                  <Select
                    isMulti
                    closeMenuOnSelect={false}
                    hideSelectedOptions={false}
                    value={
                      getQueryString("location")
                        ? getQueryString("location")
                            ?.split(",")
                            .map((data: any) => {
                              return {
                                label: data,
                                value: data,
                              };
                            })
                        : []
                    }
                    options={masterData.job_location.map((data: JobLocation) => {
                      return {
                        label: data.location_name,
                        value: data.location_name,
                      };
                    })}
                    onChange={(optionValue) => {
                      if (Array.isArray(optionValue)) {
                        router.push(
                          `${pathname}?${createQueryString(
                            "location",
                            optionValue.map((opt: any) => opt.value).join(",")
                          )}`
                        );
                      }
                    }}
                    placeholder="Job Location"
                  />
                </div>
              </div>
              {/* JOB POSITION */}
              <div>
                <h2 className="border-b-[0.2rem] pb-1 border-greenbtn text-blue-900 font-semibold">
                  Job Postion
                </h2>
                <div className="my-2">
                  {masterData.job_position.map((position: JobPostion) => {
                    return (
                      <label
                        key={position.job_position_id}
                        className="flex gap-x-4 text-sm cursor-pointer"
                      >
                        <input
                          type="radio"
                          name={"job_position"}
                          value={position.position_name}
                          onClick={(e: any) => {
                            router.push(
                              `${pathname}?${
                                !getQueryString("job_position")
                                  ? createQueryString("job_position", e.target.value)
                                  : ""
                              }`
                            );
                          }}
                          checked={position.position_name === getQueryString("job_position")}
                        />
                        {position.position_name}
                      </label>
                    );
                  })}
                </div>
              </div>
              {/* DATE */}
              <div>
                <div className="space-y-1 my-2">
                  <span className="text-blue-900 font-semibold">Start Date</span>
                  <input
                    type="date"
                    value={getQueryString("start_date") || ""}
                    onChange={(e: any) =>
                      router.push(`${pathname}?${createQueryString("start_date", e.target.value)}`)
                    }
                    className="border border-gray-300 w-full p-[0.35rem] rounded-md "
                  />
                </div>
              </div>
              {/* JOB TYPE */}
              <div>
                <h2 className="border-b-[0.2rem] pb-1 border-greenbtn text-blue-900 font-semibold">
                  Job type
                </h2>
                <div className="my-2">
                  {masterData.job_type.map((jobType: JobType) => {
                    return (
                      <label
                        key={jobType.job_type_id}
                        className="flex gap-x-4 text-sm cursor-pointer"
                      >
                        <input
                          type="radio"
                          name={"job_type"}
                          value={jobType.job_type_name}
                          onClick={(e: any) => {
                            !getQueryString("job_type")
                              ? router.push(
                                  `${pathname}?${createQueryString("job_type", e.target.value)}`
                                )
                              : router.push(pathname);
                          }}
                          checked={jobType.job_type_name === getQueryString("job_type")}
                        />

                        {jobType.job_type_name}
                      </label>
                    );
                  })}
                </div>
              </div>
              {/* CANDIDATE LOCATION */}
              <div>
                <h2 className="text-blue-900 font-semibold">Contract Status</h2>
                <div className="my-2">
                  <Select
                    isMulti
                    closeMenuOnSelect={false}
                    hideSelectedOptions={false}
                    value={
                      getQueryString("contract_status")
                        ? getQueryString("contract_status")
                            ?.split(",")
                            .map((data: any) => {
                              return {
                                label: data,
                                value: data,
                              };
                            })
                        : []
                    }
                    options={masterData.contract_status.map((data: ContractStatus) => {
                      return {
                        label: data.contract_sts_name,
                        value: data.contract_sts_name,
                      };
                    })}
                    onChange={(optionValue) => {
                      if (Array.isArray(optionValue)) {
                        router.push(
                          `${pathname}?${createQueryString(
                            "contract_status",
                            optionValue.map((opt: any) => opt.value).join(",")
                          )}`
                        );
                      }
                    }}
                    placeholder="Contract Status"
                  />
                </div>
              </div>
              {/* POST BY */}
              <div>
                <h2 className="border-b-[0.2rem] pb-1 border-greenbtn text-blue-900 font-semibold">
                  Post By
                </h2>
                <div className="my-2">
                  {resume_type.map((data: ResumeType) => {
                    return (
                      <label
                        key={data.resume_type_id}
                        className="flex gap-x-4 text-sm cursor-pointer"
                      >
                        <input
                          type="radio"
                          name={"resume_type"}
                          value={data.resume_type_name}
                          onClick={(e: any) => {
                            !getQueryString("post_manager")
                              ? router.push(
                                  `${pathname}?${createQueryString("post_manager", e.target.value)}`
                                )
                              : router.push(pathname);
                          }}
                          checked={data.resume_type_name === getQueryString("post_manager")}
                        />
                        {data.resume_type_name}
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* LANG */}

              {/* LANGUAGE SKILL  */}
              <div>
                <h2 className="text-blue-900 font-semibold">Language</h2>
                <div className="my-2">
                  <Select
                    isMulti
                    closeMenuOnSelect={false}
                    hideSelectedOptions={false}
                    value={
                      getQueryString("Language")
                        ? getQueryString("Language")
                            ?.split(",")
                            .map((data: any) => {
                              return {
                                label: data,
                                value: data,
                              };
                            })
                        : []
                    }
                    options={skillOption("Language")}
                    onChange={(optionValue) => {
                      if (Array.isArray(optionValue)) {
                        router.push(
                          `${pathname}?${createQueryString(
                            "Language",
                            optionValue.map((opt: any) => opt.value).join(",")
                          )}`
                        );
                      }
                    }}
                    placeholder="Search"
                  />
                </div>
              </div>

              {/* MAIN SKILL  */}
              <div>
                <h2 className="text-blue-900 font-semibold">Main Skill</h2>
                <div className="my-2">
                  <Select
                    isMulti
                    closeMenuOnSelect={false}
                    hideSelectedOptions={false}
                    value={
                      getQueryString("Main-Skills")
                        ? getQueryString("Main-Skills")
                            ?.split(",")
                            .map((data: any) => {
                              return {
                                label: data,
                                value: data,
                              };
                            })
                        : []
                    }
                    options={skillOption("Main Skills")}
                    onChange={(optionValue) => {
                      if (Array.isArray(optionValue)) {
                        router.push(
                          `${pathname}?${createQueryString(
                            "Main-Skills",
                            optionValue.map((opt: any) => opt.value).join(",")
                          )}`
                        );
                      }
                    }}
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
            {filterOpenModal && (
              <div className="mt-5 flex gap-x-3 justify-end">
                <button onClick={handleReset} className="btn-style bg-greenbtn">
                  Reset
                </button>
                {/* <button onClick={() => handleOpenFilterModal(false)} className="btn-style bg-yellowbtn">
                  Ok
                </button> */}
              </div>
            )}
          </div>
        </div>
        {/* <div className="flex flex-col">
          <CandidateCart loading={loading} candidateData={candidateData} masterData={masterDataJson} />
          <Paginate pageCount={totalRecord} handlePageChange={handlePageChang} page={page} />
        </div> */}
      </div>
    </div>
  );
};

export default FilterSection;

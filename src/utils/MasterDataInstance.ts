export class MasterDataInstance {
  constructor(public masterData: any) {
    this.masterData = masterData;
  }
  getIdForQuery = (queryParams: any, collection: string, key: string, fieldName: string) => {
    if (
      collection === "candidate_country" ||
      collection === "contract_status" ||
      collection === "skills" ||
      collection === "job_location"
    ) {
      let arr: string[] = queryParams.split("-").join(" ").split(",");
      let data = this.masterData[collection]
        ?.filter((item: any) => arr.includes(item[key]))
        .map((id: any) => id[fieldName])
        .join(",");
      return data;
    } else {
      let data = this.masterData[collection]?.find(
        (data: any) => data[key] == queryParams.toString().replace("-", " ")
      )[fieldName];
      return data;
    }
  };

  getDataByNames(collection: string, key: string, fieldName: string, id: number): string {
    let data: any = this.masterData[collection].find((data: any) => data[key] == id);
    return data ? data[fieldName] : "";
  }

  getQuery(query: any) {
    const findJobObj = {
      start: query.page ? query.page : 0,
      length: 20,
      start_date: query.start_date ? query.start_date : "",
      job_type_id: query.job_type
        ? this.getIdForQuery(query.job_type, "job_type", "job_type_name", "job_type_id")
        : "",
      post_manager: query.post_manager ? query.post_manager : "",
      job_position_id: query.job_position
        ? this.getIdForQuery(query.job_position, "job_position", "position_name", "job_position_id")
        : "",
      order_by: query.order_by ? query.order_by : "publish_date",
      job_location_id: query.location
        ? this.getIdForQuery(query.location, "job_location", "location_name", "job_location_id")
        : "",
      helper_contract_status_id: "",
      helper_req_nationality_id: "",
      helper_req_edu_id: "",
      helper_req_gender: "",

      // location_order: locationId || 0,
      lang: "en",
    };

    let str = "?";
    for (const [key, value] of Object.entries(findJobObj)) {
      str += `${key}=${value}&`;
    }
    str = str.slice(0, -1);
    return str;
  }
}

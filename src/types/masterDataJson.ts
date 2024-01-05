export interface MasterDataJsonType {
  job_type: JobType[];
  job_position: JobPostion[];
  accommodation_type: Accommodation[];
  contract_status: ContractStatus[];
  religion: Religion[];
  nationality: Nationality[];
  marital_status: MaritalStatus[];
  employer_type: EmployeeType[];
  education_level: EducationLevel[];
  skill_category: SkillCategory[];
  skills: Skill[];
  job_location: JobLocation[];
  edu_course: EduCourse[];
  language: Langauge[];
  family_type: FamilyType[];
  currency: Currency[];
  exp_position: ExpPostion[];
  exp_duties_list: ExpDutiesList[];
  shortlist_status: ShortListStatus[];
  candidate_duties_list: string[];
  experience_job_position: string[];
  employer_shortlist_status_list: string[];
  resume_status: string[];
  job_status: string[];
  language_list: languageList[];
  candidate_country: CandidateCountry[];
}

export interface JobType {
  job_type_id: number;
  job_type_name: string;
  en_job_type_name: string;
  job_type_icon: string;
}

export interface JobPostion {
  job_position_id: number;
  position_name: string;
  position_icon: string;
}

export interface Accommodation {
  accommodation_type_id: number;
  accommodation_type: string;
  for_resume: number;
  for_job: number;
}

export interface ContractStatus {
  contract_sts_id: number;
  contract_sts_name: string;
  for_resume: number;
  for_job: number;
}

export interface Religion {
  religion_id: number;
  religion_name: string;
}

export interface Nationality {
  nationality_id: number;
  nationality_name: string;
  en_nationality_name: string;
  country_id: null | number;
  for_resume: number;
  flag_icon: string;
  for_job: number;
}

export interface MaritalStatus {
  id: number;
  marital_status_name: string;
  en_marital_status_name: string;
}

export interface EmployeeType {
  employer_type_id: number;
  type_name: string;
  en_type_name: string;
  employer_type_icon: string;
}

export interface EducationLevel {
  edu_level_id: number;
  edu_name: string;
}

export interface SkillCategory {
  skill_category_id: number;
  skill_category_name: string;
  en_skill_category_name: string;
  for_helper: number;
  skill_category_icon: string;
  for_employer: number;
  mandatory_for_job: number;
  mandatory_for_resume: number;
}

export interface Skill {
  skill_id: number;
  skill_category_id: number;
  skill_name: string;
  skill_icon: string;
}

export interface JobLocation {
  job_location_id: number;
  location_name: string;
  country_id: number;
  country_code: string;
  country_name: string;
  short_name: string;
  country_flag_icon: string;
}

export interface EduCourse {
  edu_course_id: number;
  course_name: string;
}

export interface Langauge {
  language_id: number;
  language_name: string;
  en_language_name: string;
}

export interface FamilyType {
  family_type_id: number;
  family_type_name: string;
  en_family_type_name: string;
  member_count: number;
}

export interface Currency {
  currency_type_id: number;
  currency_name: string;
  currency_symbol: string;
  country_id: number;
  payment_support: number;
  currency_code: string;
  base_price: number;
}

export interface ExpPostion {
  id: number;
  position_name: string;
  en_position_name: string;
}

export interface ExpDutiesList {
  id: number;
  duty_name: string;
  en_duty_name: string;
}

export interface ShortListStatus {
  id: number;
  sts: string;
  en_sts: string;
}

export interface languageList {
  name: string;
  value: string;
  google_value: string;
}

export interface CandidateCountry {
  country_id: number;
  country_name: string;
  en_country_name: string;
  country_code: string;
  job_location_id: number;
  location_name: string;
  en_location_name: string;
  country_flag_icon: string;
}

// ++++++++++++++++++++++++++++++
// find candidate data types

import exp from "constants";

// ++++++++++++++++++++++++++++++
export interface FindCandidateType {
  age: number;
  contract_status_id: number;
  current_country_id: number;
  experience_year: number;
  helper_name: string;
  job_type_id: number;
  meta_data: string;
  next_job_available_date: string;
  position_id: number;
  profile_photo: string;
  resume_id: number;
  resume_manager: string;
  resume_url: string;
  very_active: number;
}

export interface BrandLogo {
  l: string | null;
  logo: string;
  location_id: number | null;
  alt: string;
  width: string;
  height: string;
}
export interface HelpContent {
  id: number;
  type: string;
  location_id: number;
  content: any;
  header_title: string;
  header_description: string;
  meta_description: string;
  meta_title: string;
  brand_logo: BrandLogo[];
}

// ++++++++++++++++++++++++++++++
// find job data types
// ++++++++++++++++++++++++++++++

export interface FindJobType {
  employer_nationality_id: 5;
  employer_type_id: number;
  family_type_id: number;
  icon_thumbnail: string;
  job_id: number;
  job_location_id: number;
  job_position_id: number;
  job_post_url: string;
  job_title: string;
  job_type_id: number;
  listing_date: string;
  meta_data: string;
  post_manager: string;
  publish_date: string;
  sort: number;
  start_date: string;
  start_date_flexiblity: number;
  very_active: number;
}

// ++++++++++++++++++++++++++++++
//  resume data types
// ++++++++++++++++++++++++++++++
export interface ExperienceType {
  country: string;
  duties: string;
  employer_nationality: string;
  employer_type: string;
  end_date: string;
  family_type: string;
  reference_type: number;
  start_date: string;
  working_tittle: string;
}

export interface EduType {
  completed_year: string;
  course_id: number;
  duration: number;
  is_completed: number;
}
export interface ResumeDetail {
  age: number;
  agency_id: number | null;
  application_id: number | null;
  application_time: number | null;
  chat_token: number | null;
  child_count: string | null;
  contract_status_id: number;
  created_time: string;
  current_country_id: number;
  edit_allow: number;
  edu: EduType[];
  edu_id: number;
  employer_sts: number | string | null;
  expected_salary: string;
  experience: ExperienceType[];
  experience_year: number;
  gender: string;
  helper_id: number;
  helper_name: string;
  job_type_id: number;
  marital_status: string;
  match_score: number | null;
  matching_para: number | string | null;
  meta_data: string;
  modified_time: string;
  nationality_id: number;
  next_job_available_date: string;
  page_title: string;
  position_id: number;
  preferred_accommodation_id: number;
  preffered_day_off: string;
  profile_photo: string;
  religion_id: number;
  remark: string | null;
  resume_active_date: string;
  resume_content: string;
  resume_expiry_date: string;
  resume_id: number;
  resume_manager: string;
  resume_pdf: string | null;
  resume_skill: number[];
  resume_url: string;
  salary_currency_type_id: number;
  seo_index: number | null;
  short_list: number;
  status: string;
  thread_id: number | null;
  very_active: number;
}

export interface RelatedCandidateType {
  age: number;
  contract_sts_name: string;
  country_name: string;
  en_meta_data: string;
  experience_year: number;
  helper_name: string;
  job_type_name: string;
  next_job_available_date: string;
  position_name: string;
  profile_photo: string;
  resume_id: number;
  resume_manager: string;
  resume_url: string;
  very_active: number;
}

// ++++++++++++++++++++++++++++++
//  news blog data types
// ++++++++++++++++++++++++++++++
export interface NewsBlogType {
  article_id: number;
  feature_image: string;
  publish_date: string;
  read_duration: string;
  seo_metadata: string;
  title: string;
  url: string;
}

export interface CategoriesType {
  category_id: number;
  category_name: string;
}

// ++++++++++++++++++++++++++++++
//  Tips data types
// ++++++++++++++++++++++++++++++

export interface ArticleLst {
  article_id: number;
  feature_image: string;
  publish_date: string;
  read_duration: string;
  seo_metadata: string;
  title: string;
  url: string;
}
export interface TipsType {
  article_lst: ArticleLst[];
  category_id: number;
  category_name: string;
}

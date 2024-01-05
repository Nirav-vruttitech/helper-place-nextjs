export interface ResumeType {
  resume_type_id: number;
  resume_type_name: string;
}
const resume_type: ResumeType[] = [
  {
    resume_type_id: 1,
    resume_type_name: "Direct",
  },
  {
    resume_type_id: 2,
    resume_type_name: "Agency",
  },
];

export default resume_type;

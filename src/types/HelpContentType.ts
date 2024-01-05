export interface HelpContentType {
  id: number;
  type: string;
  location_id: number;
  content: string;
  header_title: string;
  header_description: string;
  meta_description: string;
  meta_title: string;
  brand_logo: {
    l: number | null;
    logo: string;
    location_id: number | null;
    alt: string;
    width: string;
    height: string;
  }[];
}

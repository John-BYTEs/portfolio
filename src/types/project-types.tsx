// types/project.types.ts
export interface ProjectItem {
  id?: string | number;
  title: string;
  description: string;
  image?: string;
  link?: string;
  [key: string]: any; // For any additional properties
}
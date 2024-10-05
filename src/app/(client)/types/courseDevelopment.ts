export interface CourseSectionType {
  id: string;
  icon: string;
  title: string;
  items: string[];
  activeItem?: string;
}

export interface CourseSectionProps extends CourseSectionType {
  isExpanded: boolean;
  onToggle: () => void;
}

export interface ContentSectionProps {
  title: string;
  content: string;
  list?: string[];
  code?: string;
  explanation?: string;
}
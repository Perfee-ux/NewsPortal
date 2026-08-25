export type MegaMenuCard = {
  tag: string;
  title: string;
  imageUrl: string;
  href: string;
};

export type NavItem = {
  label: string;
  href?: string;
  hasMegaMenu?: boolean;
  megaMenuItems?: MegaMenuCard[];
};

export type SubNavTag = {
  label: string;
  href: string;
  imageUrl?: string;
};

export type PageConfig = {
  bgColor: string;
  bannerImage?: string;
  tags: SubNavTag[];
};

export interface NewsItem {
    id:string;
    title:string;
    image:string;
    date?:string;
    href:string;
}

export interface StorySlide {
  id: string;
  image: string;
  caption: string;
  source: string;
  timeAgo: string;
}

export interface StoryCollection {
  id: string;
  title: string;      
  coverImage: string;  
  storyCount: number;   
  slides: StorySlide[];
}


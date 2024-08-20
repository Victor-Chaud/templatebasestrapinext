import type { Schema, Attribute } from '@strapi/strapi';

export interface SectionSecondSection extends Schema.Component {
  collectionName: 'components_section_second_sections';
  info: {
    displayName: 'SecondSection';
    icon: 'grid';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface SectionHomeTop extends Schema.Component {
  collectionName: 'components_section_home_tops';
  info: {
    displayName: 'HomeTop';
    icon: 'layout';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'section.second-section': SectionSecondSection;
      'section.home-top': SectionHomeTop;
    }
  }
}

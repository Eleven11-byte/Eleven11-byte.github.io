import defaultBackground from '../assets/background.jpg';

/**
 * Hero copy and background settings for one page.
 */
export interface HeroSectionConfig {
  /**
   * Main hero headline text.
   */
  text: string;
  /**
   * Optional hero subtitle text.
   */
  subtitle?: string;
  /**
   * Hero background image URL.
   */
  backgroundImage: string;
}

/**
 * Centralized hero configuration for all top-level pages and post fallback.
 */
export interface HeroConfig {
  home: HeroSectionConfig;
  blog: HeroSectionConfig;
  tags: HeroSectionConfig;
  about: HeroSectionConfig;
  /**
   * Default hero image for article pages when frontmatter `heroImage` is empty.
   */
  postDefaultBackground: string;
}

export const heroConfig: HeroConfig = {
  home: {
    text: 'Eleven Blog',
    subtitle: 'Notes on technology, learning, and life.',
    backgroundImage: defaultBackground.src,
  },
  blog: {
    text: 'Posts',
    subtitle: 'Browse the writing archive.',
    backgroundImage: defaultBackground.src,
  },
  tags: {
    text: 'Tags',
    subtitle: 'Explore posts by topic.',
    backgroundImage: defaultBackground.src,
  },
  about: {
    text: 'About',
    subtitle: 'About me and this blog.',
    backgroundImage: defaultBackground.src,
  },
  postDefaultBackground: defaultBackground.src,
};

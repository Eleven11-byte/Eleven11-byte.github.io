/**
 * Site-level settings shared by header, SEO tags, and feed generation.
 */
export interface SiteConfig {
  /**
   * Canonical production URL of this site.
   */
  siteUrl: string;
  /**
   * Global site title used in header and metadata.
   */
  siteTitle: string;
  /**
   * Optional suffix appended to browser/SEO page titles.
   */
  siteTitleSuffix: string;
  /**
   * Default site description used by index and RSS metadata.
   */
  siteDescription: string;
  /**
   * BCP-47 locale tag (for example: zh-CN, en-US).
   */
  locale: string;
  /**
   * Repository URL shown in the header action area.
   */
  headerGithubRepoUrl: string;
  /**
   * Global favicon ico path served from the public directory.
   */
  faviconIco: string;
}

export const siteConfig: SiteConfig = {
  siteUrl: 'https://Eleven11-byte.github.io',
  siteTitle: 'Eleven Blog',
  siteTitleSuffix: 'Personal Blog',
  siteDescription: 'A personal blog about technology, learning, and life.',
  locale: 'zh-CN',
  headerGithubRepoUrl: 'https://github.com/Eleven11-byte/Eleven11-byte.github.io',
  faviconIco: '',
};

export const { siteUrl, siteTitle, siteTitleSuffix, siteDescription, locale, headerGithubRepoUrl, faviconIco } = siteConfig;

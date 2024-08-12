import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  floatedHeader: [
    Component.PageTitle(),
    Component.Spacer(),
    // Component.MobileOnly(Component.Spacer()),
    Component.NavigationBar(),
    Component.Search(),
    Component.Darkmode(),
  ],
  // header: [],
  afterBody: [
    Component.Comments({
      provider: 'giscus',
      options: {
        // from data-repo
        repo: 'PhDoanh/quartz',
        // from data-repo-id
        repoId: 'R_kgDOMh8WzA',
        // from data-category
        category: 'Announcements',
        // from data-category-id
        categoryId: 'DIC_kwDOMh8WzM4Chibk',
        inputPosition: "top",
      }
    }),
    Component.MobileOnly(Component.ScrollToTop()),
  ],
  footer: Component.Footer({
    links: {
      "Source code": "https://github.com/PhDoanh/doanhanma",
      Facebook: "https://www.facebook.com/PGDoanh",
      Youtube: "https://www.youtube.com/@phamgiadoanh",
      Zalo: "https://zalo.me/0389161519",
      "Email me": "mailto:phdoanh285@gmail.com" // instead of contact form in the near future
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.DesktopOnly(Component.TagList()),
    Component.MobileOnly(Component.TableOfContents()),
  ],
  left: [
    Component.DesktopOnly(Component.Backlinks()),
    // Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    // Component.DesktopOnly(Component.Graph()),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.MobileOnly(Component.Backlinks()),
    Component.MobileOnly(Component.TagList()),
    // Component.TagContent(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta()
  ],
  left: [
    // Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}

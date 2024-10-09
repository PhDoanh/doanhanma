import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { SimpleSlug } from "./quartz/util/path"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  floatedHeader: [
    Component.PageTitle(),
    Component.Spacer(),
    Component.NavigationBar(),
    Component.Search(),
    Component.Darkmode(),
  ],
  footer: Component.Footer({
    links: {
      Github: "https://github.com/PhDoanh",
      Facebook: "https://www.facebook.com/PGDoanh",
      Youtube: "https://www.youtube.com/@phamgiadoanh",
      Email: "mailto:phdoanh285@gmail.com",
      "Báo lỗi 🪲": "https://github.com/PhDoanh/doanhanma/issues/new?assignees=&labels=bug&projects=&template=bug_report.yml&title=%5BBug%5D+"
    }
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.Tools(),
    Component.TagList(),
    Component.MobileOnly(Component.TableOfContents()),
  ],
  afterBody: [
    Component.MobileOnly(Component.Backlinks()),
    Component.DesktopOnly(Component.Graph({
      localGraph: {
        drag: true,
        zoom: true,
        depth: 1,
        scale: 2,
        repelForce: 0.5,
        centerForce: 0.3,
        linkDistance: 30,
        fontSize: 0.6,
        opacityScale: 1,
        removeTags: [],
        showTags: true,
      },
      globalGraph: {
        drag: true,
        zoom: true,
        depth: -1,
        scale: 0.9,
        repelForce: 0.5,
        centerForce: 0.3,
        linkDistance: 30,
        fontSize: 0.6,
        opacityScale: 1,
        removeTags: [],
        showTags: true,
      },
    })),
    Component.Comments({
      provider: 'giscus',
      options: {
        repo: 'PhDoanh/doanhanma',
        repoId: 'R_kgDOMh8WzA',
        category: 'General',
        categoryId: 'DIC_kwDOMh8WzM4Chibl',
        inputPosition: "top",
      }
    }),
    Component.MobileOnly(Component.ScrollToTop()),
  ],
  left: [
    Component.DesktopOnly(Component.Backlinks()),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.Tools(),
    Component.MobileOnly(Component.TableOfContents()),
  ],
  afterBody: [],
  left: [
    Component.DesktopOnly(Component.RecentNotes(
      {
        showTags: false,
        limit: 5,
        linkToMore: "tags/" as SimpleSlug, // todo: use rss to instead
      }
    )),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
  ],
}

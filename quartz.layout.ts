import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { SimpleSlug } from "./quartz/util/path"

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
  // afterBody: [],
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
    Component.TagList(),
    Component.MobileOnly(Component.TableOfContents()),
  ],
  afterBody: [
    Component.MobileOnly(Component.Backlinks()),
    Component.DesktopOnly(Component.Graph({
      localGraph: {
        drag: true, // whether to allow panning the view around
        zoom: true, // whether to allow zooming in and out
        depth: 1, // how many hops of notes to display
        scale: 2, // default view scale
        repelForce: 0.5, // how much nodes should repel each other
        centerForce: 0.3, // how much force to use when trying to center the nodes
        linkDistance: 30, // how long should the links be by default?
        fontSize: 0.6, // what size should the node labels be?
        opacityScale: 1, // how quickly do we fade out the labels when zooming out?
        removeTags: [], // what tags to remove from the graph
        showTags: true, // whether to show tags in the graph
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
        removeTags: [], // what tags to remove from the graph
        showTags: true, // whether to show tags in the graph
      },
    })),
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
  left: [
    Component.DesktopOnly(Component.Backlinks()),
    // Component.DesktopOnly(Component.Explorer()),
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
    Component.MobileOnly(Component.TableOfContents()),
  ],
  afterBody: [],
  left: [
    // Component.DesktopOnly(Component.Explorer()),
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

import { formatDate, getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { JSX } from "preact"
import style from "./styles/contentMeta.scss"
import { URL } from "url"
import { range } from "d3"
import { JSXInternal } from "preact/src/jsx"

interface ContentMetaOptions {
  /**
   * Whether to display reading time
   */
  showReadingTime: boolean
  showComma: boolean
}

const defaultOptions: ContentMetaOptions = {
  showReadingTime: true,
  showComma: true,
}

function createAuthorElement(author: string, link: string) {
  author = author.trim()
  link = link.trim()
  // if the link is present and not empty
  if (link.replaceAll(" ", "") != "") {
    const authorUrl = new URL(link)

    var image_element = null
    if (authorUrl.hostname == "github.com") {
      image_element = <img src={authorUrl + ".png"} alt="" />
    }

    return (
      <span class="authorWLink">
        <a href={link} >
          {author}
        </a>
        {image_element}
      </span>
    )
  }
  else {
    return (
      <code class="name">{author}</code>
    )
  }
}

function cleanTooManyAuthors(authorsElements: JSXInternal.Element[], maxShown: number = 1) {
  if (authorsElements.length <= maxShown) {
    return authorsElements
  }

  var shownElements = authorsElements.slice(0, maxShown)
  var hiddenAuthors = (
    <span class="hiddenAuthors"> <span class="hiddenAuthorsContainer">{authorsElements.slice(maxShown, authorsElements.length)}</span></span>
  )
  return [...shownElements, <span>và</span>, hiddenAuthors]
}

export default ((opts?: Partial<ContentMetaOptions>) => {
  // Merge options with defaults
  const options: ContentMetaOptions = { ...defaultOptions, ...opts }

  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text

    if (text) {
      const segments: (string | JSX.Element)[] = []
      const authors = String(fileData.frontmatter?.author).split(",")
      const authorLinks = String(fileData.frontmatter?.authorlink).split(",")
      var authorsElements = []

      // Display authors if any
      if (authors) {
        var message = "đã cập nhật vào"
        for (var i of range(authors.length)) {
          var link = ""
          if (i < authorLinks?.length) {
            link = authorLinks[i]
          }
          authorsElements.push(createAuthorElement(authors[i], link))
        }
        segments.push(
          <span class="author">
            {cleanTooManyAuthors(authorsElements)}
            <span>{message}</span>
          </span>
        )
      }

      if (fileData.dates) {
        segments.push(formatDate(getDate(cfg, fileData)!, cfg.locale))
      }

      // Display reading time if enabled
      if (options.showReadingTime) {
        const { minutes, words: _words } = readingTime(text)
        const displayedTime = i18n(cfg.locale).components.contentMeta.readingTime({
          minutes: Math.ceil(minutes),
        })
        segments.push(displayedTime)
      }

      const segmentsElements = segments.map((segment) => <span>{segment}</span>)

      return (
        <p show-comma={options.showComma} class={classNames(displayClass, "content-meta")}>
          {segmentsElements}
        </p>
      )
    } else {
      return null
    }
  }

  ContentMetadata.css = style

  return ContentMetadata
}) satisfies QuartzComponentConstructor

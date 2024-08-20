import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
// @ts-ignore
import script from "./scripts/tools.inline"

const Tools: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
	const fileRelativePath = fileData.filePath
	return (
		<ul class="tools">
			<li>
				<a href={`https://github.com/PhDoanh/doanhanma/edit/v4/${fileRelativePath}`} class={classNames(displayClass, "external", "tool-btn")} target={"_blank"}>
					<i class="ri-file-edit-line"></i> Sửa bài viết
				</a>
			</li>
			<li>
				<a href={`https://github.com/PhDoanh/doanhanma/blame/v4/${fileRelativePath}`} class={classNames(displayClass, "external", "tool-btn")} target={"_blank"}>
					<i class="ri-history-line"></i> Lịch sử bài viết
				</a>
			</li>
			<li>
				<a href="" class={classNames(displayClass, "external", "tool-btn", "random-page-button")}>
					<i class="ri-question-line"></i> Bài viết ngẫu nhiên
				</a>
			</li>
		</ul>
	)
}

Tools.css = `
.tools {
	flex-wrap: wrap;
    justify-self: end;
    column-gap: 1rem;
    padding-left: 0;
    list-style: none;
    display: flex;
}

.tools > li {
    white-space: nowrap;
    overflow-wrap: normal;
    margin: 0;
    display: inline-block;
}

.tools > li > a {
	font-weight: 400;
}
`

Tools.afterDOMLoaded = script

export default (() => Tools) satisfies QuartzComponentConstructor
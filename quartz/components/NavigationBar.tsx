import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FullSlug, SimpleSlug, resolveRelative } from "../util/path"
import style from "./styles/navbar.scss"

const NavigationBar: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
	return (
		<nav class="nav container">
			<div class="nav__data">
				<div class="nav__toggle" id="nav-toggle">
					<i class="ri-menu-line nav__burger"></i>
					<i class="ri-close-line nav__close"></i>
				</div>
			</div>
			
			<div class="nav__menu" id="nav-menu">
				<ul class="nav__list">

					<li class="dropdown__item">
						<div class="nav__link">
							Lập trình <i class="ri-arrow-down-s-line dropdown__arrow"></i>
						</div>

						<ul class="dropdown__menu">
							<li class="dropdown__subitem">
								<div class="dropdown__link">
									<i class="ri-code-s-slash-line"></i> Ngôn ngữ lập trình <i class="ri-add-line dropdown__add"></i>
								</div>

								<ul class="dropdown__submenu">
									<li>
										<a href={resolveRelative(fileData.slug!, "tags/cpp" as FullSlug)} class="dropdown__sublink">
											<i class="ri-terminal-line"></i> C/C++
										</a>
									</li>

									<li>
										<a href={resolveRelative(fileData.slug!, "#" as FullSlug)} class="dropdown__sublink">
											<i class="ri-terminal-line"></i> Python
										</a>
									</li>

									<li>
										<a href={resolveRelative(fileData.slug!, "tags/dsa" as FullSlug)} class="dropdown__sublink">
											<i class="ri-terminal-line"></i> Javascript
										</a>
									</li>

									<li>
										<a href={resolveRelative(fileData.slug!, "#" as FullSlug)} class="dropdown__sublink">
											<i class="ri-terminal-line"></i> HTML, CSS, JavaScript (chưa có)
										</a>
									</li>
								</ul>
							</li>

							<li class="dropdown__subitem">
								<div class="dropdown__link">
									<i class="ri-translate-2"></i> Ngoại ngữ <i class="ri-add-line dropdown__add"></i>
								</div>

								<ul class="dropdown__submenu">
									<li>
										<a href={resolveRelative(fileData.slug!, "tags/japanese" as FullSlug)} class="dropdown__sublink">
											<i class="ri-global-line"></i> Tiếng Nhật
										</a>
									</li>

									<li>
										<a href={resolveRelative(fileData.slug!, "#" as FullSlug)} class="dropdown__sublink">
											<i class="ri-global-line"></i> Tiếng Anh (chưa có)
										</a>
									</li>
								</ul>
							</li>

							<li class="dropdown__subitem">
								<div class="dropdown__link">
									<i class="ri-functions"></i> Toán học <i class="ri-add-line dropdown__add"></i>
								</div>

								<ul class="dropdown__submenu">
									<li>
										<a href={resolveRelative(fileData.slug!, "tags/caculus" as FullSlug)} class="dropdown__sublink">
											<i class="ri-pencil-ruler-2-line"></i> Giải tích
										</a>
									</li>

									<li>
										<a href={resolveRelative(fileData.slug!, "#" as FullSlug)} class="dropdown__sublink">
											<i class="ri-pencil-ruler-2-line"></i> Toán rời rạc (chưa có)
										</a>
									</li>
								</ul>
							</li>

							<li>
								<a href={resolveRelative(fileData.slug!, "articles/knowledge/" as SimpleSlug)} class="dropdown__link">
									<i class="ri-more-2-fill"></i> Xem thêm
								</a>
							</li>
						</ul>
					</li>

					<li class="dropdown__item">
						<div class="nav__link">
							日本語 <i class="ri-arrow-down-s-line dropdown__arrow"></i>
						</div>

						<ul class="dropdown__menu">
							<li>
								<a href={resolveRelative(fileData.slug!, "#" as FullSlug)} class="dropdown__link">
									<i class="ri-file-excel-2-line"></i> Word, PowerPoint, Excel, ... (chưa có)
								</a>
							</li>

							<li>
								<a href={resolveRelative(fileData.slug!, "#" as FullSlug)} class="dropdown__link">
									<i class="ri-windows-fill"></i> Window 10, 11 (chưa có)
								</a>
							</li>

							<li>
								<a href={resolveRelative(fileData.slug!, "#" as FullSlug)} class="dropdown__link">
									<i class="ri-github-fill"></i> Git, Github (chưa có)
								</a>
							</li>

							<li>
								<a href={resolveRelative(fileData.slug!, "articles/tutorial/" as SimpleSlug)} class="dropdown__link">
									<i class="ri-more-2-fill"></i> Đọc thêm
								</a>
							</li>
						</ul>
					</li>

					<li class="dropdown__item">
						<div class="nav__link">
							Khóa học <i class="ri-arrow-down-s-line dropdown__arrow"></i>
						</div>

						<ul class="dropdown__menu">
							<li>
								<a href={resolveRelative(fileData.slug!, "#" as FullSlug)} class="dropdown__link">
									<i class="ri-html5-fill"></i> Làm web (chưa có)
								</a>
							</li>

							<li>
								<a href={resolveRelative(fileData.slug!, "#" as FullSlug)} class="dropdown__link">
									<i class="ri-bug-fill"></i> Kiểm thử (chưa có)
								</a>
							</li>

							<li>
								<a href={resolveRelative(fileData.slug!, "#" as FullSlug)} class="dropdown__link">
									<i class="ri-gamepad-line"></i> Làm game (chưa có)
								</a>
							</li>

							<li>
								<a href={resolveRelative(fileData.slug!, "articles/course/" as SimpleSlug)} class="dropdown__link">
									<i class="ri-more-2-fill"></i> Khám phá thêm
								</a>
							</li>
						</ul>
					</li>

					<li class="dropdown__item">
						<div class="nav__link">
							Dịch vụ <i class="ri-arrow-down-s-line dropdown__arrow"></i>
						</div>

						<ul class="dropdown__menu">
							<li>
								<a href={resolveRelative(fileData.slug!, "#" as FullSlug)} class="dropdown__link">
									<i class="ri-tools-fill"></i> Sửa lỗi máy tính từ xa (chưa có)
								</a>
							</li>

							<li>
								<a href={resolveRelative(fileData.slug!, "#" as FullSlug)} class="dropdown__link">
									<i class="ri-quill-pen-line"></i> Thiết kế logo (chưa có)
								</a>
							</li>

							<li>
								<a href={resolveRelative(fileData.slug!, "articles/service/" as SimpleSlug)} class="dropdown__link">
									<i class="ri-more-2-fill"></i> Tìm hiểu thêm
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</nav>
	)
}

NavigationBar.css = style

NavigationBar.afterDOMLoaded = `
const showMenu = (toggleId, navId) =>{
	const toggle = document.getElementById(toggleId), nav = document.getElementById(navId)
	toggle.addEventListener('click', () =>{
		nav.classList.toggle('show-menu')
		toggle.classList.toggle('show-icon')
	})
}
showMenu('nav-toggle','nav-menu')
`

export default (() => NavigationBar) satisfies QuartzComponentConstructor

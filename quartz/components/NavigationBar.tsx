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
					{/* materials */}
					<li class="dropdown__item">
						<div class="nav__link">
							Tài liệu <i class="ri-arrow-down-s-line dropdown__arrow"></i>
						</div>

						<ul class="dropdown__menu">
							<li>
								<a href={resolveRelative(fileData.slug!, "tags/coding" as SimpleSlug)} class="dropdown__link">
									<i class="ri-code-s-slash-fill"></i> Lập trình
								</a>
							</li>

							<li>
								<a href={resolveRelative(fileData.slug!, "tags/japanese" as SimpleSlug)} class="dropdown__link">
									<i class="ri-translate"></i> Tiếng Nhật
								</a>
							</li>

							<li>
								<a href={resolveRelative(fileData.slug!, "tags/school" as SimpleSlug)} class="dropdown__link">
									<i class="ri-graduation-cap-line"></i> THPT - Đại học
								</a>
							</li>

							<li>
								<a href={resolveRelative(fileData.slug!, "materials/" as SimpleSlug)} class="dropdown__link">
									<i class="ri-more-2-fill"></i> Xem thêm
								</a>
							</li>
						</ul>
					</li>

					{/* products */}
					<li class="dropdown__item">
						<div class="nav__link">
							Sản phẩm <i class="ri-arrow-down-s-line dropdown__arrow"></i>
						</div>

						<ul class="dropdown__menu">
							<li>
								<a href={resolveRelative(fileData.slug!, "products/fixyourpc" as FullSlug)} class="dropdown__link">
									<i class="ri-gamepad-line"></i> Fix Your PC (game)
								</a>
							</li>

							<li>
								<a href={resolveRelative(fileData.slug!, "products/" as SimpleSlug)} class="dropdown__link">
									<i class="ri-more-2-fill"></i> Xem thêm
								</a>
							</li>
						</ul>
					</li>

					{/* services */}
					<li class="dropdown__item">
						<div class="nav__link">
							Dịch vụ <i class="ri-arrow-down-s-line dropdown__arrow"></i>
						</div>

						<ul class="dropdown__menu">
							{/* <li>
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
							</li> */}

							<li>
								<a href={resolveRelative(fileData.slug!, "services/" as SimpleSlug)} class="dropdown__link">
									<i class="ri-more-2-fill"></i> Xem thêm
								</a>
							</li>
						</ul>
					</li>

					{/* jobs */}
					<li class="dropdown__item">
						<div class="nav__link">
							Việc làm <i class="ri-arrow-down-s-line dropdown__arrow"></i>
						</div>

						<ul class="dropdown__menu">
							{/* <li>
								<a href={resolveRelative(fileData.slug!, "#" as FullSlug)} class="dropdown__link">
									<i class="ri-tools-fill"></i> Lập trình phần mềm nhúng
								</a>
							</li>

							<li>
								<a href={resolveRelative(fileData.slug!, "#" as FullSlug)} class="dropdown__link">
									<i class="ri-quill-pen-line"></i> kiểm thử viên
								</a>
							</li>

							<li>
								<a href={resolveRelative(fileData.slug!, "#" as FullSlug)} class="dropdown__link">
									<i class="ri-quill-pen-line"></i> viết blog
								</a>
							</li> */}

							<li>
								<a href={resolveRelative(fileData.slug!, "jobs/" as SimpleSlug)} class="dropdown__link">
									<i class="ri-more-2-fill"></i> Xem thêm
								</a>
							</li>
						</ul>
					</li>

					{/* courses */}
					<li class="dropdown__item">
						<div class="nav__link">
							Khóa học <i class="ri-arrow-down-s-line dropdown__arrow"></i>
						</div>

						<ul class="dropdown__menu">
							{/* <li>
								<a href={resolveRelative(fileData.slug!, "#" as FullSlug)} class="dropdown__link">
									<i class="ri-tools-fill"></i> Lập trình phần mềm nhúng
								</a>
							</li>

							<li>
								<a href={resolveRelative(fileData.slug!, "#" as FullSlug)} class="dropdown__link">
									<i class="ri-quill-pen-line"></i> kiểm thử viên
								</a>
							</li>

							<li>
								<a href={resolveRelative(fileData.slug!, "#" as FullSlug)} class="dropdown__link">
									<i class="ri-quill-pen-line"></i> viết blog
								</a>
							</li> */}

							<li>
								<a href={resolveRelative(fileData.slug!, "courses/" as SimpleSlug)} class="dropdown__link">
									<i class="ri-more-2-fill"></i> Xem thêm
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

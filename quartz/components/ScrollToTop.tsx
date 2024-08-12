import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const ScrollToTop: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
	return <div class={classNames(displayClass)}><div id="progress"><span id="progress-value"><i class="ri-arrow-up-line"></i></span></div></div>
}

ScrollToTop.css = `
#progress {
	background-color: var(--tertiary);
	position: fixed;
	bottom: 15px;
	right: 15px;
	height: 60px;
	width: 60px;
	display: none;
	place-items: center;
	border-radius: 50%;
	box-shadow: 0 0 10px black;
	cursor: pointer;
	z-index: 1;
}

#progress-value {
	display: block;
	height: calc(100% - 15px);
	width: calc(100% - 15px);
	background-color: white;
	place-items: center;
	font-size: 25px;
	border-radius: 50%;
	color: #001a2e;
	display: grid;
	box-shadow: 0 0 5px #000 inset;
}
`

ScrollToTop.afterDOMLoaded = `
let calcScrollValue = () => {
	let scrollProgress = document.getElementById("progress");
	let progressValue = document.getElementById("progress-value");
	let pos = document.documentElement.scrollTop;
	let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	let scrollValue = Math.round((pos * 100) / calcHeight);
	if (pos > 100) {
		scrollProgress.style.display = "grid";
	}
	else {
		scrollProgress.style.display = "none";
	}
	scrollProgress.addEventListener("click", () => {
		document.documentElement.scrollTop = 0;
	});
	scrollProgress.style.background = \`conic-gradient(var(--secondary) \${scrollValue}%, #d7d7d7 \${scrollValue}%)\`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
`

export default (() => ScrollToTop) satisfies QuartzComponentConstructor

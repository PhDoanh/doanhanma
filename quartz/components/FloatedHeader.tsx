import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const FloatedHeader: QuartzComponent = ({ children }: QuartzComponentProps) => {
	return children.length > 0 ? <header id="floated-header">{children}</header> : null
}

FloatedHeader.css = `
#floated-header {
	z-index: 1;
	background: linear-gradient(45deg,var(--secondary) 40%, var(--tertiary),var(--secondary));
	flex-direction: row;
	align-items: center;
	gap: 0rem;
	padding: 0 4rem;
	display: flex;
	position: sticky;
	top: 0;
	left: 0;
	right: 0;
	box-shadow: 0 0 .2rem #0000001a, 0 .2rem .4rem #0003;
	transition: 0.25s;
	height: 60px;
}

#floated-header h1 {
	margin: 0;
	flex: auto;
}

@media (max-width: 600px) {
	#floated-header {
		padding: 0 0.5rem;
	}
}
`

FloatedHeader.afterDOMLoaded = `
let lastScrollTop = 0;
let floatedHeader = document.getElementById("floated-header");
window.addEventListener("scroll", () => {
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if (scrollTop > lastScrollTop) {
		floatedHeader.style.top = "-60px";
	} else {
		floatedHeader.style.top = "0";
	}
	lastScrollTop = scrollTop;
});
`

export default (() => FloatedHeader) satisfies QuartzComponentConstructor

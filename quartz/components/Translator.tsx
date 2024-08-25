import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Translator: QuartzComponent = ({ }: QuartzComponentProps) => {
	return <div id="google_translate_element"></div>
}

Translator.css = ``

Translator.afterDOMLoaded = `
function loadGoogleTranslate() {
	const script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';	
	document.body.appendChild(script);
}

loadGoogleTranslate();

function googleTranslateElementInit() {
	new google.translate.TranslateElement({pageLanguage: 'vi'}, 'google_translate_element');
}
`

export default (() => Translator) satisfies QuartzComponentConstructor

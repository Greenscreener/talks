const template = document.createElement("template");
template.innerHTML = `
<style>
    svg > * {
        fill: currentColor;
    }
    svg {
        height: 2em;
    }
    #titleText, #subtitleText {
        font-family: 'Fira Code';
        font-weight: bold;
        position: absolute;
        display: block;
        margin-bottom: -0.3em;
    }
    #titlePlaceholder {
        font-family: 'Fira Code';
        font-weight: bold;
    }
    #titlePlaceholder {
        margin-right: -1.15em;
        visibility: hidden;
    }
    #titleText {
        font-size: 1em;
        right: 1.1em;
        bottom: 1.181em;
        line-height: initial;
    }
    #subtitleText {
        font-size: 0.6em;
        top: 1.583333333em;
        right: 3.4em;
        line-height: initial;
    }
    #wrapper {
        position: relative;
        top: 0;
        left: 0;
        display: inline-block;
        margin-bottom: -0.3em;
        height: 2em;
        white-space: nowrap;
    }
    :host {
        display: inline-block;
        vertical-align: top;
        margin-bottom: -0.3em;
        height: 2em;
    }
</style>
<link rel="stylesheet" src="https://unpkg.com/firacode@1.206.0/distr/fira_code.css">
<span id="wrapper">
<span id="titlePlaceholder"></span>
    <svg id="svg8" version="1.1" viewBox="0 0 22.452 22.454" xmlns="http://www.w3.org/2000/svg">
        <path id="circle0" d="m0 11.154c2e-6 4.5377 2.7273 8.7046 6.9297 10.445 4.1923 1.7365 9.0257 0.77508 12.234-2.4336 3.2087-3.2087 4.1701-8.042 2.4336-12.234-1.7405-4.2019-5.9017-6.9316-10.439-6.9316v2.0176c3.7275 0 7.1537 2.2513 8.5762 5.6855 1.4265 3.4438 0.63967 7.3994-1.9961 10.035-2.6358 2.6358-6.5914 3.4226-10.035 1.9961-3.4337-1.4223-5.6855-4.8525-5.6855-8.5801z" style="color-rendering:auto;dominant-baseline:auto;font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;image-rendering:auto;isolation:auto;mix-blend-mode:normal;paint-order:markers fill stroke;shape-padding:0;shape-rendering:auto;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"/>
        <path id="circle1" d="m2.4473 11.16c1e-6 3.5212 2.1257 6.7013 5.3789 8.0488 3.2532 1.3475 7.0042 0.60122 9.4941-1.8887 2.4899-2.4899 3.2362-6.2409 1.8887-9.4941-1.3475-3.2532-4.5276-5.377-8.0488-5.377v1.5645c2.8925 0 5.4946 1.7398 6.6016 4.4121 1.1069 2.6724 0.4965 5.7418-1.5488 7.7871-2.0453 2.0453-5.1148 2.6558-7.7871 1.5488-2.6724-1.1069-4.4121-3.709-4.4121-6.6016z" style="color-rendering:auto;dominant-baseline:auto;font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;image-rendering:auto;isolation:auto;mix-blend-mode:normal;paint-order:markers fill stroke;shape-padding:0;shape-rendering:auto;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"/>
        <path id="circle2" d="m4.4277 11.16c1e-6 2.7208 1.6426 5.1776 4.1562 6.2188s5.412 0.4649 7.3359-1.459c1.9239-1.9239 2.5002-4.8223 1.459-7.3359-1.0412-2.5137-3.498-4.1543-6.2188-4.1543v1.209c2.235 0 4.2463 1.3433 5.1016 3.4082 0.8553 2.0649 0.38312 4.4372-1.1973 6.0176-1.5804 1.5804-3.9527 2.0526-6.0176 1.1973-2.0649-0.85529-3.4082-2.8666-3.4082-5.1016z" style="color-rendering:auto;dominant-baseline:auto;font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;image-rendering:auto;isolation:auto;mix-blend-mode:normal;paint-order:markers fill stroke;shape-padding:0;shape-rendering:auto;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"/>
        <path id="circle3" d="m6.0449 11.16c-2e-6 2.0674 1.2482 3.9335 3.1582 4.7246 1.91 0.79114 4.1104 0.35443 5.5723-1.1074 1.4618-1.4618 1.9005-3.6642 1.1094-5.5742-0.79114-1.91-2.6572-3.1582-4.7246-3.1582v0.91992c1.6982-1e-6 3.2251 1.0209 3.875 2.5898 0.64989 1.569 0.29263 3.3714-0.9082 4.5723-1.2008 1.2008-3.0033 1.56-4.5723 0.91015-1.569-0.64988-2.5898-2.1787-2.5898-3.877z" style="color-rendering:auto;dominant-baseline:auto;font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;image-rendering:auto;isolation:auto;mix-blend-mode:normal;paint-order:markers fill stroke;shape-padding:0;shape-rendering:auto;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"/>
        <path id="circle4" d="m7.3789 11.16c-1e-6 1.5283 0.92204 2.9073 2.334 3.4922 1.4119 0.58485 3.0404 0.2623 4.1211-0.81836 1.0807-1.0807 1.4032-2.7091 0.81836-4.1211-0.58485-1.4119-1.9639-2.334-3.4922-2.334v0.67969c1.2554 0 2.3848 0.75422 2.8652 1.9141s0.21583 2.4932-0.67188 3.3809c-0.88771 0.88771-2.221 1.1523-3.3809 0.67188-1.1598-0.48042-1.9141-1.6098-1.9141-2.8652z" style="color-rendering:auto;dominant-baseline:auto;font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;image-rendering:auto;isolation:auto;mix-blend-mode:normal;paint-order:markers fill stroke;shape-padding:0;shape-rendering:auto;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"/>
        <path id="circle5" d="m8.4707 11.16c0 1.0872 0.6557 2.0683 1.6602 2.4844s2.1609 0.18675 2.9297-0.58203c0.76878-0.76878 1-1.9272 0.58398-2.9316-0.41606-1.0045-1.3972-1.6602-2.4844-1.6602v0.48242c0.89309 0 1.6953 0.53817 2.0371 1.3633s0.153 1.7728-0.47852 2.4043c-0.63151 0.63151-1.5792 0.82029-2.4043 0.47852-0.82511-0.34177-1.3613-1.146-1.3613-2.0391z" style="color-rendering:auto;dominant-baseline:auto;font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;image-rendering:auto;isolation:auto;mix-blend-mode:normal;paint-order:markers fill stroke;shape-padding:0;shape-rendering:auto;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"/>
        <path id="circle6" d="m9.2383 11.16c0 0.77684 0.46784 1.4781 1.1855 1.7754 0.7177 0.29728 1.5444 0.13329 2.0938-0.41602s0.71525-1.378 0.41797-2.0957-0.99856-1.1855-1.7754-1.1855v0.3457c0.63813 0 1.2109 0.3831 1.4551 0.97266 0.2442 0.58956 0.10943 1.2675-0.3418 1.7188s-1.1272 0.586-1.7168 0.3418-0.97266-0.8189-0.97266-1.457z" style="color-rendering:auto;dominant-baseline:auto;font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;image-rendering:auto;isolation:auto;mix-blend-mode:normal;paint-order:markers fill stroke;shape-padding:0;shape-rendering:auto;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"/>
    </svg>
    <span id="titleText"></span>
    <span id="subtitleText"></span>
</span>
`;

class PatekLogo extends HTMLElement {
	calculateCircles() {
		const inputValue = typeof this.attributes.title !== "undefined" && this.attributes.title.value !== "" ? this.attributes.title.value : "Pátek";

		const opacities = PatekLogo.calculateBinary(inputValue);

		for (let i = 0; i < 7; i++) {
			this.shadow.getElementById("circle" + i.toString()).style.fillOpacity = opacities[i];
		}
	}

	static calculateBinary(inputValue) {
		/* eslint no-control-regex: "off", "unicorn/no-hex-escape": off  */
		const normalizedInputValue = inputValue.normalize("NFD").replace(/[^\x00-\x7F]/g, "");

		let outputChar = String.fromCharCode(0);
		for (let i = 0; i < normalizedInputValue.length; i++) {
			outputChar ^= normalizedInputValue[i].charCodeAt(0);
		}

		const outputString = outputChar.toString(2);

		return "0".repeat(7 - outputString.length) + outputString;
	}

	constructor() {
		super();
		this.shadow = this.attachShadow({mode: "open"});
		const clone = template.content.cloneNode(true);
		clone.getElementById("titlePlaceholder").innerText = typeof this.attributes.title !== "undefined" ? this.attributes.title.value : "Pátek";
		clone.getElementById("titleText").innerText = typeof this.attributes.title !== "undefined" ? this.attributes.title.value : "Pátek";
		clone.getElementById("subtitleText").innerText = typeof this.attributes.subtitle !== "undefined" ? this.attributes.subtitle.value : "";
		this.shadow.append(clone);
		this.calculateCircles();
	}

	static get observedAttributes() {
		return ["title", "subtitle"];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === "title") {
			this.calculateCircles();
			this.shadow.getElementById("titleText").innerText = newValue || "Pátek";
			this.shadow.getElementById("titlePlaceholder").innerText = newValue || "Pátek";
		} else if (name === "subtitle") {
			this.shadow.getElementById("subtitleText").innerText = newValue;
		}
	}
}
customElements.define("patek-logo", PatekLogo);

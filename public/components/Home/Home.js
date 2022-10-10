import data from "./data.js";
import "./components/indexCom.js";
import { Attributes } from "./components/Stories/Stories.js";
import { Info } from "./components/Suggestions/Suggestions.js";
export class Home extends HTMLElement {
    constructor() {
        super();
        this.header = [];
        this.storie = [];
        this.suggestions = [];
        this.attachShadow({ mode: "open" });
        const headBar = this.ownerDocument.createElement("my-header");
        this.header.push(headBar);
        const storieBar = this.ownerDocument.createElement("section");
        console.log(storieBar);
        data.forEach((storie) => {
            const stories = this.ownerDocument.createElement("my-storie");
            stories.setAttribute(Attributes.pp, storie.pp);
            stories.setAttribute(Attributes.username, storie.username);
            this.storie.push(stories);
        });
        data.forEach((userSugget) => {
            const userSuggets = this.ownerDocument.createElement("my-info");
            userSuggets.setAttribute(Info.minipp, userSugget.minipp);
            userSuggets.setAttribute(Info.username, userSugget.username);
            userSuggets.setAttribute(Info.followed, userSugget.followed);
            this.suggestions.push(userSuggets);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            `;
            this.header.forEach((header) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(header);
            });
            this.storie.forEach((storie) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(storie);
            });
            this.suggestions.forEach((suggestions) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(suggestions);
            });
        }
    }
}
customElements.define("app-home", Home);

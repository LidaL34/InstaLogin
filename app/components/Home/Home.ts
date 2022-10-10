import data from "./data.js";

import "./components/indexCom.js";
import HeaderBar from "./components/Header/Header.js";
import StoriesU, { Attributes } from "./components/Stories/Stories.js";
import Suggestions, { Info } from "./components/Suggestions/Suggestions.js";

export class Home extends HTMLElement {
    header: HeaderBar [] = [];
    storie: StoriesU [] = [];
    suggestions: Suggestions [] = [];

    constructor(){
        super();
        this.attachShadow({mode: "open"});

        const headBar = this.ownerDocument.createElement ("my-header") as HeaderBar
        this.header.push(headBar);
       
        const storieBar = this.ownerDocument.createElement("section");
        console.log(storieBar);
        
        data.forEach ((storie) =>{
            const stories = this.ownerDocument.createElement ("my-storie") as StoriesU;
            stories.setAttribute(Attributes.pp,storie.pp);
            stories.setAttribute(Attributes.username,storie.username);

            this.storie.push(stories);
        })

        data.forEach ((userSugget) => {
            const userSuggets = this.ownerDocument.createElement ("my-info") as Suggestions;
            userSuggets.setAttribute(Info.minipp,userSugget.minipp);
            userSuggets.setAttribute(Info.username,userSugget.username);
            userSuggets.setAttribute(Info.followed,userSugget.followed);

            this.suggestions.push(userSuggets);
        })
    }

    connectedCallback(){
        this.render();
        
    }

    render(){
        if (this.shadowRoot){
            this.shadowRoot.innerHTML = `
            `;
    
            this.header.forEach((header) => {
                this.shadowRoot?.appendChild(header);
            });
            this.storie.forEach((storie) => {
                this.shadowRoot?.appendChild(storie);
            });
            this.suggestions.forEach((suggestions) => {
                this.shadowRoot?.appendChild(suggestions);
            });
        }  
    }           
}

customElements.define("app-home", Home);
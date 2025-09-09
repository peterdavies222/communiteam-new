import { LitElement, html } from 'lit'
import {anchorRoute, gotoRoute} from '../Router'
import Auth from '../Auth'
import App from '../App'

customElements.define('ct-footer', class Communiteam extends LitElement {
  constructor(){
    super()    
  }

  static get properties(){
    return {
      title: {
        type: String
      }      
    }
  }

  firstUpdated(){
    super.firstUpdated()
  }

  testHandler(){
    alert("test")
  }
  
  render(){    
    return html`
    <style>
      * {
        box-sizing: border-box;
      }
      footer {
        margin-top: 60px;
        background-color: var(--ct-midyellow);
        padding-block: 60px;
        padding-inline: var(--ct-margins);
        width: 100vw;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        border-radius: 30px 30px 0 0;
        /* box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.1); */
        border: 1px solid var(--ct-yellow);
      }
      /* .footer__logo {
        width: 277px;
        height: fit-content;
      } */
      .footer__logo img {
        width: 300px;
        max-width: 100%;
      }
      .footer__tagline {
        font-family: 'sofia-regular';
        font-size: 1rem;
        /* font-style: italic; */
        color: var(--ct-darkgrey);
        /* text-transform: uppercase; */
        margin-top: 5px;
      }
      .footer__disclaimer {
        font-family: 'sofia-regular';
        font-size: calc(12rem / 16);
        color: var(--ct-darkgrey);
      }
      @media screen and (max-width: 768px) {
        footer {
          flex-direction: column;
          align-items: flex-start;
        }
      }
    </style>
  
    <footer>
      <div class="footer__logo">
        <img src="/images/logo.svg" alt="Communiteam logo.">
        <p class="footer__tagline">Find your community. Find your team.</p>
      </div>
      <p class="footer__disclaimer">© 2025 Communiteam. All rights reserved.</p>
    </footer>
    `
  }
  
})
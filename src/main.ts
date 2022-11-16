import App from "./App.vue"
import Rollbar from "rollbar"
import { defineCustomElement } from './defineCustomElementWithStyles'

const loadApp = () => {
  customElements.define(
    'ew-tools',
    defineCustomElement(App, { data: {} })
  )
}
if (document.readyState === "complete" || document.readyState === "interactive") {
  loadApp()
} else {
  window.addEventListener("DOMContentLoaded", () => loadApp());
  window.addEventListener("load", () => loadApp());
}
class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2022
        GRANILLO SABINO MELANIE SARAHI.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);

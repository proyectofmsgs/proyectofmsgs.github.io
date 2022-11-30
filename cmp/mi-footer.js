class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2022
        Granillo Sabino Melanie Sarahi IC43M.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);

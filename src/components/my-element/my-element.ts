import { html, LitElement, unsafeCSS } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import styles from './my-element.scss?inline'

@customElement('my-element')
export class MyElement extends LitElement {
  static styles = unsafeCSS(styles)

  @property() name = 'World'

  @state() count: number = 0

  private _onClick() {
    this.count++
  }

  render() {
    return html`
      <h1>Hello, ${this.name}!</h1>
      <button @click=${this._onClick} type="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}

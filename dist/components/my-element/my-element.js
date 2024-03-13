import { LitElement, html } from "lit";
import { property, state, customElement } from "lit/decorators.js";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
let MyElement = class extends LitElement {
  constructor() {
    super(...arguments);
    this.name = "World";
    this.count = 0;
  }
  _onClick() {
    this.count++;
  }
  render() {
    return html`
      <h1>Hello, ${this.name}!</h1>
      <button @click=${this._onClick} type="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `;
  }
};
__decorateClass([
  property()
], MyElement.prototype, "name", 2);
__decorateClass([
  state()
], MyElement.prototype, "count", 2);
MyElement = __decorateClass([
  customElement("my-element")
], MyElement);
export {
  MyElement
};
//# sourceMappingURL=my-element.js.map

import { LitElement } from 'lit';
export declare class MyElement extends LitElement {
    name: string;
    count: number;
    private _onClick;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-element': MyElement;
    }
}

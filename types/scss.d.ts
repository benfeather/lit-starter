declare module '*.scss?inline' {
  import type { CSSResult} from 'lit';
  const styles: CSSResult;
  export default styles;
}

declare module '*.scss' {
  import type { CSSResult} from 'lit';
  const styles: CSSResult;
  export default styles;
}
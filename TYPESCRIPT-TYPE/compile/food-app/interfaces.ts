// オブジェクト指向型プログラミングは変更のしやすさ

// interfaceを作成する--オブジェクト
interface Scoreable {
  readonly totalScore:number;
  render(): void;
}

interface Foodable {
  element: HTMLDivElement;
  clickEventHandler(): void;
}

interface Foodsable {
  elements: NodeListOf<HTMLDivElement>;
  readonly activeElements: HTMLDivElement[];
  readonly activeElementsScore: number[];
}
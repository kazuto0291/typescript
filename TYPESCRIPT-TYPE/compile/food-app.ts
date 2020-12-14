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

class Score implements Scoreable {
  // 何回もオブジェクトを生成するとメモリを食うのでシングルトーンパターンを使って一回のみしか生成しないようにする。
  private static instance: Score;
  get totalScore() {
    // インスタンス化
    const foods = Foods.getInstance();
    return foods.activeElementsScore.reduce((total, score) => total + score, 0)
  }
  render() {
    document.querySelector('.score__number')!.textContent = String(this.totalScore)
  }
  // 初期化
  private constructor() {}
  static getInstance() {
    if(!Score.getInstance) {
      Score.instance = new Score();
    }
    return Score.instance;
  }
}
class Food implements Foodable {
  constructor(public element: HTMLDivElement) {
    element.addEventListener('click',this.clickEventHandler.bind(this));
  }
  clickEventHandler() {
    this.element.classList.toggle('food--active');
    const score = Score.getInstance();
    score.render();
  }
}
class Foods implements Foodsable{
  // 何回もオブジェクトを生成するとメモリを食うのでシングルトーンパターンをつかう
  private static instance: Foods;
  // index.htmlのclassがfoodの要素をすべて取得する
  elements = document.querySelectorAll<HTMLDivElement>('.food');
  private _activeElements: HTMLDivElement[] = [];
  private _activeElementsScore:number[] = [];
  get activeElements() {
    this._activeElements = [];
    this.elements.forEach(element => {
      if (element.classList.contains('food--active')) {
        this._activeElements.push(element)
      }
    })
    return this._activeElements;
  }
  get activeElementsScore() {
    this._activeElementsScore = [];
    this.activeElements.forEach(element => {
      const foodScore = element.querySelector('.food__score');
      if(foodScore) {
        this._activeElementsScore.push(Number(foodScore.textContent))//number型にcastする
      }
    })
    return this._activeElementsScore;
  }
  private constructor() {
    this.elements.forEach(element => {
      // Foodsは一覧取得のみで、取得後の処理はFoodで行うことでクラスの分離できる
      new Food(element)
    })
  }
  // 常にひとつのFoodsを生成するための処理
  static getInstance() {
    if (!Foods.instance) {
      Foods.instance = new Foods();
    }
    return Foods.instance;
  }
}


const foods = Foods.getInstance();
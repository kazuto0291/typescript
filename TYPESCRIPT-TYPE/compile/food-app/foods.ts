import { Foodsable } from "./interfaces.js"
import { Food } from "./food.js"
export class Foods implements Foodsable{
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
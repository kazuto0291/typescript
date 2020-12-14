import { Scoreable } from "./interfaces.js"
import { Foods } from "./foods.js"

export class Score implements Scoreable {
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
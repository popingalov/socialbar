import { IIngredient } from 'types/ingredient';
import mapAndChcangeCocktails from '../routes/cocktails/mapNewCocktails';
//
export interface ICallbackObj {
  [key: string]: any;
  cocktails: any;
  trigger: boolean;
  nameFunc: string;
  ingredient: IIngredient | null;
  reqArr: any[];
}

class CallbackObj implements ICallbackObj {
  [key: string]: any;
  cocktails: any;
  trigger: boolean;
  nameFunc: string;
  ingredient: IIngredient | null;
  reqArr: any[];
  functionOfline: any;

  constructor() {
    this.cocktails = mapAndChcangeCocktails;
    this.trigger = false;
    this.nameFunc = 'cocktails';
    this.ingredient = null;
    this.reqArr = [];
    this.functionOfline = () => {
      console.log(this.reqArr);
      console.log(this);
      this.reqArr.forEach((el: Request) => {
        console.log(el);
        fetch(el);
      });
      this.reqArr = [];
    };
  }
}

export const callbackObj = new CallbackObj();

import { IIngredient } from 'types/ingredient';
import changeIngList from '../routes/cocktails/changeIngList';
// import changeIngList from '../routes/cocktails/remove/removeIng';
//
// export interface ICallbackObj {
//   [key: string]: any;
//   cocktails: any;
//   trigger: boolean;
//   nameFunc: string;
//   ingredient: IIngredient | null;
//   reqArr: any[];
//   method: string;
// }
// implements ICallbackObj
class CallbackObj {
  [key: string]: any;
  cocktails: any;
  trigger: boolean;
  nameFunc: string;
  ingredient: IIngredient | null;
  reqArr: any[];
  method: string;
  functionOfline: any;

  constructor() {
    this.addIngToList = changeIngList;
    this.removeIngToList = changeIngList;
    this.trigger = false;
    this.nameFunc = 'cocktails';
    this.ingredient = null;
    this.reqArr = [];
    this.method = 'GET';
    this.functionOfline = () => {
      this.reqArr.forEach((el: Request) => {
        fetch(el);
      });
      this.reqArr = [];
    };
  }
}

export const callbackObj = new CallbackObj();

import { IIngredient } from 'types/ingredient';
import changeIngList from '../routes/cocktails/changeIngList';
class CallbackObj {
  [key: string]: any;
  cocktails: any;
  trigger: boolean;
  nameFunc: string;
  ingredient: IIngredient | null;
  method: string;
  internetSpeed: number;

  constructor() {
    this.addIngToList = changeIngList;
    this.removeIngToList = changeIngList;
    this.trigger = false;
    this.nameFunc = 'cocktails';
    this.ingredient = null;
    this.method = 'GET';
    this.internetSpeed = 100;
  }
}

export const callbackObj = new CallbackObj();

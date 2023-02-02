import mapAndChcangeCocktails from '../routes/cocktails/mapNewCocktails';

class CallbackObj implements ICallbackObj {
  [key: string]: any;
  cocktails: any;
  trigger: boolean;
  nameFunc: string;
  id: string | null;
  reqArr: any[];
  functionOfline: any;

  constructor() {
    this.cocktails = mapAndChcangeCocktails;
    this.trigger = false;
    this.nameFunc = 'cocktails';
    this.id = null;
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
export interface ICallbackObj {
  [key: string]: any;
  cocktails: any;
  trigger: boolean;
  nameFunc: string;
  id: string | null;
  reqArr: any[];
}
// function myLastTry() {
//   console.log('my try', callbackObj);

//   callbackObj.reqArr.forEach((el: Request) => {
//     console.log(el);

//     fetch(el);
//   });
//   callbackObj.reqArr = [];
// }
// export const callbackObj: ICallbackObj = {
//   cocktails: mapAndChcangeCocktails,
//   trigger: false,
//   nameFunc: 'cocktails',
//   id: null,
//   reqArr: [],
// };

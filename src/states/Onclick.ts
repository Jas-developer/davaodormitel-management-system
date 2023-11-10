import { action, computed, makeAutoObservable, observable } from "mobx";

export class Clicks {
  login: boolean = false;

  constructor() {
    makeAutoObservable(this, {
      login: observable,
      LoginStatus: computed,
      OnClick: action,
      LogOut: action,
    });
  }

  get LoginStatus() {
    return this.login;
  }

  OnClick(param: boolean) {
    this.login = param;
  }
  LogOut(param: boolean) {
    this.login = param;
  }
}

export const click = new Clicks();

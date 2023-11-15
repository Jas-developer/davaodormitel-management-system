import { makeAutoObservable } from "mobx";
import { BorderType, FORMTYPE } from "../types/types";
import axios from "axios";

export class DataManager {
  data: BorderType[] | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  // Getter for data
  get getData() {
    return this.data;
  }

  // Action method for fetching data
  fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/borders");
      const result: BorderType[] = response.data;

      // Update the observable data
      this.data = result;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // sending a data using axios
  sendData = async (formData: FORMTYPE) => {
    try {
      const res = await axios.post("http://localhost:5000/borders", formData);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
}

export const BorderData = new DataManager();

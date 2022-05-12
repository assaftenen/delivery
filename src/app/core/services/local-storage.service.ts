import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {

  /**
   * Sets item in local storage
   *
   * @param {string} key
   * @param {unknown} value
   */
  setItem(key: string, value: unknown) : void{
    try {
      localStorage.setItem(
        `${key}`,
        JSON.stringify(value)
      );
    } catch (error) {
      localStorage.setItem(`${key}`, value as string);
    }
  }

  /**
   * Gets item from local storage
   * A Static method
   * @param {string} key
   * @return {*}  {unknown}
   */
  getItem(key: string): unknown {
    const value = localStorage.getItem(`${key}`);
    try {
      return JSON.parse(value as string);
    } catch (e) {
        // todo Assaf add logger service
      return value;
    }
  }

  /**
   * Removes item from local storage
   * @param {string} key
   */
  removeItem(key: string): void {
    localStorage.removeItem(`${key}`);
  }
}

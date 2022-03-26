import mkdirp = require('mkdirp');
import fs = require('fs');

/**
 * Contains all the utilities like date, sorting
 *
 */
export class CommonUtils {
  private static instance: CommonUtils;

  /**
     * private constructor
     */
  private constructor() {}

  /**
     * get instance of class
     */
  public static get Instance() {
    return this.instance || (this.instance = new this());
  }

  /**
     * Create directory if not already present
     * the directory will be created to the path realative to root folder
     * @param dir : the directory to be created
     */
  public createDirectory(dir: string) {
    mkdirp.sync(dir);
  }

  /**
     * Change filename
     * @param oldFilenameWithPath
     * @param newFilenameWithPath
     */
  public renameFile(oldPath: string, newPath: string) {
    fs.renameSync(oldPath, newPath);
  }

  /**
     * return a random number in range
     * @return - promise that resolves to random number between min and max value
     */
  public getRandomNumberInRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  /**
     * return a random item from the array
     * @param arr - Array
     */
  public getRandomItemFromList(arr: any[]) {
    const length = arr.length;
    const index = this.getRandomNumberInRange(0, length - 1);
    return arr[index];
  }
}

/* istanbul ignore file */
import { configure, getLogger } from 'log4js';
import mkdirp = require('mkdirp');

const logDir = './logs';
const logFileName='testExecutionLog';

export class Logger {
  private static instance: Logger;
  /**
   * private constructor
   */
  private constructor() {
    this.init();
  }
  /**
   * get instance of class
   */
  public static get Instance() {
    return this.instance || (this.instance = new this());
  }

  public init() {
    mkdirp.sync('logs');
  }

  public log(type): any {
    configure({
      appenders: {
        console: {
          type: 'console'
        },

        file: {
          type: 'file',
          filename: `${logDir}/${logFileName}.log`
        }
      },
      categories: {
        default: { appenders: ['console'], level: 'DEBUG' },
        file: { appenders: ['console', 'file'], level: 'DEBUG' }
      }
    });

    const logger = getLogger(type);
    return logger;
  }
}

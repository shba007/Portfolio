export default class Typewriter {
  private taskQueue: any[] = [];
  constructor(private elem: HTMLElement) {
    elem.innerHTML = '';
  }
  // Private Function
  private PAUSE = (time: number) => {
    // console.log('paused for', time);
    return new Promise((resolve) => setTimeout(resolve, time));
  };
  private TYPE = (str: string, speed: number) => {
    const string = str.split('');
    function getSpeed(speed: number) {
      // WPM (Word Per Minute) to MS (Microsecond) convert
      const min = (60 / ((speed - 5) * 5)) * 1000;
      const max = (60 / ((speed + 5) * 5)) * 1000;
      return (max - min) * Math.random() + min;
    }
    let currentTask = Promise.resolve([]);
    string.forEach((char) => {
      currentTask = currentTask.then(() => {
        this.elem.innerHTML += char; // console.log(char);
        return new Promise((resolve) =>
          setTimeout(resolve, getSpeed(speed))
        ).then();
      });
    });

    return currentTask;
  };
  private MARKUP = (str: string) => {
    let currentTask = Promise.resolve([]);
    currentTask = currentTask.then(() => {
      this.elem.innerHTML += str; // console.log(`${str} Markup`);
      return Promise.resolve().then();
    });
    return currentTask;
  };
  private DELETE = (numOfChar: number, speed: number) => {
    function getSpeed(speed: number) {
      // WPM (Word Per Minute) to MS (Microsecond) convert
      const min = (60 / ((speed - 5) * 5)) * 1000;
      const max = (60 / ((speed + 5) * 5)) * 1000;
      return (max - min) * Math.random() + min;
    }
    let currentTask = Promise.resolve([]);
    for (let i = 0; i < numOfChar; i++) {
      currentTask = currentTask.then(() => {
        this.elem.innerHTML = this.elem.innerHTML.slice(0, -1); //console.log('Deleted');
        return new Promise((resolve) =>
          setTimeout(resolve, getSpeed(speed))
        ).then();
      });
    }

    return currentTask;
  };
  private REPLACE = (numOfChar: number, str: string, id: string) => {
    let currentTask = Promise.resolve([]);
    currentTask = currentTask.then(() => {
      let span = document.createElement('span');
      span.id = id;
      span.innerHTML = str;

      this.elem.innerHTML = this.elem.innerHTML.slice(0, -numOfChar);
      this.elem.appendChild(span); //console.log(`${numOfChar} replaced by ${str}`);
      return Promise.resolve().then();
    });
    return currentTask;
  };

  // Public Function
  start() {
    let currentTask = Promise.resolve([]);
    this.taskQueue.forEach((task) => {
      currentTask = currentTask.then(() => {
        // console.log(task.name);
        return task.name(...task.params).then();
      });
    });
  }
  pause(time: number) {
    this.taskQueue.push({ name: this.PAUSE, params: [time] });
    return this;
  }
  type(str: string, speed = 64) {
    this.taskQueue.push({ name: this.TYPE, params: [str, speed] });
    return this;
  }
  markup(str: string) {
    this.taskQueue.push({ name: this.MARKUP, params: [str] });
    return this;
  }
  delete(numOfChar: number, speed = 50) {
    this.taskQueue.push({ name: this.DELETE, params: [numOfChar, speed] });
    return this;
  }
  replace(numOfChar: number, str: string, id: string) {
    this.taskQueue.push({
      name: this.REPLACE,
      params: [numOfChar, str, id],
    });
    return this;
  }
}

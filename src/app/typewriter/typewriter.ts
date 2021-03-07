export class Typewriter {
  private taskQueue: any[] = [];
  constructor(private elem: HTMLElement) {}

  // Private Function
  private PAUSE(time: number) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  private TYPE(str: string, speed = 600) {
    const string = str.split('');

    const printer = (char) => {
      console.log(char); //
      // this.elem.innerHTML = char;
      return new Promise((resolve) => {
        setTimeout(resolve, speed);
      });
    };
    const doNextPromise = (i) => {
      return new Promise((resolve) => {
        printer(string[i])
          .then(() => {
            if (++i < string.length) doNextPromise(i);
          })
          .then(resolve);
      });
    };
    return doNextPromise(0);
  }
  private DELETE() {}
  private REPLACE() {}

  // Public Function
  start() {
    console.log(this.elem);

    const doNextPromise = (i) => {
      this.taskQueue[i].name
        .bind(null, this.taskQueue[i].params)()
        .then(() => {
          i++;
          if (i < this.taskQueue.length) doNextPromise(i);
        });
    };
    doNextPromise(0);
  }
  pause(time: number) {
    this.taskQueue.push({ name: this.PAUSE, params: time });
    return this;
  }
  type(str: string, speed = 1000) {
    this.taskQueue.push({ name: this.TYPE, params: str });
    return this;
  }
  delete(numOfChar: number, speed = 100) {
    return this;
  }
  replace(str: string) {
    return this;
  }
}

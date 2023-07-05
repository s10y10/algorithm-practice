class Emitter {
  constructor() {
    this.events = new Map();
  }

  on(type, func) {
    let listeners = this.events.get(type);
    if (!listeners) {
      listeners = [];
      this.events.set(type, listeners);
    }
    listeners.push(func);
  }

  off(type, func) {
    let listeners = this.events.get(type);
    if (listeners) {
      if (func) {
        for (let i = 0; i < listeners.length; i++) {
          if (func === listeners[i]) {
            listeners.splice(i, 1);
            break;
          }
        }
      } else {
        listeners.length = 0;
      }
    }
  }

  emit(type, ...arg) {
    let listeners = this.events.get(type);
    listeners.forEach((func) => {
      func.apply(this, arg);
    });
  }
}

function b(c) {
  console.log(1, c);
}
function d(c) {
  console.log(2, c);
}

const e = new Emitter();
e.on("a", b);
e.on("a", d);
e.emit("a", "c");
e.emit("a", "d");
e.off("a");
e.emit("a", "e");

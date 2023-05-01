const keyEng = {
  Backquote: { value: "`", valueShift: "~" },
  Digit1: { value: "1", valueShift: "!" },
  Digit2: { value: "2", valueShift: "@" },
  Digit3: { value: "3", valueShift: "#" },
  Digit4: { value: "4", valueShift: "$" },
  Digit5: { value: "5", valueShift: "%" },
  Digit6: { value: "6", valueShift: "^" },
  Digit7: { value: "7", valueShift: "&" },
  Digit8: { value: "8", valueShift: "*" },
  Digit9: { value: "9", valueShift: "(" },
  Digit0: { value: "0", valueShift: ")" },
  Minus: { value: "-", valueShift: "_" },
  Equal: { value: "=", valueShift: "+" },
  Backspace: { value: "Backspace", valueShift: "Backspace" },
  Tab: { value: "Tab", valueShift: "Tab" },
  KeyQ: { value: "q", valueShift: "Q" },
  KeyW: { value: "w", valueShift: "W" },
  KeyE: { value: "e", valueShift: "E" },
  KeyR: { value: "r", valueShift: "R" },
  KeyT: { value: "t", valueShift: "T" },
  KeyY: { value: "y", valueShift: "Y" },
  KeyU: { value: "u", valueShift: "U" },
  KeyI: { value: "i", valueShift: "I" },
  KeyO: { value: "o", valueShift: "O" },
  KeyP: { value: "p", valueShift: "P" },
  BracketLeft: { value: "[", valueShift: "{" },
  BracketRight: { value: "]", valueShift: "}" },
  Backslash: { value: "\\", valueShift: "|" },
  Delete: { value: "Delete", valueShift: "Delete" },
  CapsLock: { value: "CapsLock", valueShift: "CapsLock" },
  KeyA: { value: "a", valueShift: "A" },
  KeyS: { value: "s", valueShift: "S" },
  KeyD: { value: "d", valueShift: "D" },
  KeyF: { value: "f", valueShift: "F" },
  KeyG: { value: "g", valueShift: "G" },
  KeyH: { value: "h", valueShift: "H" },
  KeyJ: { value: "j", valueShift: "J" },
  KeyK: { value: "k", valueShift: "K" },
  KeyL: { value: "l", valueShift: "L" },
  Semicolon: { value: ";", valueShift: ":" },
  Quote: { value: `'`, valueShift: '"' },
  Enter: { value: "Enter", valueShift: "Enter" },
  ShiftLeft: { value: "Shift", valueShift: "Shift" },
  KeyZ: { value: "z", valueShift: "Z" },
  KeyX: { value: "x", valueShift: "X" },
  KeyC: { value: "c", valueShift: "C" },
  KeyV: { value: "v", valueShift: "V" },
  KeyB: { value: "b", valueShift: "B" },
  KeyN: { value: "n", valueShift: "N" },
  KeyM: { value: "m", valueShift: "M" },
  Comma: { value: ",", valueShift: "<" },
  Period: { value: ".", valueShift: ">" },
  Slash: { value: "/", valueShift: "?" },
  ArrowUp: { value: "ArrowUp", valueShift: "ArrowUp" },
  ShiftRight: { value: "Shift", valueShift: "Shift" },
  ControlLeft: { value: "Control", valueShift: "Control" },
  MetaLeft: { value: "Meta", valueShift: "Meta" },
  AltLeft: { value: "Alt", valueShift: "Alt" },
  Space: { value: " ", valueShift: " " },
  AltRight: { value: "Alt", valueShift: "Alt" },
  ArrowLeft: { value: "ArrowLeft", valueShift: "ArrowLeft" },
  ArrowDown: { value: "ArrowDown", valueShift: "ArrowDown" },
  ArrowRight: { value: "ArrowRight", valueShift: "ArrowRight" },
  ControlRight: { value: "Control", valueShift: "Control" },
};

const keyRu = {
  Backquote: { value: "ё", valueShift: "Ё" },
  Digit1: { value: "1", valueShift: "!" },
  Digit2: { value: "2", valueShift: '"' },
  Digit3: { value: "3", valueShift: "№" },
  Digit4: { value: "4", valueShift: ";" },
  Digit5: { value: "5", valueShift: "%" },
  Digit6: { value: "6", valueShift: ":" },
  Digit7: { value: "7", valueShift: "?" },
  Digit8: { value: "8", valueShift: "*" },
  Digit9: { value: "9", valueShift: "(" },
  Digit0: { value: "0", valueShift: ")" },
  Minus: { value: "-", valueShift: "_" },
  Equal: { value: "=", valueShift: "+" },
  Backspace: { value: "Backspace", valueShift: "Backspace" },
  Tab: { value: "Tab", valueShift: "Tab" },
  KeyQ: { value: "й", valueShift: "Й" },
  KeyW: { value: "ц", valueShift: "Ц" },
  KeyE: { value: "у", valueShift: "У" },
  KeyR: { value: "к", valueShift: "К" },
  KeyT: { value: "е", valueShift: "Е" },
  KeyY: { value: "н", valueShift: "Н" },
  KeyU: { value: "г", valueShift: "Г" },
  KeyI: { value: "ш", valueShift: "Ш" },
  KeyO: { value: "щ", valueShift: "Щ" },
  KeyP: { value: "з", valueShift: "З" },
  BracketLeft: { value: "х", valueShift: "Х" },
  BracketRight: { value: "ъ", valueShift: "Ъ" },
  Backslash: { value: "\\", valueShift: "/" },
  Delete: { value: "Delete", valueShift: "Delete" },
  CapsLock: { value: "CapsLock", valueShift: "CapsLock" },
  KeyA: { value: "ф", valueShift: "Ф" },
  KeyS: { value: "ы", valueShift: "Ы" },
  KeyD: { value: "в", valueShift: "В" },
  KeyF: { value: "а", valueShift: "А" },
  KeyG: { value: "п", valueShift: "П" },
  KeyH: { value: "р", valueShift: "Р" },
  KeyJ: { value: "о", valueShift: "О" },
  KeyK: { value: "л", valueShift: "Л" },
  KeyL: { value: "д", valueShift: "Д" },
  Semicolon: { value: "ж", valueShift: "Ж" },
  Quote: { value: `э`, valueShift: "Э" },
  Enter: { value: "Enter", valueShift: "Enter" },
  ShiftLeft: { value: "Shift", valueShift: "Shift" },
  KeyZ: { value: "я", valueShift: "Я" },
  KeyX: { value: "ч", valueShift: "Ч" },
  KeyC: { value: "с", valueShift: "С" },
  KeyV: { value: "м", valueShift: "М" },
  KeyB: { value: "и", valueShift: "И" },
  KeyN: { value: "т", valueShift: "Т" },
  KeyM: { value: "ь", valueShift: "Ь" },
  Comma: { value: "б", valueShift: "Б" },
  Period: { value: "ю", valueShift: "Ю" },
  Slash: { value: ".", valueShift: "," },
  ArrowUp: { value: "ArrowUp", valueShift: "ArrowUp" },
  ShiftRight: { value: "Shift", valueShift: "Shift" },
  ControlLeft: { value: "Control", valueShift: "Control" },
  MetaLeft: { value: "Meta", valueShift: "Meta" },
  AltLeft: { value: "Alt", valueShift: "Alt" },
  Space: { value: " ", valueShift: " " },
  AltRight: { value: "Alt", valueShift: "Alt" },
  ArrowLeft: { value: "ArrowLeft", valueShift: "ArrowLeft" },
  ArrowDown: { value: "ArrowDown", valueShift: "ArrowDown" },
  ArrowRight: { value: "ArrowRight", valueShift: "ArrowRight" },
  ControlRight: { value: "Control", valueShift: "Control" },
};

class VirtualKeyboard {
  constructor() {
      this.flagCaps = false;
      this.shiftKey = false;
      this.ctrlKey = false;
  }
  initKeyboard() {
      const main = document.createElement("div");
      main.classList.add("main");
      document.body.appendChild(main);

      const container = document.createElement("div");
      container.classList.add("container");
      main.appendChild(container);

      this.textarea = document.createElement("textarea");
      this.textarea.classList.add("textarea");
      this.textarea.setAttribute("id", `textarea`);
      container.appendChild(this.textarea);

      this.keyboard = document.createElement("div");
      this.keyboard.classList.add("keyboard");
      container.appendChild(this.keyboard);
  }
}

const virtualKeyboard = new VirtualKeyboard();
virtualKeyboard.initKeyboard();



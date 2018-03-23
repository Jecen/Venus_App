import Toast from 'react-native-root-toast';

class MessageHandle {
  constructor() {
    if (MessageHandle.prototype.Instance === undefined) {
      MessageHandle.prototype.Instance = this;
    }
    return MessageHandle.prototype.Instance;
  }

  static isHttpErrorVisible = false

  httpError = (msg) => {
    if (!this.isHttpErrorVisible) {
      Toast.show(msg, {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        onShow: () => {
          // calls on toast\`s appear animation start
          this.isHttpErrorVisible = true;
        },
        onShown: () => {
          // calls on toast\`s appear animation end.
        },
        onHide: () => {
          // calls on toast\`s hide animation start.
        },
        onHidden: () => {
          // calls on toast\`s hide animation end.
          this.isHttpErrorVisible = false;
        },
      });
    }
  }

  tip = (tip, onHidden = () => {}) => {
    Toast.show(tip, {
      duration: 300,
      position: Toast.positions.BOTTOM,
      shadow: false,
      animation: true,
      hideOnPress: true,
      delay: 0,
      onShow: () => {
        // calls on toast\`s appear animation start
      },
      onShown: () => {
        // calls on toast\`s appear animation end.
      },
      onHide: () => {
        // calls on toast\`s hide animation start.
      },
      onHidden,
    });
  }
}

const Messager = new MessageHandle();

export default Messager;

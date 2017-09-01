/**
 * Hello Go Sift. Frontend view entry point.
 */
import { SiftView, registerSiftView } from '@redsift/sift-sdk-web';

export default class MyView extends SiftView {
  constructor() {
    // You have to call the super() method to initialize the base class.
    super();

  }

  // for more info: http://docs.redsift.com/docs/client-code-siftview
  presentView(value) {
    console.log('hello-go-sift: presentView: ', value);
  };

  willPresentView(value) {
    console.log('hello-go-sift: willPresentView: ', value);
  };

}

registerSiftView(new MyView(window));

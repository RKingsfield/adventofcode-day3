import { Wire } from './wire';
import { MockWires } from './wire.mock'

describe('Wire', () => {

  describe('getDistance', () => {
    MockWires.forEach(element => {
      let wire = new Wire(element.wire1, element.wire2);
      expect(wire.getDistance()).toBe(element.distance);
    });
  });

});

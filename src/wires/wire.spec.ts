import { Wire } from './wire';
import { MockWires } from './wire.mock'

describe('Wire', () => {

  describe('getDistance', () => {
    it('should calculate correct minimum distances', () => {
      MockWires.forEach(element => {
        let wire = new Wire(element.wire1, element.wire2);
        expect(wire.getDistance()).toBe(element.distance);
      });
    });
  });

});

import { Wire } from './wire';
import { MockWires } from './wire.mock'

describe('Wire', () => {

  describe('getMinSteps', () => {
    it('should calculate correct minimum number of steps', () => {
      MockWires.forEach(element => {
        let wire = new Wire(element.wire1, element.wire2);
        expect(wire.getMinSteps()).toBe(element.steps);
      });
    });
  });

  describe('getMinDistance', () => {
    it('should calculate correct minimum distances', () => {
      MockWires.forEach(element => {
        let wire = new Wire(element.wire1, element.wire2);
        expect(wire.getMinDistance()).toBe(element.distance);
      });
    });
  });

});

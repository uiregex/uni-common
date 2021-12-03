import { UniObject } from '../../models';

export function uniGetAngle(angle: number): UniObject<UniObject<string>> {
  let styles: any = {};
  const rotate = `rotate(${angle}deg)`;

  styles.transform = rotate;
  styles['-webkit-transform'] = rotate;

  return { styles };
}

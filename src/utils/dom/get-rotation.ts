import { UniObject } from '../../models';

export function uniGetRotation({ speed, steps }): UniObject<UniObject<string>> {
  let styles: any = {};
  const rotation = `uni-rotate ${speed || 1}s infinite ${steps ? 'steps(' + steps + ')' : 'linear'}`;

  styles.animation = rotation;
  styles['-webkit-animation'] = rotation;

  return { styles };
}

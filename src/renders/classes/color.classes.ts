import { UniColorClasses, UniObject } from '../../models';

export function uniColorClass(color: string): UniObject<boolean> {
  return {
    [UniColorClasses[color]]: true
  };
}

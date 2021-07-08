import { UniColorClasses, UniObject } from '../../models';

export function uniColorClass(color: string): UniObject<boolean> {
  return {
    [UniColorClasses.primary]: color === 'primary',
    [UniColorClasses.success]: color === 'success',
    [UniColorClasses.accent]: color === 'accent',
    [UniColorClasses.warn]: color === 'warn'
  };
}

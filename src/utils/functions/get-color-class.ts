import { UniObject } from '../../models';
import { UniColorClasses } from '../states/colors.state';

export function uniGetColorClass(color: string): UniObject<boolean> {
  return {
    [UniColorClasses.primary]: color === 'primary',
    [UniColorClasses.success]: color === 'success',
    [UniColorClasses.accent]: color === 'accent',
    [UniColorClasses.warn]: color === 'warn'
  };
}

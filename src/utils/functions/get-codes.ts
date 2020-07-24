import { UniObject } from '../../models';

export function getUniCodes(): UniObject<string> {
  return JSON.parse(localStorage.getItem('uni.codes')) || {};
}

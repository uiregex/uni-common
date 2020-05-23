import { UniObject } from "./object.model";

export interface UniProps {
  props: UniObject<any>;
  classes: string | UniObject<boolean>;
}

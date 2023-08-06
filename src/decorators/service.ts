import { containerInstance } from '../container';
import { EMPTY_VALUE } from '../symbol';

export function Service(): ClassDecorator {
  return (constructor: any) => {
    containerInstance.setService({
      id: constructor.name,
      Class: constructor as ClassType,
      type: 'service',
      value: EMPTY_VALUE,
    });
  };
}

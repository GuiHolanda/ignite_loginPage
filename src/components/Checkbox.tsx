import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

interface ICheckboxProps extends CheckboxPrimitive.CheckboxProps {}

export function Checkbox(props: ICheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      {...props}
      className=" w-6 h-6 p-[2px] bg-gray-800 rounded"
    >
      <CheckboxPrimitive.Indicator asChild>
        <Check weight="bold" className="w-5 h-5 text-cyan-300" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

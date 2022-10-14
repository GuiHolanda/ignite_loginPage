import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface ITextInputRootProps {
  children: ReactNode;
}

function TextInputRoot(props: ITextInputRootProps) {
  return (
    <div
      className={`flex h-12 items-center gap-3 py-4 px-3 rounded bg-gray-800 focus-within:ring-2 ring-cyan-300`}
    >
      {props.children}
    </div>
  );
}

TextInputRoot.displayName = 'TextInput.Root';

export interface ITextInputIconProps {
  children: ReactNode;
}

function TextInputIcon(props: ITextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>;
}

TextInputIcon.displayName = 'TextInput.Icon';

export interface ITextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: ITextInputInputProps) {
  return (
    <input
      className="bg-trasparent flex-1 bg-gray-800 text-gray-100 outline-none text-xs placeholder:text-grey-400"
      {...props}
    />
  );
}

TextInputInput.displayName = 'TextInput.Input';

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};

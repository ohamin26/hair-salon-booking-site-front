import { cva, VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, FC } from 'react';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof ButtonVariants> {
  text: string;
  children?: React.ReactElement;
  addClassName?: string;
}

export const ButtonVariants = cva('flex items-center justify-center py-3 px-6', {
  variants: {
    variant: {
      default: 'bg-inherit',
    },
    size: {
      default: '',
      md: 'w-[10rem] h-[3rem]',
      lg: 'w-[12rem] h-[4rem]',
    },
    rounded: {
      default: 'rounded-md',
      full: 'rounded-full',
      sm: 'rounded-sm',
    },
    textColor: {
      default: 'text-black-default',
    },
    border: {
      default: 'border-none',
      grey: 'border border-grey-300',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
    rounded: 'default',
    textColor: 'default',
    border: 'grey',
  },
});

export const CustomButton: FC<ButtonProps> = ({ text, onClick, addClassName }) => {
  return (
    <button className={`${ButtonVariants()} ${addClassName}`} onClick={onClick}>
      {text}
    </button>
  );
};

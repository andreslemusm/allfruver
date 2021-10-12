const appearances = {
  primary: [
    "border-transparent text-white",
    {
      idle: "bg-green-300 hover:bg-orange hover:text-white",
      loading: "opacity-90 cursor-default",
      disabled: "bg-gray-200 text-green-100 cursor-not-allowed",
    },
  ],
} as const;

const buttonSizes = {
  sm: [
    "text-sm px-3 py-2 text-sm leading-4",
    {
      leftIcon: "-ml-0.5 mr-2 h-4 w-4",
      rightIcon: "ml-2 -mr-0.5 h-4 w-4",
    },
  ],
  md: [
    "text-sm px-4 py-2",
    {
      leftIcon: "-ml-1 mr-2 h-5 w-5",
      rightIcon: "ml-2 -mr-1 h-5 w-5",
    },
  ],
  lg: [
    "text-base px-4 py-2",
    {
      leftIcon: "-ml-1 mr-3 h-5 w-5",
      rightIcon: "ml-3 -mr-1 h-5 w-5",
    },
  ],
} as const;

const iconButtonSizes = {
  md: "p-2",
  lg: "p-2",
  xl: "p-3",
};

type ButtonBaseProps = {
  children?: string;
  block?: boolean;
  rounded?: boolean;
  rightIcon?: React.VFC<{ className: string }>;
  leftIcon?: React.VFC<{ className: string }>;
  size?: keyof typeof buttonSizes;
  appearance?: keyof typeof appearances;
};

export { appearances, buttonSizes, iconButtonSizes };
export type { ButtonBaseProps };

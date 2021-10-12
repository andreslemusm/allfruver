import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { classNames } from "@utils/class-names";
import { forwardRef } from "react";
import { ButtonBaseProps, appearances, buttonSizes } from "./utils";

type ButtonProps = {
  type?: "submit" | "button" | "reset";
  status?: keyof typeof appearances["primary"][1];
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  loadingText?: string;
} & ButtonBaseProps;

const Button = forwardRef(
  (
    {
      children,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      appearance = "primary",
      block = false,
      rounded = false,
      size = "md",
      status = "idle",
      type = "submit",
      onClick,
      loadingText,
    }: ButtonProps,
    ref: React.Ref<HTMLButtonElement>
  ): React.ReactElement => (
    <button
      type={type}
      ref={ref}
      onClick={onClick}
      disabled={status === "idle" ? false : true}
      className={classNames(
        block ? "flex w-full" : "inline-flex",
        rounded ? "rounded-full" : "rounded-lg",
        buttonSizes[size][0],
        appearances[appearance][0],
        appearances[appearance][1][status],
        "relative transition items-center justify-center border font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300"
      )}
    >
      {status === "loading" && !loadingText ? (
        <div className="absolute inset-0 w-full h-full grid place-items-center bg-white rounded-full">
          <AiOutlineLoading3Quarters className="animate-spin h-5 w-5" />
        </div>
      ) : null}
      {status === "loading" && loadingText ? (
        <AiOutlineLoading3Quarters
          className={classNames(
            buttonSizes[size][1]["leftIcon"],
            "animate-spin"
          )}
        />
      ) : LeftIcon ? (
        <LeftIcon className={buttonSizes[size][1]["leftIcon"]} />
      ) : null}
      {status === "loading" && loadingText ? loadingText : children}
      {RightIcon ? (
        <RightIcon className={buttonSizes[size][1]["rightIcon"]} />
      ) : null}
    </button>
  )
);
if (process.env.NODE_ENV === "development") {
  Button.displayName = "Button";
}

export { Button };
export type { ButtonProps };

import Image from "next/image";
import { classNames } from "@utils/class-names";
import { useState } from "react";
import { Checkbox, CheckedState } from "@radix-ui/react-checkbox";

type CategoryCheckboxProps = {
  name: string;
  value: string;
  imageURL: string;
};

export const CategoryCheckbox = ({
  name,
  value,
  imageURL,
}: CategoryCheckboxProps): React.ReactElement => {
  const [checked, setChecked] = useState<CheckedState>(false);

  return (
    <Checkbox
      checked={checked}
      onCheckedChange={setChecked}
      id={`${name}-${value}`}
      className={classNames(
        checked ? "border-green-300" : "border-transparent",
        "transition py-1 px-2 border rounded-lg flex flex-col items-center gap-y-0.5 cursor-pointer lg:border-2 lg:gap-y-1"
      )}
      name={name}
      value={value}
    >
      <div className="h-10 w-10 lg:h-20 lg:w-20">
        <Image
          src={imageURL}
          className="w-full h-full object-contain"
          width={512}
          height={512}
          alt={name}
        />
      </div>
      <label
        className={classNames(
          checked ? "font-bold" : "font-normal",
          "transition duration-500 text-xs cursor-pointer truncate lg:text-sm"
        )}
        htmlFor={`${name}-${value}`}
      >
        {name}
      </label>
    </Checkbox>
  );
};

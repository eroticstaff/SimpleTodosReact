import React from "react";
import { Checkbox } from "rsuite";
import { ValueType } from "rsuite/esm/Checkbox";
import IOnChangeFunction from "../../Interfaces/IOnChangeFunction";
import "./style.scss";

export default function TodoElement(prop: {
  data: { id: Number; name: String; completed: boolean };
  onChange: IOnChangeFunction;
}) {
  const [status, setStatus] = React.useState<boolean | undefined>(
    prop.data.completed
  );

  let onClick = (
    value: ValueType | undefined,
    checked: boolean,
    event: any
  ): void => {
    setStatus(checked);
    prop.onChange(prop.data.id, checked);
  };

  return (
    <div>
      <Checkbox checked={status} onChange={onClick}>
        {" "}
        <span className={status ? "strikethrough" : ""}>
          {prop.data.name}
        </span>{" "}
      </Checkbox>
    </div>
  );
}

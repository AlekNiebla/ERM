import * as React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

storiesOf("Components / Button", module)
  .add("default", () => <Button label="" />)
  .add("with label", () => <Button label="Test content" />);

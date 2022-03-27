import React from "react";
import AppButton from "./AppButton";

import { useFormikContext } from "formik";

function SubmitButton({ textValue }) {
  const { handleSubmit } = useFormikContext();
  return <AppButton textValue={textValue} onPress={handleSubmit} />;
}

export default SubmitButton;

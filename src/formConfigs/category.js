import * as yup from "yup";

const schema = yup.object({
  label: yup.string().required(),
});
export const categoryFormConfig = (onSubmit) => ({
  schema,
  fields: [
    {
      type: "text",
      label: "label",
      defaultValue: "",
      placeholder: "category label",
    },
  ],
  onSubmit,
});

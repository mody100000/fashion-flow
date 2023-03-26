/*
{
    schema : 
    fields : [
        {
            type : "",
            label: "",
            defaultValue : "",
            placeholder : ""
        },
        {
            type : "custom",
            label: ""
            defaultIcon : ""
            component : will take the setValue as a prop
        }
    ],
    onSubmit: (data) => {},
    submitText : ""
}

*/
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "./../common/Button/index";
import useLocale from "../../contexts/LocaleContext";
import styles from "./FormBuilder.module.css";

const injectSetValue = (Component, setValue) => {
  const NewComponent = ({ props }) => {
    return <Component {...props} setValue={setValue} />;
  };

  NewComponent.displayName = "InjectedComponent";
  return <NewComponent />;
};

const FormBuilder = ({ config }) => {
  const { t } = useLocale();
  const {
    handleSubmit,
    formState: { errors },
    register,
    setValue,
  } = useForm({
    resolver: yupResolver(config.schema),
    defaultValues: config.fields.reduce(
      (o, field) => Object.assign(o, { [field.label]: field.defaultValue }),
      {}
    ),
  });

  return (
    <form onSubmit={handleSubmit(config.onSubmit)}>
      {config.fields.map((field) => {
        const Component = field.Component;
        return (
          <div className="flex flex-col gap-2" key={field.label}>
            <span className="font-bold text-gray-200">{t(field.label)}</span>
            {field.type !== "custom" && (
              <input
                type={field.type || "text"}
                {...register(field.label)}
                className={`p-2 rounded-lg outline-none focus:ring-4 transition-all duration-300 ${styles.textInput}`}
                placeholder={field.placeholder}
              />
            )}

            {field.type === "custom" &&
              injectSetValue(Component, (v) => setValue(field.label, v))}

            {errors[field.label] && (
              <span className="text-red-700 mt-2 font-bold">
                {t(errors[field.label].message)}
              </span>
            )}
          </div>
        );
      })}

      <Button type="submit">{t(config.submitText || "submit")}</Button>
    </form>
  );
};

export default FormBuilder;

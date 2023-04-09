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
import { useEffect, useMemo, useState } from "react";
import { getOne } from "../../services/crudServices";

const injectSetValue = (Component, setValue , currentValue) => {
  const NewComponent = ({ props }) => {
    return <Component {...props} setValue={setValue} currentValue={currentValue} />;
  };

  NewComponent.displayName = "InjectedComponent";
  return <NewComponent />;
};

const FormBuilder = ({ config , updatedId , name }) => {
  const [resource , setResource] = useState()
  const { t } = useLocale();

  const getDefaultValues = () => {
    if(!updatedId){
      //create mode
      return config.fields.reduce(
        (o, field) => Object.assign(o, { [field.label]: field.defaultValue }),
        {}
      )
    }else{
      // in edit mode we will handle it by the setValue method
      return {}
    }
  }



  const {
    handleSubmit,
    formState: { errors },
    register,
    setValue,
  } = useForm({
    resolver: yupResolver(config.schema),
    defaultValues: getDefaultValues(),
  });
  const getResource = async () => {
    const data = await getOne(name , updatedId)
    setResource(data)

    config.fields.forEach(field => {
      setValue(field.label , data[field.label])
    })
    
  }

  const getResouceValue =(key) => {
    if(! resource) return null
    return resource[key]
  }

  useEffect(() => {
    if(!updatedId) return
    getResource()
  } , [updatedId])


  const inputField = (field) => {
    const Component = field.Component;
    const resourceValue = getResouceValue(field.label)
    
    // specific cases
    if (field.type === "textarea")
      return (
        <textarea
          {...register(field.label)}
          className="h-40 overflow-y-auto w-full bg-primary-5 outline-none focus:ring-4 transition-all duration-300 rounded-lg"
        ></textarea>
      );

    if (field.type === "custom")
      return injectSetValue(Component, (v) => setValue(field.label, v), resourceValue);

    // more general cases
    return (
      <input
        type={field.type || "text"}
        {...register(field.label)}
        className={`p-2 rounded-lg outline-none focus:ring-4 transition-all duration-300 ${styles.textInput}`}
        placeholder={field.placeholder}
      />
    );
  };


  const Fields = useMemo(() => {
    return config.fields.map((field) => (
      <div className="flex flex-col gap-2 mb-4" key={field.label}>
        <span className="font-bold text-gray-200">{t(field.label)}</span>
        {inputField(field)}

        {errors[field.label] && (
          <span className="text-red-700 mt-2 font-bold">
            {t(errors[field.label].message)}
          </span>
        )}
      </div>
    ))
  }, [config , resource])

  return (
    <form onSubmit={handleSubmit(config.onSubmit)}>
   
      {Fields}
      <Button variant="info" type="submit">{t(config.submitText || "submit")}</Button>
    </form>
  );
};

export default FormBuilder;

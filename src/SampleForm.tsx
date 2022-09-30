
import * as yup from "yup";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { OctoForm, FormInputText, OptionLabel, FormInputDropdown, FormInputDate, FormInputDateTime, FormInputMultiCheckbox, FormInputSlider, FormInputCheckbox, OnSubmitFnType } from "octo-form";

import { FormRenderContext, OctoFormContext } from "octo-form";
import { ReasonsBox } from "./ReasonsBox";

import esLocale from 'date-fns/locale/es'

const iceCreamOptions: OptionLabel[] = [
  { value: "", label: "-- no flavor --" },
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const dayOptions: OptionLabel[] = [
  { value: "", label: "-- no day --" },
  { value: "Monday", label: "Monday" },
  { value: "Tuesday", label: "Tuesday" },
  { value: "Wednesday", label: "Wednesday" },
  { value: "Thursday", label: "Thursday" },
  { value: "Friday", label: "Friday" },
  { value: "Saturday", label: "Saturday" },
  { value: "Sunday", label: "Sunday" },
];

const schema = yup.object({
  example: yup.string(),
  exampleRequired: yup.string().required(),
  iceCreamType: yup.string().required().oneOf(iceCreamOptions.filter(o => o.label != "").map(option => option.value.toString())),
  age: yup.number().positive().integer().moreThan(0).required(),
  todaysDate: yup.date().required(),
  todaysDateAndTime: yup.date().required(),
  days: yup.array().of(yup.string().required().oneOf(dayOptions.filter(o => o.label != "").map(option => option.value.toString()))).required(),
  volume: yup.number().positive().integer().min(0).max(10).required(),
  isVegan: yup.boolean().required(),
  reasons: yup.array().of(yup.object({
    id: yup.string().required(),
    description: yup.string().required(),
  }))
});

export type SampleFormType = yup.InferType<typeof schema>;

export interface SampleFormProps {
  defaultValues: SampleFormType;
}

export default function SampleForm({ defaultValues }: SampleFormProps) {

  const onSubmit: OnSubmitFnType<SampleFormType> = async (data, context) => {
    console.log(data);
    await fetch("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8");
  }


  return <OctoForm defaultValues={defaultValues} schema={schema} onSubmit={onSubmit} formEnabled={true} locale={esLocale}>
    <Stack spacing={2}>

      <FormInputText name="example" label="Example" />
      <FormInputText name="exampleRequired" label="Example required" />
      <FormInputDropdown name="iceCreamType" label="Ice Cream Type" options={iceCreamOptions} />
      <FormInputText name="age" label="Age" />
      <FormInputDate name="todaysDate" label="Today's date" />
      <FormInputDateTime name="todaysDateAndTime" label="Today's date and time" />
      <FormInputMultiCheckbox name="days" label="Days" options={dayOptions} />
      <FormInputSlider name="volume" label="Volume" />
      <FormInputCheckbox name="isVegan" label="Vegan" />

      <ReasonsBox></ReasonsBox>

      <Stack direction="row">
        <OctoFormContext.Consumer>
          {(context:FormRenderContext<SampleFormType>) => {
            return <Button
                      type="submit"
                      variant="contained"
                      disabled={context.formState.isSubmitting || !context.formEnabled}
                      >
                      Submit
              </Button>
          }}
        </OctoFormContext.Consumer>
      </Stack>
    </Stack>

    {/*
        <div>{JSON.stringify(watch(), null, 2)}</div>
    */}

  </OctoForm>

}
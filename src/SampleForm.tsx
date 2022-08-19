
import * as yup from "yup";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import {OctoForm, FormInputText, OptionLabel, FormInputDropdown, FormInputDate, FormInputDateTime, FormInputMultiCheckbox, FormInputSlider} from "octo-form";

import { SubmitHandler } from "react-hook-form";



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
  iceCreamType: yup.string().oneOf(iceCreamOptions.filter(o => o.label != "").map(option => option.value.toString())),
  age: yup.number().positive().integer().moreThan(0).required(),
  todaysDate: yup.date().required(),
  todaysDateAndTime: yup.date().required(),
  days: yup.array().of(yup.string().required().oneOf(dayOptions.filter(o => o.label != "").map(option => option.value.toString()))).required(),
  volume: yup.number().positive().integer().min(0).max(10).required(),
});

export type SampleFormType = yup.InferType<typeof schema>;

export interface SampleFormProps {
  defaultValues: SampleFormType;
}

export function SampleForm({ defaultValues }: SampleFormProps) {

  const onSubmit: SubmitHandler<SampleFormType> = (data) => {
    console.log(data);
  }


  return <OctoForm defaultValues={defaultValues} schema={schema} onSubmit={onSubmit}>
        <Stack spacing={2}>

          <FormInputText name="example" label="Example" />

          <FormInputText name="exampleRequired" label="Example required" />

          <FormInputDropdown
            name="iceCreamType"
            label="Ice Cream Type"
            options={iceCreamOptions}
          />

          <FormInputText name="age" label="Age" />

          <FormInputDate
            name="todaysDate"
            label="Today's date"
          />

          <FormInputDateTime
            name="todaysDateAndTime"
            label="Today's date and time"
          />

          <FormInputMultiCheckbox
            name="days"
            label="Days"
            options={dayOptions}
          />

          <FormInputSlider
            name="volume"
            label="Volume"
          />

          <Stack direction="row">
            <Button
              type="submit"
              variant="contained"
            >Submit</Button>
          </Stack>
        </Stack>

{/*
        <div>{JSON.stringify(watch(), null, 2)}</div>
*/}

  </OctoForm>

}
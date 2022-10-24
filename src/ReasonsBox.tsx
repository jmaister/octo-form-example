import { Button, Paper, Stack } from "@mui/material";
import { OctoFormContext } from "octo-form";
import {FormInputText} from "octo-form";
import { useContext } from "react";

import { useFieldArray } from "react-hook-form";

export interface ReasonType {
    id: string
    description: string
}

export const ReasonsBox = () => {
    const context = useContext(OctoFormContext);
    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control: context.control, // control props comes from useForm (optional: if you are using FormContext)
        name: "reasons", // unique name for your Field Array
    });

    return <div>
        <h2>ReasonsBox</h2>

        {fields.map((field, index) => (
            <Paper key={field.id} elevation={2} sx={{padding: "30px"}}>
                <Stack spacing={2}>
                    <FormInputText name={`reasons.${index}.id`} label="ID" />
                    <FormInputText name={`reasons.${index}.description`} label="Description" />
                </Stack>
                <Button onClick={() => remove(index)} variant="contained">-</Button>
            </Paper>
        ))}
        <Button onClick={() => append({id:"", description:""})} variant="contained">+</Button>
    </div>

}
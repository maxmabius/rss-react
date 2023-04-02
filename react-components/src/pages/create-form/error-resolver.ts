import { Resolver } from 'react-hook-form';
import type { FieldError } from 'react-hook-form/dist/types';

export type FormErrors = {
  [PropertyKey in keyof FormValues]: {
    type: string;
    message: string;
  };
};

export interface FormValues {
  firstName?: string;
  birthDate?: string;
  department?: string;
  confirmation?: string;
  gender?: string;
  image?: FileList;
}

export const errorResolver: Resolver<FormValues> = async (values) => {
  const hanldeValues = (values: FormValues) => {
    if (Object.values(values).some((value) => !value)) return {};
    return values;
  };

  const createError = (error: FieldError) => {
    return {
      type: error.type,
      message: error.message,
    };
  };

  const createErrorRequired = createError({
    type: 'required',
    message: 'Required',
  });

  const handleErrors = (values: FormValues) => {
    const errors = {} as FormErrors;

    const files = values.image;
    const file = files ? files[0] : null;

    if (!files?.length) errors.image = createErrorRequired;
    if (file && !file.type.startsWith('image/'))
      errors.image = createError({ type: 'pattern', message: 'This is not an image' });

    Object.keys(values).map((field) => {
      if (!values[field]) {
        errors[field] = createErrorRequired;
      }
    });

    const firstName = values.firstName;
    if (firstName && firstName[0] === firstName[0].toLowerCase()) {
      errors.firstName = createError({
        type: 'pattern',
        message: 'Should starts with uppercased letter',
      });
    }

    return errors;
  };

  return {
    values: hanldeValues(values),
    errors: handleErrors(values),
  };
};

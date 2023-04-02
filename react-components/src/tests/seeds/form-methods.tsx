import React from 'react';
import { render } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
  UseFormWatch,
} from 'react-hook-form/dist/types';
import { FormValues } from '../../pages/create-form';

export default function formMethods(errorResolver) {
  const formMethods = {} as {
    register: UseFormRegister<FormValues>;
    errors: FieldErrors<FormValues>;
    handleSubmit: UseFormHandleSubmit<FormValues>;
    reset: UseFormReset<FormValues>;
    watch: UseFormWatch<FormValues>;
  };

  const EmptyForm = () => {
    const {
      register,
      handleSubmit,
      reset,
      watch,
      formState: { errors },
    } = useForm({
      resolver: errorResolver,
      shouldFocusError: false,
    });

    formMethods.register = register;
    formMethods.handleSubmit = handleSubmit;
    formMethods.reset = reset;
    formMethods.watch = watch;
    formMethods.errors = errors;

    return <React.Fragment></React.Fragment>;
  };

  render(<EmptyForm />);

  return formMethods;
}

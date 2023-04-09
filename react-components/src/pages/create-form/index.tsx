import * as React from 'react';
import { v4 } from 'uuid';
import { useForm, SubmitHandler } from 'react-hook-form';

import Field from '../../components/field';
import Select from '../../components/select';
import Input from '../../components/input';
import RadioGroup from '../../components/radio-group';
import File from '../../components/file';
import Card from '../../components/card';

import { errorResolver } from './error-resolver';
import type { User } from '../main/fake-users';

import './index.css';

export interface FormValues {
  firstName?: string;
  birthDate?: string;
  department?: string;
  confirmation?: string;
  gender?: string;
  image?: FileList;
}

export type FormErrors = {
  [PropertyKey in keyof FormValues]: {
    type: string;
    message: string;
  };
};

export default function CreateForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [users, setUsers] = React.useState<User[] | []>([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: errorResolver,
    shouldFocusError: false,
  });

  const validate = (data: FormValues) => {
    const files = data.image;
    const file = files ? files[0] : null;
    const image = file ? URL.createObjectURL(file) : '';

    const user = {
      id: v4(),
      firstName: data.firstName,
      birthDate: data.birthDate,
      department: data.department,
      gender: data.gender,
      image: image,
      confirmation: data.confirmation,
    };

    return user;
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const user = validate(data);
    setIsSubmitting(true);

    setTimeout(() => {
      setUsers([user, ...users]);
      setIsSubmitting(false);
      reset();
      alert('The data has been saved...');
    }, 1000);
  };

  const radioGroupOptions = [
    {
      name: 'gender',
      value: 'male',
    },
    {
      name: 'gender',
      value: 'female',
    },
  ];

  return (
    <React.Fragment>
      <form className="create-form" onSubmit={handleSubmit(onSubmit)}>
        <Field label="Name" error={errors.firstName}>
          <Input name="firstName" register={register} />
        </Field>

        <Field label="Birthday" error={errors.birthDate}>
          <Input type="date" name="birthDate" register={register} />
        </Field>

        <Field label="Department" error={errors.department}>
          <Select name="department" register={register}>
            <option value="">--Choose an option--</option>
            <option value="Marketing">Marketing</option>
            <option value="Support">Support</option>
            <option value="Services">Services</option>
          </Select>
        </Field>

        <Field label="Select a gender" error={errors.gender}>
          <RadioGroup radioGroupOptions={radioGroupOptions} name="gender" register={register} />
        </Field>

        <Field label="Upload image" error={errors.image}>
          <File name="image" register={register} />
        </Field>

        <Field label="I consent to my personal data" position="left" error={errors.confirmation}>
          <Input type="checkbox" name="confirmation" register={register} />
        </Field>

        <button disabled={isSubmitting} className="create-button">
          {isSubmitting ? 'Wait...' : 'Create'}
        </button>
      </form>
      <div className="create-list">
        {users?.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </React.Fragment>
  );
}

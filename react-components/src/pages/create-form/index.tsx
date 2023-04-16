import * as React from 'react';
import { v4 } from 'uuid';
import { useForm, SubmitHandler } from 'react-hook-form';

import Field from '../../components/field';
import Select from '../../components/select';
import Input from '../../components/input';
import RadioGroup from '../../components/radio-group';
import File from '../../components/file';
import Card from '../../components/card';

import type { FormUser } from '../../types';

import { useAppSelector, useAppDispatch } from '../../store';
import { formUsersSlice } from '../../store/form-users';

import './index.css';

export interface FormValues {
  firstName?: string;
  birthDate?: string;
  department?: string;
  confirmation?: string;
  gender?: string;
  image?: FileList;
}

export default function CreateForm() {
  const users = useAppSelector((state) => state.formUsers.users);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<FormUser>({});

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      setTimeout(() => alert('The data has been added to your list'), 500);
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit: SubmitHandler<FormUser> = (data) => {
    const newUser = {
      id: v4(),
      ...data,
      image: URL.createObjectURL(data.image[0] as unknown as Blob),
      company: {
        department: data.department,
      },
    };
    dispatch(formUsersSlice.actions.addUser(newUser));
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
          <Input
            register={register('firstName', {
              required: 'required',
              pattern: {
                value: /^\p{Lu}\p{L}*$/u,
                message: 'should starts with uppercased letter',
              },
            })}
          />
        </Field>

        <Field label="Birthday" error={errors.birthDate}>
          <Input
            type="date"
            register={register('birthDate', {
              required: 'required',
            })}
          />
        </Field>

        <Field label="Department" error={errors.department}>
          <Select register={register('department', { required: 'required' })}>
            <option value="">--Choose an option--</option>
            <option value="Marketing">Marketing</option>
            <option value="Support">Support</option>
            <option value="Services">Services</option>
          </Select>
        </Field>

        <Field label="Select a gender" error={errors.gender}>
          <RadioGroup
            radioGroupOptions={radioGroupOptions}
            register={register('gender', { required: 'required' })}
          />
        </Field>

        <Field label="Upload image" error={errors.image}>
          <File register={register('image', { required: 'required' })} />
        </Field>

        <Field label="I consent to my personal data" position="left" error={errors.confirmation}>
          <Input type="checkbox" register={register('confirmation', { required: 'required' })} />
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

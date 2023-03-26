import * as React from 'react';

import Field from '../../components/field';
import Select from '../../components/select';
import Input from '../../components/input';
import RadioGroup from '../../components/radio-group';
import File from '../../components/file';
import Card from '../../components/card';

import { v4 } from 'uuid';
import type { User } from '../main/fake-users';

import './index.css';

interface Props {
  children?: React.ReactNode;
}

interface Errors {
  firstName?: string;
  birthDate?: string;
  department?: string;
  confirmation?: string;
  gender?: string;
  image?: string;
}

interface State {
  isSubmitting: boolean;
  errors: Errors;
  users: User[];
}

interface Elements {
  form: React.RefObject<HTMLFormElement>;
  firstName: React.RefObject<HTMLInputElement>;
  birthDate: React.RefObject<HTMLInputElement>;
  department: React.RefObject<HTMLSelectElement>;
  confirmation: React.RefObject<HTMLInputElement>;
  gender: React.RefObject<HTMLInputElement>[];
  image: React.RefObject<HTMLInputElement>;
}

export default class CreateForm extends React.Component<Props, State> {
  elements: Elements;
  constructor(props: Props) {
    super(props);

    this.state = {
      errors: {},
      isSubmitting: false,
      users: [],
    };

    this.elements = {
      form: React.createRef<HTMLFormElement>(),
      firstName: React.createRef<HTMLInputElement>(),
      birthDate: React.createRef<HTMLInputElement>(),
      department: React.createRef<HTMLSelectElement>(),
      confirmation: React.createRef<HTMLInputElement>(),
      gender: [React.createRef<HTMLInputElement>(), React.createRef<HTMLInputElement>()],
      image: React.createRef<HTMLInputElement>(),
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  validate() {
    const errors: Errors = {};
    const files = this.elements.image.current?.files;
    const file = files ? files[0] : null;
    const image = file ? URL.createObjectURL(file) : '';
    const user = {
      id: v4(),
      firstName: this.elements.firstName.current?.value,
      birthDate: this.elements.birthDate.current?.value,
      department: this.elements.department.current?.value,
      gender: this.elements.gender.find((option) => option.current?.checked)?.current?.value,
      image: image,
      confirmation: this.elements.confirmation.current?.checked,
    };

    Object.keys(user).map((field) => {
      if (!user[field]) {
        errors[field] = 'Required';
      }
    });

    const firstName = this.elements.firstName.current?.value;
    if (firstName && firstName[0] === firstName[0].toLowerCase()) {
      errors.firstName = 'Should starts with uppercased letter';
    }

    if (Object.keys(errors).length) {
      this.setState({
        errors,
      });

      return;
    }

    return user;
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const user = this.validate();
    if (!user) return;

    this.setState({
      isSubmitting: true,
    });

    setTimeout(() => {
      this.reset();
      this.setState({
        users: [user, ...this.state.users],
      });
    }, 1000);
  }

  reset() {
    this.elements.form.current?.reset();

    this.setState({
      isSubmitting: false,
    });
  }

  render() {
    const radioGroupOptions = [
      {
        name: 'gender',
        value: 'male',
        ref: this.elements.gender[0],
      },
      {
        name: 'gender',
        value: 'female',
        ref: this.elements.gender[1],
      },
    ];
    return (
      <React.Fragment>
        <form className="create-form" onSubmit={this.handleSubmit} ref={this.elements.form}>
          <Field label="Name" error={this.state.errors.firstName}>
            <Input ref={this.elements.firstName} />
          </Field>

          <Field label="Birthday" error={this.state.errors.birthDate}>
            <Input ref={this.elements.birthDate} type="date" />
          </Field>

          <Field label="Department" error={this.state.errors.department}>
            <Select ref={this.elements.department}>
              <option value="">--Choose an option--</option>
              <option value="Marketing">Marketing</option>
              <option value="Support">Support</option>
              <option value="Services">Services</option>
            </Select>
          </Field>

          <Field label="Select a gender" error={this.state.errors.gender}>
            <RadioGroup radioGroupOptions={radioGroupOptions} />
          </Field>

          <Field label="Upload image" error={this.state.errors.image}>
            <File ref={this.elements.image} />
          </Field>

          <Field
            label="I consent to my personal data"
            position="left"
            error={this.state.errors.confirmation}
          >
            <Input ref={this.elements.confirmation} type="checkbox" />
          </Field>

          <button
            disabled={this.state.isSubmitting}
            className="create-button"
            onClick={() => this.handleSubmit}
          >
            {this.state.isSubmitting ? 'Wait...' : 'Create'}
          </button>
        </form>
        <div className="create-list">
          {this.state.users.map((user) => (
            <Card key={user.id} user={user} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

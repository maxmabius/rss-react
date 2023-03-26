import * as React from 'react';

import Field from '../../components/field';
import Select from '../../components/select';
import Input from '../../components/input';
import RadioGroup from '../../components/radio-group';
import File from '../../components/file';
import Card from '../../components/card';

import './index.css';

interface Props {
  children?: React.ReactNode;
}

interface Errors {
  name?: string;
  birthDate?: string;
  department?: string;
  confirmation?: string;
  gender?: string;
  image?: string;
}

interface State {
  isSubmitting: boolean;
  errors: Errors;
}

interface Elements {
  form: React.RefObject<HTMLFormElement>;
  name: React.RefObject<HTMLInputElement>;
  birthDate: React.RefObject<HTMLInputElement>;
  department: React.RefObject<HTMLSelectElement>;
  confirmation: React.RefObject<HTMLInputElement>;
  gender: React.RefObject<HTMLInputElement>[];
  image: React.RefObject<HTMLInputElement>;
}

const testUsers = [
  {
    id: 1,
    image: 'https://robohash.org/hicveldicta.png',
    firstName: 'Terry',
    lastName: 'Medhurst',
    birthDate: '2000-12-25',
    department: 'Marketing',
    gender: 'male',
  },
  {
    id: 2,
    image: 'https://robohash.org/doloremquesintcorrupti.png',
    firstName: 'Sheldon',
    lastName: 'Quigley',
    birthDate: '2003-08-02',
    department: 'Services',
    gender: 'female',
  },
];

export default class CreateForm extends React.Component<Props, State> {
  elements: Elements;
  constructor(props: Props) {
    super(props);

    this.state = {
      errors: {},
      isSubmitting: false,
    };

    this.elements = {
      form: React.createRef<HTMLFormElement>(),
      name: React.createRef<HTMLInputElement>(),
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

    ['name', 'birthDate', 'confirmation', 'department', 'gender', 'image'].map((field) => {
      let fieldValue;

      if (field === 'gender') {
        fieldValue = this.elements[field].some((option) => option.current?.checked);
      } else if (field === 'confirmation') {
        fieldValue = this.elements[field].current?.checked;
      } else {
        fieldValue = this.elements[field].current?.value;
      }

      if (!fieldValue) errors[field] = 'Required';
    });

    const name = this.elements.name.current?.value;
    if (name && name[0] === name[0].toLowerCase()) {
      errors.name = 'Should starts with uppercased letter';
    }

    this.setState({
      errors,
    });
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    this.validate();

    this.setState({
      isSubmitting: true,
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
      <div>
        <form className="create-form" onSubmit={this.handleSubmit} ref={this.elements.form}>
          <Field label="Name" error={this.state.errors.name}>
            <Input ref={this.elements.name} />
          </Field>

          <Field label="Birthday" error={this.state.errors.birthDate}>
            <Input ref={this.elements.birthDate} type="date" />
          </Field>

          <Field label="Department" error={this.state.errors.department}>
            <Select ref={this.elements.department}>
              <option value="">--Choose an option--</option>
              <option value="marketing">Marketing</option>
              <option value="support">Support</option>
              <option value="services">Services</option>
            </Select>
          </Field>

          <Field
            label="I consent to my personal data"
            position="left"
            error={this.state.errors.confirmation}
          >
            <Input ref={this.elements.confirmation} type="checkbox" />
          </Field>

          <Field label="Select a gender" error={this.state.errors.gender}>
            <RadioGroup radioGroupOptions={radioGroupOptions} />
          </Field>

          <Field label="Upload image" error={this.state.errors.image}>
            <File ref={this.elements.image} />
          </Field>

          <button className="create-button" onClick={() => this.handleSubmit}>
            Create
          </button>
        </form>
        <div className="create-list">
          {testUsers.map((user) => (
            <Card key={user.id} user={user} />
          ))}
        </div>
      </div>
    );
  }
}

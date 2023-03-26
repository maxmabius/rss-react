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

interface State {
  isSubmitting: boolean;
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
  constructor(props: Props) {
    super(props);

    this.state = {
      isSubmitting: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.setState({
      ...this.state,
      isSubmitting: true,
    });
    console.log('state', this.state);
  }

  render() {
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
      <div>
        <form className="create-form" onSubmit={this.handleSubmit}>
          <Field label="Name">
            <Input />
          </Field>

          <Field label="Birthday">
            <Input type="date" />
          </Field>

          <Field label="Department">
            <Select>
              <option value="">--Choose an option--</option>
              <option value="marketing">Marketing</option>
              <option value="support">Support</option>
              <option value="services">Services</option>
            </Select>
          </Field>

          <Field label="I consent to my personal data" position="left">
            <Input type="checkbox" />
          </Field>

          <Field label="Select a gender">
            <RadioGroup radioGroupOptions={radioGroupOptions} />
          </Field>

          <Field label="Upload image">
            <File />
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

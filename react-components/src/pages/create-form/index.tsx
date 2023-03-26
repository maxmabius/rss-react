import * as React from 'react';

import Select from '../../components/select';
import Input from '../../components/input';
import RadioGroup from '../../components/radio-group';
import File from '../../components/file';

import './index.css';

interface Props {
  children?: React.ReactNode;
}

interface State {
  isSubmitting: boolean;
}

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
      <form className="create__form" onSubmit={this.handleSubmit}>
        <Input label="name" />
        <Input label="birthday" type="date" />
        <Select label="Department">
          <option value="marketing">Marketing</option>
          <option value="support">Support</option>
          <option value="services">Services</option>
        </Select>
        <Input label="I consent to my personal data" type="checkbox" />
        <RadioGroup radioGroupOptions={radioGroupOptions} legend="Select a gender:" />
        <File label="image" />
      </form>
    );
  }
}

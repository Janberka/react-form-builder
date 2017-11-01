import React from 'react';
import * as FieldTypes from '../fields';
import TypeSelect from './typeSelect';

class FieldEditor extends React.Component {
  state = {
    name: '',
    label: '',
    type: ''
  }

  setProps = (props) => {
    const { name, label, type, onChange, ...fieldData} = props;
    this.onChange = onChange;
    this.setState({ name, label, type, ...fieldData });
  }

  componentDidMount = () => {
    this.setProps(this.props);
  }

  componentWillReceiveProps = (props) => {
    this.setProps(props);
  }

  changeProp = async (k, v) => {
    await this.setState({[k]: v});
    this.onChange(this.state);
  }

  render() {
    const { name, label, type } = this.state;

    const FieldType = FieldTypes[type] || false;

    return (
      <div>
        <div>label: <input type="text" onChange={e=>this.changeProp('label', e.target.value)} value={label}/></div>
        <div>name: <input type="text" onChange={e=>this.changeProp('name', e.target.value)} value={name}/></div>
        <div>type: <TypeSelect value={type} onChange={v=>this.changeProp('type', v)}/></div>
        {FieldType && (
          <div>
            <hr/>
            {FieldType.renderForm(this.state, this.changeProp)}
          </div>
        )}
      </div>
    );
  }
}

export default FieldEditor;
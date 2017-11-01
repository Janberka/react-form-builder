import React from 'react';
import * as FieldTypes from './fields';

class FormViewer extends React.Component {
  state = {
    value: {}
  };

  changeValue = (n, v) => {
    const { value } = this.state;
    value[n] = v;
    this.setState({ value });
    this.props.onChange(value);
  }

  render() {
    const { schema } = this.props;
    const { value } = this.state;

    return (
      <div>
        { schema && schema.map((field,i)=>{
          const Field = FieldTypes[field.type];
          return (
            <div key={i}>
              <label>{field.label}</label>
              <div>
                <Field
                  onChange={(val)=>this.changeValue(field.name, val)}
                  value={value[field.name]}
                  {...field}
                />
              </div>
            </div>
          )
        }) }
      </div>
    )
  }
}

export default FormViewer;
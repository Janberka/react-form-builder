import React from 'react';
import * as FieldTypes from './index';
import TypeSelect from '../builder/typeSelect';

class ArraySettings extends React.Component {
  state = {}

  setProps = ({maxlen, minlen, field, changeProp}) => {
    this.changeProp = changeProp;
    this.setState({ maxlen, minlen, field });
  }

  componentDidMount = () => {
    this.setProps(this.props);
  }

  componentWillReceiveProps = (props) => {
    this.setProps(props);
  }

  changeFieldProp = (k,v) => {
    const { field = {} } = this.state;
    field[k] = v;
    this.changeProp('field', field);
  }

  render() {
    const {maxlen = 0, minlen = 0, field = {}} = this.state;
    const FieldType = FieldTypes[field.type] || false;
    
    return (
      <div>
        <div>min items: <input value={minlen} type="number" onChange={e=>this.changeProp('minlen', e.target.value)}/></div>
        <div>max items: <input value={maxlen} type="number" onChange={e=>this.changeProp('minlen', e.target.value)}/></div>
        <div>item type: <TypeSelect value={field.type} onChange={v=>this.changeFieldProp('type', v)}/></div>
        {
          FieldType && (
          <div>
            <hr/>
            { FieldType.renderForm(field, this.changeFieldProp)}
          </div>
        )}
      </div>
    )
  }
}

class ArrayField extends React.Component {
  static fieldName = 'Array';

  static renderForm = (props, changeProp) => {
    return <ArraySettings {...props} changeProp={changeProp}/>
  }

  constructor(props) {
    super(props);
    const { value, onChange } = this.props;
    this.onChange = onChange;
    this.state = { value };
  }

  updateValue = (value) => {
    this.setState({value});
    this.onChange(value);
  }

  setItem = (i, val) => {
    const { value = [] } = this.state;
    value[i] = val;
    this.updateValue(value);
  }

  addItem = () => {
    const { value = [] } = this.state;
    value.push(undefined);
    this.updateValue(value);
  }

  removeItem = (i) => {
    const { value = [] } = this.state;
    value.splice(i, 1);
    this.updateValue(value);
  }

  render() {
    const { value } = this.state;
    const { field } = this.props;

    const Field = (field && field.type && FieldTypes[field.type]);

    return (
      <div style={{ flex: 1 }}>
        { value && 
          value.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
            <div>::</div>
            { Field ?
              <Field
                onChange={val=>this.setItem(i, val)}
                {...field}
                value={item}
              />
              : item
            }
            <button onClick={e=>this.removeItem(i)}>-</button>
          </div>
        )) }
        <button onClick={this.addItem}>+</button>
      </div>
    )
  }
}

export default ArrayField;
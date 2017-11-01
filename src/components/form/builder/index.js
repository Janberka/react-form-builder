import React from 'react';
import FieldEditor from './editor';

class FormBuilder extends React.Component {
  state = {
    schema: [],
    selectedField: -1
  }

  setProps = (props) => {
    const { schema, onChange } = props;
    this.onChange = onChange;
    if (schema)
    this.setState({ schema });
  }

  componentDidMount = () => {
    this.setProps(this.props);
  }

  componentWillReceiveProps = (props) => {
    this.setProps(props);
  }

  addField = () => {
    const {schema} = this.state;
    schema.push({
      name: 'newfield',
      label: 'New Field',
      type: 'Text'
    })
    this.setState({schema, selectedField: schema.length - 1});
    this.onChange(schema);
  }

  changeField = (index, data) => {
    const {schema} = this.state;
    schema[index] = data;
    this.setState({schema});
    this.onChange(schema);
  }

  removeField = (index) => {
    const {schema} = this.state;
    schema.splice(index, 1);
    this.setState({schema});
    this.onChange(schema);
  }

  render() {
    const { schema, selectedField } = this.state;
    return (
      <div style={{ display: 'flex' }}>
        <div style={{ width: '120px' }}>
          { schema.map((field, index) => (
            <div style={{ padding: '10px', borderBottom: '1px solid #ccc', display: 'flex', alignItems: 'center'}} key={index} onClick={()=>this.setState({ selectedField: index })}>
              <div style={{flex: 1}}>
                <div>{field.label}</div>
                <i>{field.name}</i>
              </div>
              <button onClick={e=>this.removeField(index)}>-</button>
            </div>
          )) }
          <div><button onClick={this.addField}>+</button></div>
        </div>
        <div style={{padding: '10px'}}>
          {selectedField > -1 && (
            <FieldEditor
              onChange={(data)=>this.changeField(selectedField, data)}
              {...schema[selectedField]}
            />
          )}
        </div>
      </div>
    )
  }
}

export default FormBuilder;
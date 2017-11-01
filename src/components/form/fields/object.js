import React from 'react';
import ObjectSettings from '../builder';
import ObjectForm from '../viewer';

class ObjectField extends React.Component {
  static fieldName = 'Object';

  static renderForm = (props, changeProp) => {
    return (
      <ObjectSettings {...props} onChange={x=>changeProp('schema',x)}/>
    )
  }

  render() {
    const { schema, value, onChange } = this.props;

    return (
      <div>
        <ObjectForm schema={schema} value={value} onChange={onChange}/>
      </div>
    )
  }
}

export default ObjectField;
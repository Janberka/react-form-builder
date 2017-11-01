import React from 'react';
import ArrayField from './array';

const defaultExtensions = ['jpg', 'png', 'gif'];

class Image extends React.Component {
  static fieldName = 'Image';

  static renderForm = ({
      allowedExtensions = defaultExtensions
    }, changeProp) => {
    return (
      <div>
        allowed extensions:
        <ArrayField onChange={items=>changeProp('allowedExtensions', allowedExtensions)} field={{ type: 'Text' }} value={allowedExtensions}/>
      </div>
    )
  }

  render() {
    return (
      <input type="file"/>
    )
  }
}

export default Image;
import React from 'react';

class Text extends React.Component  {
  static fieldName = 'Text';

  static renderForm = ({multiline = false, minlen = 0, maxlen = 0}, changeProp) => {
    return (
      <div>
        <div>
          multiline: <input type="checkbox" checked={multiline} onChange={(e)=>changeProp('multiline', e.target.checked)}/>
        </div>
        <div>
          min len: <input type="number" value={minlen} onChange={(e)=>changeProp('minlen', e.target.value)}/>
        </div>
        <div>
          max len: <input type="number" value={maxlen} onChange={(e)=>changeProp('maxlen', e.target.value)}/>
        </div>
      </div>
    )
  }

  render() {
    const { value, onChange, multiline } = this.props;

    return  (
      <div style={{flex: 1}}>
        { multiline ? (
          <textarea value={value} onChange={e=>onChange(e.target.value)}/>
        ) : (
          <input type="text" value={value} onChange={e=>onChange(e.target.value)}/>
        )}
      </div>
    )
  }
}

export default Text;
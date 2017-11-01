import React from 'react';
import './App.css';
import FormBuilder from './components/form/builder';
import FormViewer from './components/form/viewer';

class App extends React.Component {
  state = {
    schema: [
      {
        name: 'title',
        label: 'Başlık',
        type: 'Text'
      },
      {
        name: 'image',
        label: 'Resim',
        type: 'Image',
      },
      {
        name: 'content',
        label: 'İçerik',
        type: 'Text',
        multiline: true,
      },
      {
        name: 'gallery',
        label: 'Galeri',
        type: 'Array',
        field: {
          type: 'Image'
        }
      }
    ],
    data: {}
  }

  updateForm = (schema) => {
    this.setState({ schema });
  }

  updateData = (data) => {
    this.setState({ data })
  }

  render() {
    const { schema, data } = this.state;

    return (
      <div>
        <div style={{ display: 'flex' }}>
          <div style={{flex: 1}}>
            <FormBuilder schema={schema} onChange={this.updateForm}/>
          </div>
          <div style={{flex: 1}}>
            <FormViewer schema={schema} value={data} onChange={this.updateData}/>
          </div>
        </div>
        <div style={{ display: 'flex', backgroundColor: '#efefef', padding: '15px' }}>
          <div style={{flex: 1}}>
            Schema:
            <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(schema, null, "  ")}</pre>
          </div>
          <div style={{flex: 1}}>
            Data:
            <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(data, null, "  ")}</pre>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
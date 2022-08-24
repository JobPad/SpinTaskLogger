import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/appbar/appbar'
import SimpleAccordion from './components/accordian/accordionList';
import LogForm from './components/inputform.jsx/logform';
import InputFormModal from './components/modal/inputFormModal';

function App() {
  let data = [
    {key:1,
    summary: 'log1',
    tdate : '24-08-2022',
    comments : 'Testing the functionality',
    thrs: '5 '
    },
    {key:2,
      summary: 'log2',
      tdate : '24-08-2022',
      comments : 'Testing the functionality2',
      thrs: '5 '
      },
      {key:3,
        summary: 'log3',
        tdate : '24-08-2022',
        comments : 'Testing the functionality3',
        thrs: '5 '
        }
  ]
  return (
    <div>
    <ResponsiveAppBar></ResponsiveAppBar>
     <SimpleAccordion data={data}></SimpleAccordion>
      <InputFormModal  formType= {<LogForm initialState={{}}></LogForm>}></InputFormModal>
     </div>
  );
}

export default App;

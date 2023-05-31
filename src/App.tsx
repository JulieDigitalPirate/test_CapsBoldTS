import Modal from './Modal';
import useModal from './useModal';
import './App.css';

const App = ():JSX.Element => {
  const {toggle, visible} = useModal();
  return (
    <div className="App" style={{display: 'flex', justifyContent: 'center'}}>
      <button style={{marginLeft:"101px" , color:'#f9f8fa', background: 'linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%)', backgroundOrigin: 'border-box', border: '3px solid transparent', borderRadius: '10px', cursor: 'pointer',width: '300px',height: '80px', marginTop: '40px'}} type="button" onClick={toggle} >Show Confirmation</button>
      <Modal visible={visible} toggle={toggle} />
    </div>
  );
}

export default App;
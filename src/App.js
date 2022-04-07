import './App.css';
import DiamondIcon from '@mui/icons-material/Diamond';

function App() {
  return (
    <div className="resume-site">
        <div className="resume-site-left">hello</div>
        <div className="nav-bar">
            <DiamondIcon className='logo'/>
            <span style={{marginLeft: '-3vw', fontSize: '35px', fontFamily: 'Beau Rivage, cursive'}}>Justice Sowah</span>
            <span style={{fontSize: '25px' }}>Home</span>
            <span style={{fontSize: '25px'}}>About</span>
            <span style={{fontSize: '25px'}}>Services</span>
            <span style={{fontSize: '25px'}}>Skills</span>
            <span style={{fontSize: '25px'}}>Contacts</span>
            <button className='download-cv'>Download CV</button>
        </div>
        <div className="resume-site-right">hello</div>
    </div>
  );
}

export default App;

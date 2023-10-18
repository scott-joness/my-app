import './App.css';
import {useState} from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [education, setEducation] = useState('');
  const [workExperience, setWorkExperience] = useState('');

  return (
    <div id='wrapper'>
      <div className='leftSide'>
        <div>
          <label>Name</label>
          <input className={'nameDisplay'} onChange={
              (e) => {
                setName(e.target.value)
              }
            } 
          />
        </div>
        <div>
          <label>Email</label>
          <input className={'emailDisplay'} onChange={
              (e) => {
                setEmail(e.target.value)
              }
            }
          />
        </div>
        <div>
          <label>Phone Number</label>
          <input onChange={
              (e) => {
                setPhoneNumber(e.target.value)
              }
            }
          />
        </div>
        <div>
          <label>Education</label>
          <input onChange={
              (e) => {
                setEducation(e.target.value)
              }
            }
            />
        </div>
        <div>
          <label>Work Experience</label>
          <input onChange={
              (e) => {
                setWorkExperience(e.target.value)
              }
            }
          />
        </div>
      </div>
      <div className='rightSide'>
        <div className='value'>{name}</div>
        <div className='value'>{email}</div>
        <div className='value'>{phoneNumber}</div>
        <div className='value'>{education}</div>
        <div className='value'>{workExperience}</div>
      </div>
    </div>
  );
}

export default App;

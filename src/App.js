import './App.css';
import {useState} from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [education, setEducation] = useState('');
  const [workExperience, setWorkExperience] = useState('');

  const [displayName, setDisplayName] = useState('');
  const [displayEmail, setDisplayEmail] = useState('');
  const [displayPhoneNumber, setDisplayPhoneNumber] = useState('');
  const [displayEducation, setDisplayEducation] = useState('');
  const [displayWorkExperience, setDisplayWorkExperience] = useState('');

  const [contactEditRender, setContactEditRender] = useState(false);
  const [educationEditRender, setEducationEditRender] = useState(false);
  const [workExperienceEditRender, setWorkExperienceEditRender] = useState(false);

  const submitContactButtonPress = () => {
    const contactInputData = {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
    }
    setDisplayName(name);
    setDisplayEmail(email);
    setDisplayPhoneNumber(phoneNumber);

    setContactEditRender(true);
  }

  const submitEducationButtonPress = () => {
    const educationInputData = {
    education: education,
    }
    setDisplayEducation(education);

    setEducationEditRender(true);
  }

  const submitWorkExperienceButtonPress = () => {
    const workExperienceInputData = {
    workExperience: workExperience,
    }
    setDisplayWorkExperience(workExperience);

    setWorkExperienceEditRender(true);
  }

  const editContactButtonPress = () => {
    setContactEditRender(false);
  }
  const editEducationButtonPress = () => {
    setEducationEditRender(false);
  }
  const editWorkExperienceButtonPress = () => {
    setWorkExperienceEditRender(false);
  }

  const renderContactInfo = () => {
    if (contactEditRender){
      return <button onClick={editContactButtonPress}>Edit</button>
    } else {
      return (<div>
        <div>
          <label>Name</label>
          <input value={name} className={'nameDisplay'} onChange={
              (e) => {
                setName(e.target.value)
              }
            } 
          />
        </div>
        <div>
          <label>Email</label>
          <input value={email} className={'emailDisplay'} onChange={
              (e) => {
                setEmail(e.target.value)
              }
            }
          />
        </div>
        <div>
          <label>Phone Number</label>
          <input value={phoneNumber} className={'phoneNumberDisplay'} onChange={
              (e) => {
                setPhoneNumber(e.target.value)
              }
            }
          />
        </div>
        <div>
        </div>
        <button onClick={submitContactButtonPress}>Submit</button>
      </div>)
    }
  }

  const renderEducationInfo = () => {
    if (educationEditRender){
      return <button onClick={editEducationButtonPress}>Edit</button>
    } else {
      return (<div>     
        <div>
          <label>Education</label>
          <input value={education} className={'educationDisplay'} onChange={
              (e) => {
                setEducation(e.target.value)
              }
            }
            />
        </div>
        <button onClick={submitEducationButtonPress}>Submit</button>
            </div>)
         
    }

  }

  const renderWorkExperienceInfo = () => {
    if (workExperienceEditRender){
      return <button onClick={editWorkExperienceButtonPress}>Edit</button>
    } else {
      return (<div>     
        <div>
          <label>Work Experience</label>
          <input value={workExperience} className={'workExperienceDisplay'} onChange={
              (e) => {
                setWorkExperience(e.target.value)
              }
            }
            />
        </div>
        <button onClick={submitWorkExperienceButtonPress}>Submit</button>
            </div>)
         
    }

  }
  return (
    <div id='wrapper'>
      <div className='leftSide'>
        <div className='contactWrapper'>
          <div className='contactInfo'>
            <div className='contactInfoHeader'><label>Contact Info</label></div>
              {renderContactInfo()}
          </div>
        </div>
        <div className='educationWrapper'>
            <div className='educationInfo'>
              <div className='educationInfoHeader'><label>Education Info</label></div>
            {renderEducationInfo()}
            </div>
          </div>
          <div className='workExperienceWrapper'>
            <div className='workExperienceInfo'>
              <div className='workExperienceInfoHeader'><label>Work Experience Info</label></div>
            {renderWorkExperienceInfo()}
            </div>
          </div>
      </div>
      <div className='rightSide'>
        <div className='nameValue'>{displayName}</div>
        <div className='value'>{displayEmail}</div>
        <div className='value'>{displayPhoneNumber}</div>
        <div className='value'>{displayEducation}</div>
        <div className='value'>{displayWorkExperience}</div>
      </div>
     
      
      <div> 
        
      </div>
    </div>

  );

}
export default App;

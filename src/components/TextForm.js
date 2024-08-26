import React ,{useState} from 'react'

function TextForm(props) {
    const [text, setText] = useState('')
    const [preview, setPreview] = useState(null)
    const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

const handleUp = ()=>{
  if(!text){
    
    props.showAlert(" Please enter some text", "warning");
  }else{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Uppercase enabled", "success")
  }
}
const handlelo = ()=>{
  if(!text){
    props.showAlert(" Please enter some text", "warning");
  }else{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Lowercase enabled", "success")
  }
}
const handleChange = (e)=>{
    setText(e.target.value)
}


const handlePreview =()=>{
  if(!text){
    setShowModal(false);
    props.showAlert(" Please enter some text", "warning");
  }else{
    const pre= text;
    setPreview(pre);
    props.showAlert(" Preview enabled", "success")

  }
}

const handleExtraSpaces=()=>{
  if(!text){
    
    props.showAlert(": Please enter some text", "warning");
  }else{
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
   props.showAlert(": Extra Spaces has been removed", "success")
  }
}
  return (

        <>
        <div>
      <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black', important: 'true'}}>
            <h4>{props.heading}</h4>
            <div className="mb-3">
          
              <textarea value={text} onChange={handleChange} className="form-control" 
              style={{backgroundColor: props.mode === 'dark' ? '#17273e' : 'white', important: 'true' ,
                color: props.mode === 'dark' ? 'white' : 'black'}} id="myBocx" rows="8" ></textarea>
            </div>  

            <button onClick={handleUp} className="btn btn-primary me-3">Uppercase</button>
            <button onClick={handlelo} className="btn btn-primary me-3">Lowercase</button>
            <button onClick={handleExtraSpaces} className="btn btn-primary me-3">Remove Spaces</button>
            <button className="btn btn-primary ms-0 m-3" onClick={() => { handleShowModal(); handlePreview(); }}>Preview Text</button>
       
       <div>
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Text Preview</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p>{preview}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
    <hr/>
    <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black', important: 'true'}}>
    <h4>Your text summary</h4>
    <ul><li><p>{text.length} Character and {text.trim() === "" ? 0 : text.trim().split(/\s+/).length} Words.</p></li></ul>
      
    <ul><li><p>It will take {0.008 * text.trim().split(/\s+/).length} min to read.</p></li></ul>
    </div>
  
    {/* <button onClick={handlePreview} className="btn btn-primary">Preview text</button>
    <p>{preview}</p> */}
    </div>
        </>
  )
}

export default TextForm

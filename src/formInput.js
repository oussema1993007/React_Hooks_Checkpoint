import './App.css';
//import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

function formInput(props) {
    return (
        <div className='inputForm'>
            <div className="input-wrapper">
                <label style={{fontSize:'22px'}} className='inputLabel bg-warning'>Title</label>
                <input ref={props.refTitle} className='inputField bg-warning' id="titleId" placeholder=''></input>
            </div>
            <div className="input-wrapper">
                <label style={{fontSize:'22px'}} className='inputLabel bg-warning'>Description</label>
                <input ref={props.refDescription} className='inputField bg-warning' id="descriptionId" placeholder=''></input>
            </div>
            <div className="input-wrapper">
                <label style={{fontSize:'22px'}} className='inputLabel bg-warning'>PosterURL</label>
                <input ref={props.refPosterURL} className='inputField bg-warning' id="posterURLId" placeholder=''></input>
            </div>
            <div className="input-wrapper">
                <label style={{fontSize:'22px'}} className='inputLabel bg-warning'>Rating</label>
                <input ref={props.refRating} className='inputField bg-warning' id="ratingId" placeholder=''></input>
            </div>
            <button className='addButton bg-warning' onClick={() => props.addMovie()}> ADD </button>
        </div>);
}
formInput.defaultProps = {
    refTitle: 'Xxxxxxxxx',
    refDescription: 'Xxxxxxxxxxxxx',
    refRating: 0.0,
    refPosterURL: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png?20170513175923'
}

export default formInput;
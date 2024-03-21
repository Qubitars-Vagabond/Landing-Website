import React from 'react';

const Field = (props) => {
  return (
    <div>
      <div className="form-group">
          <input
            className="contact-form-text"
            type={props.type} 
            name={props.name}
            placeholder={props.placeholder}
            onChange={props.onChange}
            onBlur={props.onBlur}
            required

          />
       
        {/* Check if both props.touched and props.errors are true to display the error message */}
        <p className='help-block text-danger'>
          {(props.touched && props.errors) && 
            <span>{props.errors}</span>
          }
        </p>
      </div>
    </div>
  );
};

export default Field;

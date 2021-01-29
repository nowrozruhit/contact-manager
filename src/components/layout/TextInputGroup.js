import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInputGroup = ({ 
    label,
    name,
    value,
    placeholder,
    type,
    onChange,
    error
 }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} className={classnames('form-control form-control-lg', {'is-invalid':error})} />
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

TextInputGroup.prototype = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.string
}

TextInputGroup.defaultProps = {
    type: 'text'
}
 
export default TextInputGroup;
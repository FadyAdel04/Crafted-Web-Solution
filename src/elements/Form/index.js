/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const Form = (props) => {
  const {
    name, value, type, placeholder, className, errorResponse, label,
  } = props;

  const [hasError, setHasError] = useState(null);

  let pattern;
  if (type === 'email') pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (type === 'number') pattern = /^[0-9+]{8,15}$/;

  const onChange = (event) => {
    const target = {
      target: {
        name: name,
        value: event.target.value,
      },
    };

    if (type === 'email') {
      if (!pattern.test(event.target.value)) setHasError(errorResponse);
      else setHasError(null);
    }

    if (type === 'number') {
      if (event.target.validity.valid) props.onChange(target);
      if (!pattern.test(event.target.value)) {
        setHasError(errorResponse);
      } else {
        setHasError(null);
        props.onChange(target);
      }
    } else {
      props.onChange(target);
    }
  };

  const baseInputStyle =
    'w-full p-4 text-base font-normal text-white bg-[#111322] rounded-xl border border-white/[0.1] placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-200 shadow-inner';

  if (type === 'textarea') {
    return (
      <div className="flex flex-col mb-6 w-full">
        {label && (
          <label htmlFor={name} className="block text-sm font-medium text-slate-300 mb-2">
            {label}
          </label>
        )}
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          className={[baseInputStyle, 'resize-none leading-relaxed', className].join(' ')}
          onChange={onChange}
          rows="6"
          required
        />
        {hasError && (
          <span className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
            ⚠️ {hasError}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col mb-6 w-full">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-slate-300 mb-2">
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type === 'number' ? 'tel' : type}
        placeholder={placeholder}
        pattern={pattern ? pattern.source : undefined}
        value={value}
        className={[baseInputStyle, className].join(' ')}
        onChange={onChange}
        required
      />
      {hasError && (
        <span className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
          ⚠️ {hasError}
        </span>
      )}
    </div>
  );
};

Form.defaultProps = {
  errorResponse: 'يرجى إدخال البيانات بالصيغة المطلوبة.',
  type: 'text',
  placeholder: '',
  className: '',
  label: '',
};

Form.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  errorResponse: PropTypes.string,
  label: PropTypes.string,
};

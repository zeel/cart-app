import React, {
  PropTypes
} from 'react';

const Icon = ({
  name,
  className,
  ...props
  }) => (
  <svg role="icon"
    className={className}
    {...props}
  >
    <use xlinkHref={name} />
  </svg>
);

Icon.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  prefix: PropTypes.string
};

export default Icon;

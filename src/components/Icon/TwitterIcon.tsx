import {FC, memo} from 'react';

import {IconProps} from './Icon';

const TwitterIcon: FC<IconProps> = memo(props => (
  <svg fill="currentColor" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path
      d="M4 4L20 20M20 4L4 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
));

export default TwitterIcon;

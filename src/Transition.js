import React, {useContext} from 'react';

import BoolCSSTransition from './BoolCSSTransition'
import { NavigationContext } from './Navigation';

const Transition = ({
  children,
  timeout,
  match,
  className,
  containerProps,
}) => {

  const { transition } = useContext(NavigationContext)

  let css = false;
  let props = {};

  if (typeof(transition) === 'string'){
    props.classNames = transition;
    props.timeout = timeout;
    css = true;
  }
  else if (Object.prototype.toString.call(transition) === '[object Object]'){
    props = {...transition};
  }
  else if (typeof(transition) === 'function'){
    props = {...transition()}
  }

  return (
    <BoolCSSTransition
      in={match != null}
      mountOnEnter={!css}
      unmountOnExit
      css={css}
      {...props}
    >
      <div className={className} {...containerProps}>
        {children}
      </div>
    </BoolCSSTransition>

  )
}

export default Transition;
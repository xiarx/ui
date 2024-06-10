import React, {useState} from "react";

import type { FC } from "react";

import "./style";

interface Props {
  active?: boolean
}

const Toggle: FC<Props> = (props): JSX.Element => {
  const [active, setActive] = useState<boolean>(!!props.active)

  return (
    <div className={`toggle${active ? ' active' : ''}`}>
      <div className='toggle-left' onClick={(event) => active ? setActive(false) : null}></div>
      <div className='toggle-slider'>
        <div className='toggle-slider-icon'></div>
      </div>
      <div className='toggle-right' onClick={(event) => !active ? setActive(true) : null}>
        <div className='toggle-line horizontal one'></div>
        <div className='toggle-line horizontal two'></div>
        <div className='toggle-line vertical one'></div>
        <div className='toggle-line vertical two'></div>
      </div>
    </div>
  );
};

export default Toggle;

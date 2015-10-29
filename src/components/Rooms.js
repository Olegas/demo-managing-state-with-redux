import React from 'react';

function counter(props, room) {
  if (props.counters[room] > 0) {
    return <i>{ props.counters[room] }</i>;
  } else {
    return null;
  }
}

export default function(props)
{
  return <div style={{float:'right', width: 200, cursor: 'pointer'}}>
    Список комнат:
    <ul>
      {props.items.map((name) => {
        if(name == props.room)
          return <li><b><span onClick={() => props.onSelect(name)} >{name} {counter(props, name)}</span></b></li>;

        return <li><span onClick={() => props.onSelect(name)} >{name} {counter(props, name)}</span></li>
      })}
    </ul>
  </div>
}
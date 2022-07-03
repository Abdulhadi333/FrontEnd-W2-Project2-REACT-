import React from 'react'

 function TeamMemeber(props) {
  return (
<div className="col-md-4 col-sm-6  " >
<div className='card' >
    <div className='card-header'>
        <img style={{maxWidth: '100%'} } src={props.info.img} />
    </div>
    <div className='card-body' style={{ backgroundColor : props.info.position ? 'white':'black' }}>
    <h1>{props.info.name}</h1>
    <h5>{props.info.position}</h5>
    <div>{props.info.phone}</div>
     <div>{props.info.email}</div>
     <div>{props.info.website}</div>

    </div>
</div>
</div>

  )
}

export default TeamMemeber; 
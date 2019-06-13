import React, { useMemo } from 'react'

function Portal({
  portal,
  number,
}) {

  const isPortalUp = useMemo(() => portal && portal.from < portal.to ? true : false, [portal])
  // const isPortalUp = portal && portal.from < portal.to ? true : false
  return (
    <div className={`portal`}>
      <div className={`portal-content ${isPortalUp ? 'portal-up' : 'portal-down'}`}>
        { number === portal.from && portal.to}
      </div>   
    </div>
  )
}

export default Portal
import React, { useEffect, useState } from 'react'
import { getBuffers } from './service/service'
import type { LeadDescriptor } from "./types/DataTypes";

const App = () => {
  const [leadsList, updateLeadsList] = useState(new Array<LeadDescriptor>())

  useEffect(() => {
    getBuffers()
      .then(response => {
        updateLeadsList(response.data)
      })
      .catch(error => {
        alert(`Could not get the list of leads.\n${error.message}`)
      })
  }, [])

  return (
    <>
      <div className="container">
        <div className="listing">
          <h1 className="heading">All leads</h1>
          <span className="small">Showing {leadsList.length}</span>
          <ul>
            {
              leadsList.map((leadsInformation, index) => {
                let { timestamp, timezone, filename: category} = leadsInformation
                return (
                  <li key={timestamp}>
                    <a className={index % 2 === 0 ? 'even' : 'odd'} href="/">
                      <span className="category">{category}</span>
                      &nbsp;
                      <span className="timezone">{timezone}</span>
                      &nbsp;
                      <span className="date-crawled">{new Date(timestamp).toLocaleDateString()}</span>
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="panel-meta">
            <h1 className="heading">Info</h1>
        </div>
      </div>
    </>
  )
}

export default App;

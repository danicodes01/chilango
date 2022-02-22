import React, { useEffect } from 'react'
import Spanish from '../table/Spanish'
import Phrase from '../table/Phrase'
import English from '../table/English'
import Examples from '../table/Examples'
import Search from '../table/Search'



const Home = ({chilangos, table, setTable, chilango, theme, t}) => {



  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      i += 1
      if (i >= chilango.length - 1) {
        return () => clearInterval(interval)
      }

      setTable(chilango[i])
    }, 86400000)
  }, [setTable, chilango])



  return (
    <div> 
          <Search table={table} chilango={chilango} chilangos={chilangos} t={t}/>
          <Phrase phrase={table.phrase} />
          <Spanish theme={theme} spanish={table.spanish} />
          <English english={table.english} />
          <Examples
            exampleS={table.exampleS}
            exampleSb={table.exampleSb}
            exampleE={table.exampleE}
            exampleEb={table.exampleEb}
            /> 

  </div>
  )
}

export default Home
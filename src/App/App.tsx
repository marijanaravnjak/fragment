import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import Router from './Router/Router'



export default function App() {

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        Promise.all([

        ]).then(() => {
            setLoading(false)
        })
    })
    return (
        <Box sx={{ flexGrow: 1 }}>
             <Router isLoading={loading} />
      </Box>
   
  )
}


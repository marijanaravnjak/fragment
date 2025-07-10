import { Box } from '@mui/material'
import {useEffect, useState} from 'react'


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
            Hello
      </Box>
   
  )
}


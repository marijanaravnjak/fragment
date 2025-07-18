import { Suspense } from 'react'
import { Routes } from 'react-router-dom'
import Typography from '@mui/material/Typography'


type RouterProps = {
    isLoading:boolean
}


const Router = ({ isLoading }: RouterProps) => {

    if (isLoading) {
        return (
            <Typography variant='body2'>Loading</Typography>
        )
    }

    return (
        <div>
            <Suspense fallback='Loading...'>
                <Routes>

                </Routes>
            </Suspense>
        </div>
    )
}


export default Router
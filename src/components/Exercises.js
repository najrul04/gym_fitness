import { Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import ExerciseCard from './ExerciseCard'

const Exercises = ({exercises, setExercises, bodyPart}) => {
  console.log(exercises)
  return (
    <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
       <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Showing Results</Typography>
       <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {
          exercises.map((exercise, index)=> (
            <ExerciseCard 
            key={index}
            exercise={exercise}
            />
          ))
        }
       </Stack>
    </Box>
  )
}

export default Exercises
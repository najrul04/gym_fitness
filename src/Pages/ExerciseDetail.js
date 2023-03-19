import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const {id} = useParams();
  useEffect(() => {
    const fetchExercisesData = async () => {

    }
    fetchExercisesData();
  }, [id])
  
  return (
    <Box>
        <Detail exerciseDetail={exerciseDetail}/>
        <ExerciseVideos/>
        <SimilarExercises/>
    </Box>
  )
}

export default ExerciseDetail
import React from 'react'

const Addblog = () => {
  return (
    <div>
      <Typography variant='h2'>ADD COURSE</Typography><br></br>
      <TextField name='cName'{...register('cName')} variant='contained' label='Blogname'></TextField><br></br>
      <TextField name='cDesc'{...register('cDesc')} variant='contained' label='Description'></TextField><br></br>
      <TextField name='cDuration'{...register('cDuration')} variant='contained' label='Author'></TextField><br></br>
      <TextField name='cDate'{...register('cDate')} type='date' variant='contained' label='CourseStartDate'></TextField>
      <Button onClick={handlesubmit(createCourse)} variant='contained' color='success'>ADD</Button>
    </div>
  )
}

export default Addblog

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/react'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import PrivateLayout from '../../components/PrivateLayout/PrivateLayout'
import Link from '../../components/Link/Link'
import MenuItem from '@mui/material/MenuItem';

const Settings = () => {

  const router = useRouter()
  const { data: session, loading } = useSession()
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setError] = useState(false)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const notify = async e => {

    e.preventDefault()
    setIsLoading(true)

    console.log({ name, message})
    //const response = await signIn('credentials', { redirect: false, username, password })

    //console.log(response, "<-----")

    setIsLoading(false)

    //if (!response ||  response.status !== 200) {
      //setError(true)
    //}
  }

  const tipos = [
    {
      value: 'Mail',
      label: 'Mail',
    },
    {
      value: 'Notificacion',
      label: 'Notificacion',
    },
    {
      value: 'Push',
      label: 'Push',
    },
    {
      value: 'SMS',
      label: 'SMS',
    },
  ];

  
    return <PrivateLayout title="Settings">
      <Card sx={{ width: 300, margin: '0 auto' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h1" style={{ textAlign: 'center'}}>
          Notificaciones
        </Typography>

        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: '10px 0', width: '100%' },
          }}
          onSubmit={notify}
        >
          <TextField
            required
            error={isError}
            label="Nombre notificacion"
            variant="outlined"
            value={name}
            onChange={e => {
              setError(false)
              setName(e.target.value)
            }}
          />
          <TextField
            id="outlined-select-type"
            select
            label="Tipo Notificacion"
            defaultValue="Mail"
            helperText="Seleccione un tipo de notificacion"
          >
          {tipos.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          </TextField>

          <TextField
            required
            error={isError}
            label="Mensaje"
            variant="outlined"
            multiline
            maxRows={4}
            value={message}
            onChange={e => {
              setError(false)
              setMessage(e.target.value)
            }}
          />

          {isError && <Typography gutterBottom color="error.main" style={{ fontSize: '0.8em' }}>
            Save failed: wrong data.
          </Typography>}

          <Button
            variant="contained"
            type="submit"
            style={{ margin: '10px 0 20px', width: '100%' }}
            disabled={isLoading}
          >
            Guardar
          </Button>

          
        </Box>
      </CardContent>
    </Card>
    </PrivateLayout>
}

export default Settings

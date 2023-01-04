import Typography from '@mui/material/Typography'
import PublicLayout from '../components/PublicLayout/PublicLayout'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <PublicLayout
      title="Hackaton - Web App"
      description="Sistema de notificaciones"
      noAppNameInTitle={true}
      transparentNav={true}
    >
      <header className={styles.header}>
        <div className={styles.background}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className={styles.headerContent}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Hackaton App
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" component="h2">
            Sistema de notificaciones - web apps.
          </Typography>
        </div>
      </header>

      <main >
        
      </main>
    </PublicLayout>
  )
}

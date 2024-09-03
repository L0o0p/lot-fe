import styles from './index.module.scss'
import {WheelOfFortune} from './Turntable'
import { AwardForm } from './AwardForm'

export const Lot = ()=> {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.Image}>
          {/* <img className={styles.fullCoverImage} src="/Turntable/turntable.png" alt="turntable" /> */}
          <WheelOfFortune  />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.tab}>
          <div className={styles.header}>
            <div className={styles.logo}>
              <img src="/logo/logo.png" alt="logo" />
            </div>
            <h1>Winning Records</h1>
          </div>
        </div>
        <div className={styles.prizeLog}>
          <AwardForm/>
        </div>
        <div className={styles.temp}>
          <div className={styles.pre}>《 Previous -</div>
          <div className={styles.page}>1/2</div>
          <div className={styles.nxt}>- Next 》</div>
        </div>
        <div className={styles.additionalNotes}>
          <div className={styles.states}>O(∩_∩)O Explore cutting-edge tech at the Tech Innovators Expo! Discover AI, robotics, and more. Network and witness tomorrow's innovations today. Don't miss it!</div>
        </div>
      </div>
    </div>
  )
}


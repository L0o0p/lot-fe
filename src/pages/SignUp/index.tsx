import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { ifAuthAtom } from "./store";
import styles from './index.module.scss'
import { MailIcon, UserIcon } from "./components/iconCollection";
import { usersAtom } from "../../store";

export const SignUp = () => {
  const [, setResponse] = useState(null);
  const [, setAuth] = useAtom(ifAuthAtom);
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [users, setUsers] = useAtom(usersAtom)
  const SignUp = async () => {
    console.log('username', username, 'email', email);
    console.log('users', users, typeof users);
    const user = {
      Username: username,
      email: email,
      Prize: null,
      other: null
    };
    // 直接使用展开操作符将新用户添加到数组中，并通过 setUsers 更新状态
    setUsers([...users, user]);
  };
  useEffect(() => {
    console.log('users', users);
  }, [users])

  return (
    <div className={styles.container}>
      <div className={styles.toolBox}>
        <div className={styles.header_Block}>
          <div className={styles.header_avatar}>
            <img src="/logo/logo.png" alt="" />
          </div>
          <div className={styles.header_text}>Enter the lucky draw</div>
        </div>
        <div className={styles.content_block}>
          <div className={styles.a}>
            <div className={styles.item}>
              <UserIcon />
              <input
                placeholder='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.a}>
            <div className={styles.item}>
              <MailIcon />
              <input
                placeholder='E-mail'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type={"text"}
                className={styles.pass}
              />

            </div>
          </div>
        </div>
        <div className={styles.confirm_block}>
          <div className={styles.sigup_button}
            onClick={SignUp}
          >Sign up to participate</div>
          <div className={styles.login_button}
            onClick={() => setAuth(false)}
          >already Sign and Check my profile</div>
        </div>
      </div>
      <div className={styles.rt}>
        <img src={'/login/keyboard.webp'} alt="login" />
      </div>
    </div>
  )
}
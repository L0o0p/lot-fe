import { users } from '../../store';
import styles from './index.module.scss'
export const InfoPage = () => {
    return (
        <div className={styles.container}>

            <div className={styles.window}>
                <div className={styles.title}>
                    UsersFile
                </div>
                <div className={styles.search}>
                    <input type="text" />
                    <button>Search</button>
                </div>
                <div className={styles.form}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr>
                                <th> index</th>
                                <th>👨 Username</th>
                                <th>📧 E-mail</th>
                                <th>🎁 Prize</th>
                                <th>💬 OtherInfo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((item, index) => (
                                <tr key={index} style={{ borderBottom: '1px solid #ccc' }}>
                                    <td align="center">{index}</td>
                                    <td align="center">{item.Username}</td>
                                    <td align="center">{item.email}</td>
                                    <td align="center">{item.Prize ? item.Prize : '-'}</td>
                                    <td align="center">{item.other ? item.Prize : '-'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

import { useAwardFormData } from '../store';
import './index.module.scss'

// const data = [
//   { prizes: 'Gold', participant: 'Rabbit' },
//   { prizes: 'Silver', participant: 'Doggy' },
//   {  prizes: 'Bronze', participant: 'Tiger'},
//   // 其他属性...
// ];

export const AwardForm = () => {
  const {awardFormData} = useAwardFormData()
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>Prizes</th>
          <th>Winners</th>
        </tr>
      </thead>
      <tbody>
        {awardFormData?.map((item, index) => (
          <tr key={index} style={{ borderBottom: '1px solid #ccc' }}>
            <td align="center">{item.prizes}</td>
            <td align="center">{item.participant}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

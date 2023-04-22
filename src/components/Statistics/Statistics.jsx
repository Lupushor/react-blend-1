import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';

export const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <StatisticTitle>Main Statistics</StatisticTitle>}

      <StatisticsList>
        {stats.map(({ id, title, total }) => (
          <StatisticItem key={id} title={title} total={total} />
        ))}
      </StatisticsList>
    </>
  );
};

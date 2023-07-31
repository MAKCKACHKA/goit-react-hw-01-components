import PropTypes from 'prop-types';
import {
  Statsec,
  Title,
  Statlist,
  Label,
  Percentage,
  Statitem,
} from '../App.styled.js';

export const Statistics = ({ title, stats }) => {
  return (
    <Statsec>
      {title && <Title>{title}</Title>}
      <Statlist>
        {stats.map(stat => (
          <Statitem key={stat.id}>
            <Label>{stat.label} </Label>
            <Percentage>{stat.percentage}</Percentage>
          </Statitem>
        ))}
      </Statlist>
    </Statsec>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const StarContainer = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  align-items: center;
`;

const StarItem = styled.li<{ active: boolean }>`
  cursor: pointer;
  color: ${(props) => (props.active ? "#FFD700" : "#C4C4C4")};
  transition: color 200ms;

  &:hover {
    color: #ffa500;
  }
`;

const RatingLabel = styled.span`
  margin-left: 10px;
  color: #6b7280;
`;
interface StarRatingProps {
  rating: number;
  onRatingChange: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, onRatingChange }) => {
  return (
    <StarContainer role="radiogroup" aria-labelledby="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <StarItem
          key={star}
          role="radio"
          title={`${star} star`}
          aria-checked={rating >= star}
          aria-posinset={star}
          aria-setsize={5}
          tabIndex={0}
          active={rating >= star}
          onClick={() => onRatingChange(star)}
        >
          <FaStar />
        </StarItem>
      ))}
      <RatingLabel>Up</RatingLabel>
    </StarContainer>
  );
};

export default StarRating;

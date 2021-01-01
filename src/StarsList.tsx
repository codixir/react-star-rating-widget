import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState
} from "react";
import StarItem from "./StarItem";
import "./StarsList.css";

interface IStar {
  id: number;
  isActive: boolean;
}

interface IDATA {
  stars: IStar[];
  currentRating: number;
}

type IProps = {
  numOfStars: number;
  color: string;
};

const data: IDATA = {
  stars: [],
  currentRating: 0
};

const StarsList: FunctionComponent<IProps> = ({ numOfStars, color }) => {
  const clonedStars = [...data.stars];
  const [stars, setRatings] = useState<IStar[]>(clonedStars);
  const [currentRating, setCurrentRating] = useState<number>(0);

  const init = (num: number) => {
    const res: IStar[] = [];
    for (let i = 1; i <= numOfStars; i++) {
      res.push({
        id: i,
        isActive: false
      });
    }
    setCurrentRating(0);
    setRatings([...res]);
  };

  useEffect(() => {
    init(numOfStars);
  }, [numOfStars]);

  const updateStars = (id: number) => {
    const newRatings = stars.map((item: IStar) => {
      if (item.id <= id) {
        item.isActive = true;
      } else {
        item.isActive = false;
      }

      return item;
    });

    setCurrentRating(id);
    setRatings([...newRatings]);
  };

  return (
    <>
      <ul className="stars-list">
        {stars.map((item: IStar, index: number) => {
          return (
            <StarItem
              key={index}
              item={item}
              color={color}
              updateStars={updateStars}
            />
          );
        })}
      </ul>
      <h4>currentRating: {currentRating}</h4>
    </>
  );
};

export default StarsList;

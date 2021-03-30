import React, {useEffect, useState} from 'react';
import DataItem from '../../components/DataItem';
import { data } from '../../payload';

export default function Main() {
  const [payload, setPayload] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setPayload(data.main);
    setLoading(true);
  }, [loading]);

  const changeColor = (id) => {
    setPayload((ps) => {
      const color = ps.map((color) => {
        if (color._id === id) {
          setLoading(false);
          color.clicked = !color.clicked;
        }
        return color;
      });
      return color;
    });
  };

  const mainItem = payload.map((i) => (
    <DataItem
      key={i._id}
      onClick={() => changeColor(i._id)}
      name={i.name}
      clicked={i.clicked}
    />
  ));

  return <div>{mainItem}</div>;
}

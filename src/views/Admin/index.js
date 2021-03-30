import React, {useEffect, useState} from 'react';
import DataItem from '../../components/DataItem';
import { data } from '../../payload';

export default function Admin() {
  const [payload, setPayload] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setPayload(data.admin);
    setLoading(true);
  }, [loading]);

  const adminColor = (id) => {
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

  const adminItem = payload.map((i) => (
    <DataItem
      key={i._id}
      onClick={() => adminColor(i._id)}
      name={i.name}
      clicked={i.clicked}
    />
  ));

  return <div>{adminItem}</div>;
}

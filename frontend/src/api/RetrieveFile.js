import React, { useState, useEffect } from "react";

const RetrieveFile = ({ position, data }) => {
  const [file, setFile] = useState(null);
  const [cid, setCid] = useState();
  data.forEach((marker) => {
    if (
      marker.location.coordinates.lat === position.lat() &&
      marker.location.coordinate.lng === position.lng()
    ) {
      setCid(data.cid);
    }
  });
  useEffect(() => {
    if (!cid) return;
    fetch(`https://ipfs.io/ipfs/${cid}`)
      .then((response) => response.blob())
      .then((blob) => {
        setFile(URL.createObjectURL(blob));
      });
  }, [cid]);
  return file ? <img src={file} alt="Retrieved File" /> : null;
};

export default RetrieveFile;

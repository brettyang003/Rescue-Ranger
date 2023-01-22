import React, { useState, useEffect } from "react";

const RetrieveFile = ({ cid }) => {
  const [file, setFile] = useState(null);
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

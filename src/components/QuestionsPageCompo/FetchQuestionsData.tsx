import React, { useEffect, useState } from "react";
import { checkQuestionSubmission } from "./apiFunctions";

interface Props {
  id: string;
}

const IsSubmit: React.FC<Props> = ({ id }) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await checkQuestionSubmission(id);
        setData(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return <div>{data ? <h1>Name: {data.name}</h1> : <p>Loading...</p>}</div>;
};

export default IsSubmit;

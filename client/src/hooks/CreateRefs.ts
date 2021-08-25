import { createRef, useState, useEffect } from "react";

const CreateRefs = (arrLength: number) => {
  const [elRefs, setElRefs] = useState<HTMLFormElement[]>([]);
  useEffect(() => {
    setElRefs((elRefs) =>
      Array(arrLength)
        .fill(null)
        .map((_, i) => elRefs[i] || createRef<HTMLDivElement>())
    );
  }, [arrLength]);

  return { elRefs };
};

export default CreateRefs;

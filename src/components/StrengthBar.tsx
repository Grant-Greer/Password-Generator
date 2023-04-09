import React, { FunctionComponent, useEffect, useState } from "react";

type StrengthBarProps = {
  length: number;
  includeUpper: boolean;
  includeLower: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
};

export const StrengthBar: FunctionComponent<StrengthBarProps> = ({
  length,
  includeUpper,
  includeLower,
  includeNumbers,
  includeSymbols,
}) => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    let count = 0;
    if (length >= 8) {
      count += 1;
    }
    if (includeUpper) {
      count += 1;
    }
    if (includeLower) {
      count += 1;
    }
    if (includeNumbers) {
      count += 1;
    }
    if (includeSymbols) {
      count += 1;
    }
    return length < 8 ? setCount(0) : setCount(count);
  };

  useEffect(() => {
    handleCount();
  }, [length, includeUpper, includeLower, includeNumbers, includeSymbols]);

  const strength = () => {
    if (count === 0) {
      return "Weak";
    } else if (count === 1) {
      return "Weak";
    } else if (count === 2) {
      return "Weak";
    } else if (count === 3) {
      return "Medium";
    } else if (count === 4) {
      return "Strong";
    } else if (count === 5) {
      return "Very Strong";
    }
  };

  return <div>{strength()}</div>;
};

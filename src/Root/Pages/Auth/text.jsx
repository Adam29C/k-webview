import React, { useRef, useState } from "react";

const OTPInput = ({ length = 4, onComplete }) => {
  const inputRef = useRef(Array(length).fill(null));

  const [OTP, setOTP] = useState(Array(length).fill(""));

  const handleTextChange = (input, index) => {
    const newPin = [...OTP];
    newPin[index] = input;
    setOTP(newPin);

    if (input.length === 1 && index < length - 1) {
      inputRef.current[index + 1]?.focus();
    }

    if (input.length === 0 && index > 0) {
      inputRef.current[index - 1]?.focus();
    }

    if (newPin.every((digit) => digit !== "")) {
      onComplete(newPin.join(""));
    }
  };

  return (
    <div className={``}>
      <div className="d-flex justify-content-center align-items-center mt-5">
        {Array.from({ length }, (_, index) => (
          <React.Fragment key={index}>
            <input
              type="text"
              maxLength={1}
              value={OTP[index] || ""}
              onChange={(e) => handleTextChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputRef.current[index] = el)}
              className="controls"
            />
            {index < length - 1 ? " - " : ""}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default OTPInput;

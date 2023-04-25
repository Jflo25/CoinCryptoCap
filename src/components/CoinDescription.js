import React, { useState } from "react";
import DOMPurify from "dompurify";

const CoinDescription = ({ coin }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };

  const descriptionText = coin.description ? coin.description.en : "";
  const shortenedText = descriptionText.slice(0, 500) + "...";

  return (
    <div className="body w-full">
      <div className="description p-6 ">
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              showFullText ? descriptionText : shortenedText
            ),
          }}
        ></p>
        {!showFullText && (
          <button onClick={toggleFullText} className="read-more">
            Read More
          </button>
        )}
      </div>
    </div>
  );
};

export default CoinDescription;

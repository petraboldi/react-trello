import React from "react";
import PropTypes from "prop-types";

/*
 * TODO: Create the Tag component
 *
 * Requirements:
 * - Must be named Tag
 * - Must be a function component
 * - Should render a <span> element with the text
 * - Should return null if no text is provided
 *
 * Tips:
 * - You can use the 'tag' CSS class for styling
 *
 */
const Tag = ({ text }) => {
  if (text) {
    return (
      <>
        <span className="tag">
          <p>{text}</p>
        </span>
      </>
    );
  }
  return null;
};

Tag.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tag;

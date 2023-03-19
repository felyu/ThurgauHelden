import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SearchCross(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.342 1.342a1.167 1.167 0 011.65 0L8 6.35l5.008-5.008a1.167 1.167 0 111.65 1.65L9.65 8l5.008 5.008a1.167 1.167 0 01-1.65 1.65L8 9.65l-5.008 5.008a1.167 1.167 0 01-1.65-1.65L6.35 8 1.342 2.992a1.167 1.167 0 010-1.65z"
        fill="#fff"
        stroke="#F6F6F6"
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default SearchCross

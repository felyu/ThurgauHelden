import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ChevronBack(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      {...props}
    >
      <Path
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 7l-5 5 5 5"
      />
    </Svg>
  )
}

export default ChevronBack

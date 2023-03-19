import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function EyeOpened(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      {...props}
    >
      <G
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Path d="M10 12a2 2 0 104 0 2 2 0 10-4 0" />
        <Path d="M22 12c-2.667 4.667-6 7-10 7s-7.333-2.333-10-7c2.667-4.667 6-7 10-7s7.333 2.333 10 7" />
      </G>
    </Svg>
  )
}

export default EyeOpened

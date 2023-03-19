import * as React from "react"
import Svg, { G, Path, Circle } from "react-native-svg"

function Filter(props) {
  return (
    <Svg width={props.size} height={props.size} viewBox="0 0 24 24" {...props}>
      <G
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeWidth={2}
      >
        <Path d="M3 5h4m14 0H11m-8 7h12m6 0h-2M3 19h2m16 0H9" />
        <Circle cx={9} cy={5} r={2} />
        <Circle cx={17} cy={12} r={2} />
        <Circle cx={7} cy={19} r={2} />
      </G>
    </Svg>
  )
}

export default Filter

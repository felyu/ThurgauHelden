import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LocationMarker(props) {
  return (
    <Svg width={props.size} height={props.size} viewBox="0 0 32 32" {...props}>
      <Path
        fill={props.color}
        d="M4 12.983a1 1 0 00.629.945l9.601 3.841 3.841 9.602A1 1 0 0019 28h.016a1 1 0 00.924-.658l8-22a1 1 0 00-1.282-1.283l-22 8a1.001 1.001 0 00-.658.925z"
      />
    </Svg>
  )
}

export default LocationMarker

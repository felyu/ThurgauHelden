import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Health = (props) => (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M29.474 7.929L21 12.822V3.038h-6v9.784L6.527 7.929l-3 5.197 8.472 4.892-8.472 4.892 3 5.197L15 23.215V33h6v-9.785l8.474 4.892 3-5.197-8.472-4.892 8.472-4.892-3-5.197z"
        fill={props.color}
      />
    </Svg>
)
  
export default Health
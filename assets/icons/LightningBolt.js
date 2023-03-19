import * as React from "react"
import Svg, { Path } from "react-native-svg"

const LightningBolt = (props) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M15.031 2.844 4.47 15.03l7.312.813-.812 7.312L21.53 10.97l-7.312-.813.812-7.312Z"
      stroke={props.color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default LightningBolt

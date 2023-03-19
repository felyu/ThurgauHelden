import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Chat(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 256 256"
      {...props}
    >
      <Path
        fill={props.color}
        d="M128 20a108 108 0 00-96.15 157.23L21 209.66A20 20 0 0046.34 235l32.43-10.81A108 108 0 10128 20zm0 192a84 84 0 01-42.06-11.27 12 12 0 00-6-1.62 12.1 12.1 0 00-3.8.62l-29.79 9.93 9.93-29.79a12 12 0 00-1-9.81A84 84 0 11128 212z"
      />
    </Svg>
  )
}

export default Chat

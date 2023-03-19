import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Compass(props) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M17.417 0a17.417 17.417 0 1017.416 17.417A17.45 17.45 0 0017.417 0zm0 32.154a14.738 14.738 0 1114.737-14.737 14.754 14.754 0 01-14.737 14.737zm7-23.53l-10.4 4.723c-.301.145-.54.395-.67.704l-4.27 9.947a1.34 1.34 0 00.284 1.474 1.39 1.39 0 001.474.285l9.948-4.27c.308-.131.558-.37.703-.67L26.192 10.4a1.356 1.356 0 00-1.775-1.775z"
        fill={props.color}
      />
      <Path d="M11 23.5l3.5-8.5 9.5-4.5-4 9.5-9 3.5z" fill="#EDEDED" />
      <Path
        d="M17.417 0a17.417 17.417 0 1017.416 17.417A17.45 17.45 0 0017.417 0zm0 32.154a14.738 14.738 0 1114.737-14.737 14.754 14.754 0 01-14.737 14.737zm7-23.53l-10.4 4.723c-.301.145-.54.395-.67.704l-4.27 9.947a1.34 1.34 0 00.284 1.474 1.39 1.39 0 001.474.285l9.948-4.27c.308-.131.558-.37.703-.67L26.192 10.4a1.356 1.356 0 00-1.775-1.775zm-5.158 10.601l-6.398 2.747 2.747-6.398 6.665-3.03-3.014 6.681z"
        fill={props.color}
      />
    </Svg>
  )
}

export default Compass
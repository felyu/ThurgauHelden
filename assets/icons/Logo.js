import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function Logo(props) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 242 242"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_49_439)">
        <Path
          d="M134.31 121l83.49-96.8L84.7 121h24.2l-84.7 96.8L157.3 121h-22.99zm-52.03 12.1H47.19l30.25-21.78 90.75-66.55L121 24.2 36.3 60.5v36.3c0 24.2 6.05 47.19 18.15 67.76l27.83-31.46zm77.44-24.2h33.88l-29.04 21.78-85.91 62.92c12.1 10.89 26.62 19.36 42.35 24.2 50.82-18.15 85.91-66.55 84.7-121V60.5l-2.42-1.21-43.56 49.61z"
          fill={props.color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_49_439">
          <Path fill="#fff" d="M0 0H242V242H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Logo

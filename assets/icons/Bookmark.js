import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Bookmark = (props) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      clipRule="evenodd"
      d="M11.98 18.632 6.065 21.88a.985.985 0 0 1-1.315-.394v0a1.045 1.045 0 0 1-.118-.466V6.622c0-2.746 1.871-3.844 4.564-3.844h6.326c2.611 0 4.565 1.025 4.565 3.661v14.582a.98.98 0 0 1-.977.979 1.074 1.074 0 0 1-.475-.119l-5.952-3.25a.738.738 0 0 0-.703 0Z"
      stroke={props.color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default Bookmark

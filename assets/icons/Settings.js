import * as React from "react"
import Svg, { Path, Ellipse } from "react-native-svg"

const Settings = (props) => (
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
      d="m20.906 7.624-.62-1.08a1.905 1.905 0 0 0-2.603-.705v0a1.895 1.895 0 0 1-2.857-1.593v0a1.916 1.916 0 0 0-.54-1.388c-.358-.371-.852-.58-1.368-.58h-1.25c-.506 0-.99.202-1.346.56a1.906 1.906 0 0 0-.553 1.353v0A1.91 1.91 0 0 1 7.86 6.077a1.822 1.822 0 0 1-.913-.257v0a1.905 1.905 0 0 0-2.602.705L3.68 7.624a1.916 1.916 0 0 0 .693 2.608v0a1.914 1.914 0 0 1 0 3.314v0a1.907 1.907 0 0 0-.693 2.6v0l.63 1.089a1.909 1.909 0 0 0 2.601.741v0a1.885 1.885 0 0 1 2.593.696c.164.277.252.593.255.915v0a1.91 1.91 0 0 0 1.908 1.913h1.251a1.91 1.91 0 0 0 1.908-1.904v0a1.906 1.906 0 0 1 .556-1.355c.358-.36.845-.56 1.352-.558.32.009.634.097.913.256v0c.91.526 2.073.215 2.602-.695v0l.657-1.099a1.908 1.908 0 0 0-.694-2.608v0a1.903 1.903 0 0 1-.694-2.61c.166-.289.405-.529.694-.695v0a1.916 1.916 0 0 0 .694-2.6v0-.008Z"
      stroke={props.color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Ellipse
      cx={12.297}
      cy={11.889}
      rx={2.629}
      ry={2.636}
      stroke={props.color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default Settings

import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Trophy(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 16 13"
      {...props}
    >
      <Path
        fill={props.color}
        d="M3.217 6.962A3.75 3.75 0 010 3.25v-.5C0 1.784.784 1 1.75 1h1.356c.228-.585.796-1 1.462-1h6.864c.647 0 1.227.397 1.462 1h1.356c.966 0 1.75.784 1.75 1.75v.5a3.75 3.75 0 01-3.217 3.712 5.014 5.014 0 01-2.771 3.117l.144 1.446c.005.05.03.12.114.204.086.087.217.17.373.227.283.103.618.274.89.568.285.31.467.723.467 1.226v.75h1.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H4v-.75c0-.503.182-.916.468-1.226.27-.294.606-.465.889-.568.139-.048.266-.126.373-.227.084-.085.109-.153.114-.204l.144-1.446a5.015 5.015 0 01-2.77-3.117zM4.5 1.568V5.5a3.5 3.5 0 107 0V1.568a.068.068 0 00-.068-.068H4.568a.068.068 0 00-.068.068zm2.957 8.902l-.12 1.204c-.093.925-.858 1.47-1.467 1.691a.766.766 0 00-.3.176c-.037.04-.07.093-.07.21v.75h5v-.75c0-.117-.033-.17-.07-.21a.766.766 0 00-.3-.176c-.609-.221-1.374-.766-1.466-1.69l-.12-1.204a5.064 5.064 0 01-1.087 0zM13 2.5v2.872a2.25 2.25 0 001.5-2.122v-.5a.25.25 0 00-.25-.25H13zm-10 0H1.75a.25.25 0 00-.25.25v.5c0 .98.626 1.813 1.5 2.122z"
      />
    </Svg>
  )
}

export default Trophy
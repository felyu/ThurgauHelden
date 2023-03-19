import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ForkAndKnife(props) {
  return (
    <Svg width={props.size} height={props.size} viewBox="0 0 24 24" {...props}>
      <Path
        fill="currentColor"
        d="M18 22q-.425 0-.712-.288Q17 21.425 17 21v-7h-1q-.825 0-1.412-.588Q14 12.825 14 12V7q0-2.075 1.463-3.537Q16.925 2 19 2v19q0 .425-.288.712Q18.425 22 18 22zM8 22q-.425 0-.713-.288Q7 21.425 7 21v-8.15q-1.275-.35-2.137-1.4Q4 10.4 4 9V3q0-.425.287-.713Q4.575 2 5 2t.713.287Q6 2.575 6 3v6h1V3q0-.425.287-.713Q7.575 2 8 2t.713.287Q9 2.575 9 3v6h1V3q0-.425.288-.713Q10.575 2 11 2t.713.287Q12 2.575 12 3v6q0 1.4-.863 2.45-.862 1.05-2.137 1.4V21q0 .425-.287.712Q8.425 22 8 22z"
      />
    </Svg>
  )
}

export default ForkAndKnife

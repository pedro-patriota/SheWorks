import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={19}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M7.583 11.75v-1.438h3.834v1.438H7.583ZM3.75 6.719V5.28h11.5V6.72H3.75ZM.875 1.687V.25h17.25v1.438H.875Z"
      fill="#7A7A7A"
    />
  </Svg>
)

export default SvgComponent

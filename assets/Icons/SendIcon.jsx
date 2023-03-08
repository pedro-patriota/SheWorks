import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.707.293a1 1 0 0 1 .221 1.078l-8 20a1 1 0 0 1-1.822.076l-3.851-7.702-7.702-3.85a1 1 0 0 1 .076-1.823l20-8a1 1 0 0 1 1.078.22Zm-11.49 12.904 2.682 5.364 6.306-15.766L3.439 9.101l5.364 2.682 2.49-2.49a1 1 0 0 1 1.414 1.414l-2.49 2.49Z"
      fill="#383838"
    />
  </Svg>
)

export default SvgComponent

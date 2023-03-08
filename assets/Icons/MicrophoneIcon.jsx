import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={30}
    height={28}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M18.75 13.906V6.953c0-1.92-1.679-3.476-3.75-3.476-2.071 0-3.75 1.556-3.75 3.476v6.953c0 1.92 1.679 3.477 3.75 3.477 2.071 0 3.75-1.556 3.75-3.476Z"
      stroke="#333"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M22.5 13.906c0 3.84-3.358 6.954-7.5 6.954-4.142 0-7.5-3.113-7.5-6.954M15 20.86v3.476M18.75 24.336h-7.5"
      stroke="#333"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default SvgComponent

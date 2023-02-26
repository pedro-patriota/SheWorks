import * as React from "react"
import Svg, { Path } from "react-native-svg"

const HomeIcon = (props) => (
  <Svg
    width={25}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M4.75 21.5v-12l8.05-6 7.95 6v12H14.9v-7.125h-4.325V21.5H4.75Zm1.5-1.5h2.825v-7.125H16.4V20h2.85v-9.75L12.8 5.375 6.25 10.25V20Z"
      fill="#A6A6A6"
    />
  </Svg>
)

export default HomeIcon

import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props, fill) => (
  <Svg
    width={24}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 12.475c-1.1 0-2-.35-2.7-1.05-.7-.7-1.05-1.6-1.05-2.7s.35-2 1.05-2.7c.7-.7 1.6-1.05 2.7-1.05s2 .35 2.7 1.05c.7.7 1.05 1.6 1.05 2.7s-.35 2-1.05 2.7c-.7.7-1.6 1.05-2.7 1.05ZM4 20.5v-2.35c0-.633.158-1.175.475-1.625A3.05 3.05 0 0 1 5.7 15.5c1.117-.5 2.188-.875 3.212-1.125A12.987 12.987 0 0 1 12 14c1.033 0 2.058.13 3.075.387 1.017.259 2.083.63 3.2 1.113.517.233.933.575 1.25 1.025.317.45.475.992.475 1.625v2.35H4ZM5.5 19h13v-.85c0-.267-.08-.52-.238-.762a1.505 1.505 0 0 0-.587-.538c-1.067-.517-2.042-.87-2.925-1.063-.883-.191-1.8-.287-2.75-.287s-1.875.096-2.775.287c-.9.192-1.875.546-2.925 1.063a1.42 1.42 0 0 0-.575.537c-.15.242-.225.496-.225.763V19Zm6.5-8.025c.65 0 1.188-.213 1.613-.637.425-.425.637-.963.637-1.613s-.213-1.187-.637-1.612c-.425-.425-.963-.638-1.613-.638s-1.188.213-1.613.638c-.425.425-.637.962-.637 1.612 0 .65.213 1.188.637 1.613.425.425.963.637 1.613.637Z"
      fill="#A6A6A6"
    />
  </Svg>
)

export default SvgComponent

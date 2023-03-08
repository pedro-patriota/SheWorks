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
      d="m16.667 9.141-6.698 6.317a4.513 4.513 0 0 1-3.094 1.209 4.513 4.513 0 0 1-3.094-1.209A4.011 4.011 0 0 1 2.5 12.54a4.01 4.01 0 0 1 1.281-2.917l6.698-6.317a3.008 3.008 0 0 1 2.063-.806c.773 0 1.515.29 2.062.806.547.516.855 1.215.855 1.945s-.308 1.43-.855 1.945L7.9 13.513a1.504 1.504 0 0 1-1.031.403c-.387 0-.758-.145-1.031-.403a1.337 1.337 0 0 1-.427-.973c0-.364.153-.714.427-.972l6.187-5.829"
      stroke="#020202"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity={0.6}
    />
  </Svg>
)

export default SvgComponent

import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 18a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
      fill="#5F5F5F"
    />
    <Path d="M7 13a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H7Z" fill="#5F5F5F" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.83 7.106A2 2 0 0 1 13.617 6h4.764a2 2 0 0 1 1.789 1.106L21.618 10H25a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4h3.382l1.447-2.894ZM18.381 8h-4.764l-1.447 2.894A2 2 0 0 1 10.382 12H7a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-3.382a2 2 0 0 1-1.789-1.106L18.382 8Z"
      fill="#5F5F5F"
    />
  </Svg>
)

export default SvgComponent

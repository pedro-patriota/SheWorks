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
      d="M16 10a1 1 0 0 1 1 1v.17c1.165.412 2 1.524 2 2.83a1 1 0 1 1-2 0 1 1 0 1 0-1 1 3 3 0 0 1 1 5.83V21a1 1 0 1 1-2 0v-.17A3.001 3.001 0 0 1 13 18a1 1 0 1 1 2 0 1 1 0 1 0 1-1 3 3 0 0 1-1-5.83V11a1 1 0 0 1 1-1ZM10.535 11.626a1 1 0 0 0-1.56-1.252 8.995 8.995 0 0 0-1.32 2.25 1 1 0 1 0 1.853.751 6.994 6.994 0 0 1 1.027-1.75ZM9 16a1 1 0 1 0-2 0 8.97 8.97 0 0 0 2.25 5.953 9.036 9.036 0 0 0 2.25 1.842 1 1 0 1 0 1-1.73 7.036 7.036 0 0 1-1.75-1.435A6.97 6.97 0 0 1 9 16Z"
      fill="#5F5F5F"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 16C3 8.82 8.82 3 16 3s13 5.82 13 13-5.82 13-13 13S3 23.18 3 16ZM16 5C9.925 5 5 9.925 5 16s4.925 11 11 11 11-4.925 11-11S22.075 5 16 5Z"
      fill="#5F5F5F"
    />
  </Svg>
)

export default SvgComponent

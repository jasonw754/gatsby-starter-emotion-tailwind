import React from "react"
import tw from "twin.macro"

import Layout from "../components/layout"

export default function Home() {
  return <Layout><div css={tw`text-red-500`}>Hello world!</div></Layout>
}

import { type ComponentStory, type ComponentMeta } from "@storybook/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { Text } from "../../../../components"

import { ImageLink } from ".."

import demoPhoto from "../../../../localAssets/demoPhoto.jpg"

const Default: ComponentMeta<typeof ImageLink> = {
  title: "ImageLink",
  component: ImageLink
}

const Template: ComponentStory<typeof ImageLink> = (args) => (<ImageLink {...args} />)

export const DefaultExample = Template.bind({})
DefaultExample.args = {
  href: "#",
  src: demoPhoto,
  height: 400,
  width: 500,
  icon: (
    <>
      <FontAwesomeIcon icon={faLinkedinIn} size="2xl" color="black" />
        <Text
          font={"sans"}
          color="white"
          size="sm"
          customStyles={{
            fontSize: "7px"
          }}
        >
          Clicky Boingo!
        </Text>
    </>
  )
}

export default Default

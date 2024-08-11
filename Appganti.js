import { TamaguiProvider, Theme, View, createTamagui } from "@tamagui/core";
import { Button } from "tamagui";
import { config } from "@tamagui/config/v3";
const tamaguiConfig = createTamagui(config);

import { H5, XStack, YStack, useThemeName } from 'tamagui'

function ThemeInverseDemo() {

  const themeName = useThemeName()

  const opposite = themeName.includes('dark') ? 'light' : 'dark'
  return (

    <XStack space>

      <Buttons title="Normal" name={themeName} />

      <Theme inverse>

        <Buttons
          title="Inversed"
          name={themeName.replace(themeName.split('_')[0], opposite)}
        />

      </Theme>

    </XStack>

  )

}
function Buttons({ name, title }) {

  return (

    <YStack
      elevation="$4"
      backgroundColor="$background"
      padding="$4"
      borderRadius="$4"
      space="$3"
    >

      <H5>{title}</H5>

      <Button>{name}</Button>

      <Button themeInverse>inversed</Button>

      <Button theme="alt1">{name}_alt1</Button>

      <Theme name="yellow">

        <Button>{name.split('_')[0] + '_yellow'}</Button>

      </Theme>

    </YStack>

  )

}

export default function App() {
  return (
    <TamaguiProvider defaultTheme="dark" config={tamaguiConfig}>

      <ThemeInverseDemo/>

      <View width={200} height={200} backgroundColor="$background" />
      <Button>I'm a dark button</Button>

      <Theme name="pink">
        <Button theme="blue">Hello world</Button>
      </Theme>

    </TamaguiProvider>
  );
}

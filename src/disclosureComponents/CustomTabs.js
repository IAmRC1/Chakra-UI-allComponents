import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, useColorModeValue, Image, Box, chakra, useTab, useStyles} from "@chakra-ui/react"

export default function CustomTabs() {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Tabs variant="enclosed">
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>Tabs come in 6 different variants to style the tabs: line,enclosed, enclosed-colored, soft-rounded, solid-rounded</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Tabs size="md" variant="enclosed">
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>We support 3 sizes sm, md, lg</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Tabs align="end" variant="enclosed">
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>We support 3 sizes start, center, end.</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>One</Tab>
          <Tab>Two</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>Stretch the tab list to fit the container by passing isFitted prop.</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Tabs variant="unstyled">
        <TabList>
          <Tab _selected={{ color: "white", bg: "blue.500" }}>Tab 1</Tab>
          <Tab _selected={{ color: "white", bg: "green.400" }}>Tab 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>Simply set the variant to unstyled, and use the _selected, _hover, _active style props.</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Example />
      <Tabs defaultIndex={1}>
        <TabPanels>
          <TabPanel>
            <Image
              boxSize="200px"
              fit="cover"
              src="https://resizing.flixster.com/wTgvsiM8vNLhCcCH-6ovV8n5z5U=/300x300/v1.bjsyMDkxMzI5O2o7MTgyMDQ7MTIwMDsxMjAwOzkwMA"
            />
          </TabPanel>
          <TabPanel>
            <Image
              boxSize="200px"
              fit="cover"
              src="https://vignette.wikia.nocookie.net/naruto/images/2/21/Sasuke_Part_1.png/revision/latest?cb=20170716092103"
            />
          </TabPanel>
        </TabPanels>
        <TabList>
          <Tab>Naruto</Tab>
          <Tab>Sasuke</Tab>
        </TabList>
      </Tabs>
      <Example1 />
      <ControlledExample />
      <CustomTabs1 />
      <Example2 />
    </div>
  )
}

function Example() {
  const colors = useColorModeValue(
    ["red.50", "teal.50", "blue.50"],
    ["red.900", "teal.900", "blue.900"],
  )
  const [tabIndex, setTabIndex] = React.useState(0)
  const bg = colors[tabIndex]
  return (
    <Tabs onChange={(index) => setTabIndex(index)} bg={bg}>
      <TabList>
        <Tab>Red</Tab>
        <Tab>Teal</Tab>
        <Tab>Blue</Tab>
      </TabList>
      <TabPanels p="2rem">
        <TabPanel>The Primary Colors</TabPanel>
        <TabPanel>Are 1, 2, 3</TabPanel>
        <TabPanel>Red, yellow and blue.</TabPanel>
      </TabPanels>
    </Tabs>
  )
}

function Example1() {
  return (
    <Tabs>
      <TabList>
        <Tab>One</Tab>
        <Tab isDisabled>Two</Tab>
        <Tab>Three</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>1</TabPanel>
        <TabPanel>2</TabPanel>
        <TabPanel>3</TabPanel>
      </TabPanels>
    </Tabs>
  )
}

function ControlledExample() {
  const [tabIndex, setTabIndex] = React.useState(0)

  const handleSliderChange = (event) => {
    setTabIndex(parseInt(event.target.value, 10))
  }

  const handleTabsChange = (index) => {
    setTabIndex(index)
  }

  return (
    <Box>
      <input
        type="range"
        min="0"
        max="2"
        value={tabIndex}
        onChange={handleSliderChange}
      />

      <Tabs index={tabIndex} onChange={handleTabsChange}>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>Click the tabs or pull the slider around</p>
          </TabPanel>
          <TabPanel>
            <p>Yeah yeah. What's up?</p>
          </TabPanel>
          <TabPanel>
            <p>Oh, hello there.</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

function CustomTabs1() {
  // 1. Reuse the styles for the Tab
  const StyledTab = chakra("button", { themeKey: "Tabs.Tab" })

  const CustomTab = React.forwardRef((props, ref) => {
    // 2. Reuse the `useTab` hook
    const tabProps = useTab(props)
    const isSelected = !!tabProps["aria-selected"]

    // 3. Hook into the Tabs `size`, `variant`, props
    const styles = useStyles()

    return (
      <StyledTab __css={styles.tab} {...tabProps}>
        <Box as="span" mr="2">
          {isSelected ? "😎" : "😐"}
        </Box>
        {tabProps.children}
      </StyledTab>
    )
  })

  return (
    <Tabs>
      <TabList>
        <CustomTab>One</CustomTab>
        <CustomTab>Two</CustomTab>
      </TabList>
      <TabPanels>
        <TabPanel>1</TabPanel>
        <TabPanel>2</TabPanel>
      </TabPanels>
    </Tabs>
  )
}

function Example2() {
  // 1. Create the component
  function DataTabs({ data }) {
    return (
      <Tabs>
        <TabList>
          {data.map((tab, index) => (
            <Tab key={index}>{tab.label}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {data.map((tab, index) => (
            <TabPanel p={4} key={index}>
              {tab.content}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    )
  }

  // 2. Create an array of data
  const tabData = [
    {
      label: "Nigerian Jollof",
      content: "Perhaps the greatest dish ever invented.",
    },
    {
      label: "Pounded Yam & Egusi",
      content:
        "Perhaps the surest dish ever invented but fills the stomach more than rice.",
    },
  ]

  // 3. Pass the props and chill!
  return <DataTabs data={tabData} />
}
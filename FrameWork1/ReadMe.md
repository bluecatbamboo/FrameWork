# Theme.js

> Encouraged to set your theme spec

#### params

| Key            | Type                   | Description                                                      |
| -------------- | ---------------------- | ---------------------------------------------------------------- |
| breakpoints    | Array Array of strings | representing viewport widths to use for min-width media queries  |
| fontSizes      | Array Array of numbers | to use as a typographic scale                                    |
| colors         | Object                 | Color names that can be used in color, bg, and borderColor props |
| space          | Array Array of numbers | for use as margin and pixel values                               |
| fonts          | Array or Object        | Values for the fontFamily prop                                   |
| fontWeights    | Array or Object        | Values for fontWeight prop                                       |
| lineHeights    | Array or Object        | Values for lineHeight prop                                       |
| letterSpacings | Array or Object        | Values for letterSpacing prop                                    |
| shadows        | Array or Object        | Values for boxShadow prop                                        |
| borders        | Array or Object        | Values for border props                                          |
| radii          | Array or Object        | Values for borderRadius props                                    |
| opacity        | Array or Object        | Values for opacity props                                         |

# navigation/MainNavigator.js

> List of screens that needed to be navigated

# src/components

> Folder that contain universial components, when you create your component, create a folder and make your js files in it, `Remember` file names start with a lowercase meanwhile others start with uppercase.

# src/components/index.js

> Import components and export, will be convenient when we use them

# src/screen

> Folder that contain all the screens, when you create your screen, create a folder and make your js files in it

# src/screen/index.js

> Import screens and export, will be convenient when we use them

# navigator.js

> Contain navigation actions for the particular screen, located in screen folder

---

# Pre-created components (can link with theme)

> Three basic component has been created, can be used widely, if they are not sutible please use components that provided by `react-native`, in theory should be sufficient

### Box

- regular box that contain stuff, mostly use on filling spaces

#### props

| Name         | Description                       | Type   | preset      |
| ------------ | --------------------------------- | ------ | ----------- |
| px           | padding on x axis, left and right | number | 0           |
| py           | padding on y axis, top and bottom | number | 0           |
| width        | width of the component            | number | 0           |
| height       | height of the component           | number | 0           |
| borderRadius | borderRadius of the component     | number | 0           |
| borderWidth  | border Width                      | number | 0           |
| bordercolor  | border color                      | number | none        |
| bg           | background color                  | string | transparent |

### Flex

- container that very good at container stuff, also able to arrange them in different order and aligning them

#### props

| Name           | Description                                                                 | Type   | preset      |
| -------------- | --------------------------------------------------------------------------- | ------ | ----------- |
| px             | padding on x axis, left and right                                           | number | 0           |
| py             | padding on y axis, top and bottom                                           | number | 0           |
| width          | width of the component                                                      | number | 0           |
| height         | height of the component                                                     | number | 0           |
| borderRadius   | borderRadius of the component                                               | number | 0           |
| borderWidth    | border Width                                                                | number | 0           |
| bordercolor    | border color                                                                | number | none        |
| bg             | background color                                                            | string | transparent |
| flexDirection  | arrange directions (prefer row/column)                                      | string | column      |
| alignItems     | aligning items, (center, flex-start, flex-end, space-around, space-between) | string | flex-start  |
| justifyContent | same as alignItems but in different direction                               | string | flex-start  |

### Text

- Customized version of Text

#### props

| Name        | Description | Type                       |
| ----------- | ----------- | -------------------------- |
| fontSize    | font size   | number or Array of numbers |
| fontWeights | font weight | number or string           |
| color       | font color  | string                     |

#### Important: please use above props in their components only, other components performs differently. hints will appear when you are building your stuff so don't worry. Only use native component if nessesary. If there is something ele that you would like to add to the components above, you can use origial style prop like (style={{boxShadow:xxxx}})

> Note! try not to set height at all, use example : `<Box height={9}/>` to create space etc.

# commands

- npm run ios
- npm run android

\*android sdk location might cause problem when run android, local.properties in android might help

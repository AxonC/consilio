# VukHeading
Basic heading component with styles consistent with the style guide.

## Usage
Places a heading on a page, rendering the given content.
```vue
<vuk-heading type="super">Super Heading</vuk-heading>
```
As per the style guide, the following headings are supported:
- super
- heading-1
- heading-2
- heading-3
- heading-4

See `src/components/VukHeading/headingTypes.ts` for the listing of values.

Heading type is defined by passing the `type` prop to the `VukHeading` component.

Based upon the design requirements, different font-weights can be defined. The following values are supported
- light
- regular
- bold
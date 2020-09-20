# VukButton

Consistent button component for usage across VATSIM UK Services.

## Usage

Example usage

```html
<vuk-button type="blue" variant="primary">Content Goes here</vuk-button>
```

### Colors

Per the design guidelines, the following types are defined:

- blue
- yellow
- purple
- success (green)
- error (red)

### Variants

Within these types, two variants are supported

- primary
- secondary

### Icons

An icon can also be used within a button but a directive must be applied to the SVG.
Adding the `v-button-icon` directive will apply the necessary logic to allow the icon to co-exist with text within the button.

```html
<vuk-button color="purple" variant="secondary">
  <svg
    v-button-icon
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <!-- path content here -->
  </svg>
  Testing some long text with an icon
</vuk-button>
```

### Disabling

If you need to disable a button, for example within a form, simply use the built in HTML disabled attribute.

```html
<vuk-button color="blue" variant="primary" disabled
  >Content Goes here</vuk-button
>
```

This will render the disabled button of the button and disable its usage. This can also be used via a bound property as normal.

### Events

To register a click event on the button, you must use the native modifier

```html
<vuk-button color="blue" variant="primary" @click.native="myFunction"
  >Content Goes here</vuk-button
>
```

### Native Attributes

Any of the native HTML button attributes can be applied directly to the component e.g. type in a form.

```html
<vuk-button color="blue" variant="primary" type="submit"
  >Content Goes here</vuk-button
>
```

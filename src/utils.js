// Button Variants
const variants = {
  simple: {
    '--bg': 'rgba(41, 98, 255, 1)',
    '--clr': '#fff',
    '--outline': 'none',
    '--bg-over': 'rgba(0, 57, 203, 1)',
    '--clr-over': '#fff'
  },
  default: {
    '--bg': 'rgba(224, 224, 224, 1)',
    '--clr': '#000',
    '--clr-over': '#fff',
    '--outline': 'none',
    '--bg-over': 'rgba(174, 174, 174, 1)'
  },
  outline: {
    '--bg': 'rgba(255, 255, 255, 1)',
    '--clr': 'rgba(61, 90, 254, 1)',
    '--clr-over': '#fff',
    '--outline': '2px solid rgba(61, 90, 254, 1)',
    '--bg-over': 'rgba(61, 90, 254, 1)',
    'borderRadius': 0
  },
  text: {
    '--bg': 'transparent',
    '--clr': 'rgba(61, 90, 254, 1)',
    '--outline': 'none',
    '--bg-over': 'rgba(41, 98, 200, 0.1)'
  },
}

// Button Sizes: sm, md, lg
const sizes = {
  sm: {'--scale': 'scale(.8)'},
  md: {'--scale': 'scale(1)'},
  lg: {'--scale': 'scale(1.2)'},
}

// Styles for disabled button
const disabled = {
  color: '#777',
  cursor: 'no-drop',
  '--bg': '#aaa',
  '--bg-over': 'rgba(41, 98, 255, 0.1)'
}

// 4 color options
const colors = {
  default: {
    '--clr': '#111',
    '--clr-over': '#111',
    '--bg': '#bbb',
    '--bg-over': '#aaa',
  },
  primary: {
    '--clr': '#fff',
    '--clr-over': '#fff',
    '--bg': 'rgba(41, 98, 255, 1)',
    '--bg-over': 'rgba(0, 57, 203, 1)',
  },
  secondary: {
    '--clr': '#fff',
    '--clr-over': '#fff',
    '--bg': 'rgba(69, 90, 100, 1)',
    '--bg-over': 'rgba(28, 49, 58, 1)',
  },
  danger: {
    '--clr': '#fff',
    '--clr-over': '#fff',
    '--bg': 'rgba(211, 47, 47, 1)',
    '--bg-over': 'rgba(154, 0, 7, 1)',
  },
}

// Button layout, with properties
const buttons = [
  { width: .5, title: '<Button />', props: {variant: 'default'}, name: 'Button', },
  { width: .5, title: '<Button variant="outline" />', props: {variant: 'outline'}, name: 'Outlined Button', },
  { width: .5, title: '<Button variant="text" />', props: {variant: 'text'}, name: 'Text Button', },
  { width: .5, title: '<Button disableShadow />', props: {disableShadow: true}, name: 'No Shadow', },
  { width: .5, title: '<Button disabled />', props: {disabled: true}, name: 'Disabled', },
  { width: .5, title: '<Button variant="text" disabled />', props: {disabled: true, variant: 'text'}, name: 'Disabled Text', },
  { width: .5, title: '<Button startIcon="account_circle" />', props: {startIcon: 'account_circle'}, name: 'Start Icon', },
  { width: .5, title: '<Button endIcon="local_grocery_store" />', props: {endIcon: 'local_grocery_store'}, name: 'End Icon', },
  { width: .33, title: '<Button size="sm" />', props: {size: 'sm'}, name: 'Small size', },
  { width: .33, title: '<Button size="md" />', props: {size: 'md'}, name: 'Normal Size', },
  { width: .33, title: '<Button size="lg" />', props: {size: 'lg'}, name: 'Large size', },
  { width: .25, title: '<Button color="default" />', props: {color: 'default'}, name: 'Default Color', },
  { width: .25, title: '<Button color="primary />', props: {color: 'primary'}, name: 'Primary Color', },
  { width: .25, title: '<Button color="secondary" />', props: {color: 'secondary'}, name: 'Secondary Color', },
  { width: .25, title: '<Button color="danger" />', props: {color: 'danger'}, name: 'Danger Color', },
]

export {variants, colors, sizes, disabled, buttons};

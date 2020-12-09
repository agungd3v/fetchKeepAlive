# fetchKeepAlive

fetchKeepAlive is a Javascript package for to make it easier for you to create popup with dynamic data from json.

## Installation

clone this repository and paste codes below

```bash
<script src="./fetchKeepAlive/fetchKeepAlive.js"></script>
```

OR feel free using cdn

```bash
<script src="https://cdn.jascom.tech/fetchKeepAlive/fetchKeepAlive.js"></script>
```

## Template

```python
<div id="yourid"></div>
```

## Usage

```python
new fetchKeepAlive({
  data: 'https://cdn.jascom.tech/fetchKeepAlive/demo/data.json',
  selector: '#yourid'
})
```

Make sure the data form is an array of objects, because basically the data object is a javascript fetch

## Customize

You can modify some parts based on the available objects below

| Object | Type | default |
| ------ | ------ | ------ |
| data | string | false |
| selector | string | false |

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
